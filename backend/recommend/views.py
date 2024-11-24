from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import joblib
from .models import Career, Roadmap, Resource
import datetime
import re

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
                '8',  # Placeholder values
                '8'
            ]

            print("Features: ", features)

            # Predict using the model
            output = model.predict([features])
            predicted_career = output[0].strip()
            print("Career Suggested: ", predicted_career)

            # Normalize the predicted career
            normalized_predicted_career = normalize_string(predicted_career)
            print("Normalized Predicted Career: ", normalized_predicted_career)

            # Check if the predicted career exists in the Career table
            career_details = Career.objects.all()
            matched_career = None

            for career in career_details:
                normalized_career_name = normalize_string(career.name)
                print("Career Name: ", career.name)
                print("Normalized Career Name: ", normalized_career_name)
                if normalized_career_name == normalized_predicted_career:
                    matched_career = career
                    break

            if not matched_career:
                return JsonResponse({'error': 'Career not found in the database'}, status=404)

            # Retrieve roadmap and resource details
            roadmap_details = Roadmap.objects.filter(
                career_id=matched_career.id)
            resource_details = Resource.objects.filter(
                career_id=matched_career.id)

            roadmap_list = []
            for roadmap in roadmap_details:
                roadmap_dict = {
                    'id': roadmap.id,
                    'career_id': roadmap.career_id,
                    'stage_name': roadmap.stage_name,
                    'description': roadmap.description,
                    'skills_required': roadmap.skills_required,
                    'time_to_complete': roadmap.time_to_complete.microseconds
                }
                roadmap_list.append(roadmap_dict)

            response_data = {
                'career': {
                    'name': matched_career.name,
                    'description': matched_career.description,
                    'average_salary': matched_career.average_salary,
                    'required_skills': matched_career.required_skills,
                    'related_roadmap': matched_career.related_roadmap,
                },
                'roadmap': roadmap_list,
                'resources': list(resource_details.values())
            }

            print("Response: ", response_data)
            return JsonResponse(response_data)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=400)


def normalize_string(s):
    """Normalize a string by removing special characters and converting to lowercase."""
    return re.sub(r'\W+', '', s).lower().strip()
