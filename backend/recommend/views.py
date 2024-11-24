from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import joblib
from .models import Career, Roadmap, Resource
import datetime

# Load the pre-trained model
model = joblib.load('../rfweights.pkl')


@csrf_exempt
def create_entries(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            # Extract the relevant fields from the payload
            features = [
                data.get('logical_thinking'),
                data.get('hackathon_attend'),
                data.get('coding_skills'),
                data.get('public_speaking_skills'),
                data.get('book_interest'),
                data.get('career_interest'),
                data.get('certificate_code'),
                data.get('company_intend'),
                data.get('extra_course'),
                data.get('introvert_extro'),
                data.get('management_technical'),
                data.get('memory_capability'),
                data.get('read_writing_skill'),
                data.get('self_learning'),
                data.get('senior_elder_advise'),
                data.get('smart_hardworker'),
                data.get('subject_interest'),
                data.get('team_player'),
                data.get('worskhop_code'),
                data.get('name'),  # Include name even if not used
                '/api_name'  # Include api_name even if not used
            ]

            print("Features: ", features)

            # Convert features to float where applicable
            numerical_features = [float(f) if isinstance(
                f, (int, float)) else 0 for f in features]

            print("Numerical Features: ", numerical_features)

            # Predict using the model
            output = model.predict([numerical_features])
            predicted_career = output[0]
            print("Career Suggested: ", predicted_career)
            # Assuming you want the top 4 suggestions
            # all_suggestions = output[:3]
            # print("All Suggestions: ", all_suggestions)

            # Check if the predicted career exists in the Career table
            try:
                career_details = Career.objects.filter(name=predicted_career)
                if not career_details.exists():
                    return JsonResponse({'error': 'Career not found in the database'}, status=404)

                career_details = career_details.first()
                roadmap_details = Roadmap.objects.filter(
                    career_id=career_details.id)
                resource_details = Resource.objects.filter(
                    career_id=career_details.id)

                roadmap_list = []
                for roadmap in roadmap_details:
                    time_to_complete_days = roadmap.time_to_complete.microseconds
                    roadmap_dict = {
                        'id': roadmap.id,
                        'career_id': roadmap.career_id,
                        'stage_name': roadmap.stage_name,
                        'description': roadmap.description,
                        'skills_required': roadmap.skills_required,
                        'time_to_complete': time_to_complete_days
                    }
                    roadmap_list.append(roadmap_dict)

                response_data = {
                    'career': {
                        'name': career_details.name,
                        'description': career_details.description,
                        'average_salary': career_details.average_salary,
                        'required_skills': career_details.required_skills,
                        'related_roadmap': career_details.related_roadmap,
                    },
                    'roadmap': roadmap_list,
                    'resources': list(resource_details.values())
                }
                print("Response: ", response_data["roadmap"])
                return JsonResponse(response_data)
            except Career.DoesNotExist:
                return JsonResponse({'error': 'Career not found in the database'}, status=404)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=400)
