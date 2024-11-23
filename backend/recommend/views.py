from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import joblib

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
                data.get('api_name')  # Include api_name even if not used
            ]

            # Convert features to float where applicable
            numerical_features = [float(f) if isinstance(
                f, (int, float)) else 0 for f in features]

            # Predict using the model
            output = model.predict([numerical_features])
            print("Career Suggested: ", output[0])
            return JsonResponse({'output': output[0]})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=400)
