# TechCareerMap

TechCareerMap is a tech career recommendation system designed to predict the IT career path of individuals based on detailed information they provide, including their interests, passions, personalities, current skills, and more. The system leverages a Random Forest Classifier to achieve an accuracy of 89%, making it a reliable tool for career guidance.

## Table of Contents

- [Overview](#overview)
- [Model Creation](#model-creation)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

TechCareerMap uses a machine learning model to predict the most suitable IT career for users based on their responses to a detailed questionnaire. The frontend is built using Vite, styled with TailwindCSS, and communicates with a Django backend via REST APIs. The backend uses a MySQL database to store user data and model predictions.

## Model Creation

The machine learning model was created using the following steps:

1. **Data Collection**: Gathered data on individuals' interests, passions, personalities, and current skills.
2. **Data Preprocessing**: Used `pandas` and `numpy` for data cleaning and preprocessing.
3. **Exploratory Data Analysis**: Utilized `seaborn` for visualizing data patterns and relationships.
4. **Feature Engineering**: Extracted relevant features from the data.
5. **Model Training**: Trained a Random Forest Classifier using `scikit-learn` to predict IT careers.
6. **Model Evaluation**: Evaluated the model using various metrics and achieved an accuracy of 89%.

## Technologies Used

- **Frontend**: Vite, TailwindCSS
- **Backend**: Django, REST APIs
- **Database**: MySQL
- **Machine Learning**: pandas, numpy, scikit-learn, scipy, seaborn

## Installation

To clone and run the application locally, follow these steps:

### Prerequisites

- Node.js and npm
- Python and pip
- MySQL

### Clone the Repository

```sh
git clone https://github.com/peter-mwau/TechCareerMap.git
cd TechCareerMap
```

### Frontend Setup

- Navigate to the frontend directory:

```
cd frontend
```

- Install dependencies:

```
npm install
```

- Start the frontend server:

```
npm run dev
```

### Backend Setup

- Navigate to the backend directory:

```
cd backend
```

- Create a virtual environment and activate it:

```
python -m venv venv
source venv/bin/activate
```

- Install dependencies:

```
pip install -r requirements.txt
```

- Configure the MySQL database in settings.py:

```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_db_name',
           'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

- Apply migrations:

```
python manage.py makemigrations
```

- Run migrations:

```
python manage.py migrate
```

- Start the Django development server:

```
python manage.py runserver
```

### Running the Application

- Ensure both the frontend and backend servers are running.
- Open your browser and navigate to http://localhost:5173 to access the application.

### Usage

- Fill out the questionnaire with your interests, passions, personalities, and current skills.
- Submit the form to receive a career recommendation based on the machine learning model.

### Contributing

- Contributions are welcome! Please fork the repository and submit a pull request.

### License

- This project is licensed under the MIT License
