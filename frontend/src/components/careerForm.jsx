import { useState } from "react";
import { FaCertificate } from "react-icons/fa";
import axios from "axios";
import {
  Brain,
  Trophy,
  Code,
  Mic,
  BookOpen,
  GraduationCap,
  Cloud,
  FileText,
  Brain as MemoryIcon,
  Briefcase,
  Building,
  Users,
  Book,
  UserCircle,
  Users as TeamIcon,
  Settings,
  Hammer,
} from "lucide-react";

const CareerForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    logical_thinking: "",
    hackathon_attend: "",
    coding_skills: "",
    public_speaking_skills: "",
    self_learning: "",
    extra_course: "",
    certificate_code: "",
    worskhop_code: "",
    read_writing_skill: "",
    memory_capability: "",
    subject_interest: "",
    career_interest: "",
    company_intend: "",
    senior_elder_advise: "",
    book_interest: "",
    introvert_extro: "",
    team_player: "",
    management_technical: "",
    smart_hardworker: "",
  });

  const formFields = [
    {
      name: "name",
      label: "What is your name?",
      icon: <UserCircle className="w-5 h-5" />,
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      name: "logical_thinking",
      label: "Are you a logical thinking person?",
      icon: <Brain className="w-5 h-5" />,
      type: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
        value: n.toString(),
        label: `${n} - ${n === 1 ? "Poor" : n === 9 ? "Excellent" : "Average"}`,
      })),
    },
    {
      name: "hackathon_attend",
      label: "Do you attend any Hackathons?",
      icon: <Trophy className="w-5 h-5" />,
      type: "select",
      options: [0, 1, 2, 3, 4, 5].map((n) => ({
        value: n.toString(),
        label: n.toString(),
      })),
    },
    {
      name: "coding_skills",
      label: "How do you rate your coding skills?",
      icon: <Code className="w-5 h-5" />,
      type: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
        value: n.toString(),
        label: `${n} - ${
          n === 1 ? "Beginner" : n === 9 ? "Expert" : "Intermediate"
        }`,
      })),
    },
    {
      name: "public_speaking_skills",
      label: "How do you rate your public speaking skills/confidency?",
      icon: <Mic className="w-5 h-5" />,
      type: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
        value: n.toString(),
        label: `${n} - ${n === 1 ? "Poor" : n === 9 ? "Excellent" : "Average"}`,
      })),
    },
    {
      name: "self_learning",
      label: "Are you a self-learning person?",
      icon: <BookOpen className="w-5 h-5" />,
      type: "select",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      name: "extra_course",
      label: "Do you take extra courses in uni (other than IT)?",
      icon: <GraduationCap className="w-5 h-5" />,
      type: "select",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      name: "certificate_code",
      label: "Select a certificate you took!",
      icon: <FaCertificate className="w-5 h-5" />,
      type: "select",
      options: [
        { value: "app development", label: "App Development" },
        { value: "web development", label: "Web Development" },
        { value: "cloud computing", label: "Cloud Computing" },
        { value: "data science", label: "Data Science" },
      ],
    },
    {
      name: "worskhop_code",
      label: "Select a workshop you attended!",
      icon: <Cloud className="w-5 h-5" />,
      type: "select",
      options: [
        { value: "cloud computing", label: "Cloud Computing" },
        { value: "web development", label: "Web Development" },
        { value: "mobile development", label: "Mobile Development" },
        { value: "data analytics", label: "Data Analytics" },
      ],
    },
    {
      name: "read_writing_skill",
      label: "Select your reading and writing skill",
      icon: <FileText className="w-5 h-5" />,
      type: "select",
      options: [
        { value: "excellent", label: "Excellent" },
        { value: "good", label: "Good" },
        { value: "average", label: "Average" },
        { value: "poor", label: "Poor" },
      ],
    },
    {
      name: "memory_capability",
      label: "Is your memory capability good?",
      icon: <MemoryIcon className="w-5 h-5" />,
      type: "select",
      options: [
        { value: "excellent", label: "Excellent" },
        { value: "good", label: "Good" },
        { value: "average", label: "Average" },
        { value: "poor", label: "Poor" },
      ],
    },
    {
      name: "subject_interest",
      label: "What subject you are interested in?",
      icon: <BookOpen className="w-5 h-5" />,
      type: "select",
      options: [
        { value: "cloud computing", label: "Cloud Computing" },
        { value: "software development", label: "Software Development" },
        { value: "data science", label: "Data Science" },
        { value: "cybersecurity", label: "Cybersecurity" },
      ],
    },
    {
      name: "career_interest",
      label: "Which IT-Career do you have interests in?",
      icon: <Briefcase className="w-5 h-5" />,
      type: "select",
      options: [
        {
          value: "Business process analyst",
          label: "Business Process Analyst",
        },
        { value: "Software Engineer", label: "Software Engineer" },
        { value: "Data Scientist", label: "Data Scientist" },
        { value: "Cloud Architect", label: "Cloud Architect" },
      ],
    },
    {
      name: "company_intend",
      label: "Do you have any interested company that you intend to settle in?",
      icon: <Building className="w-5 h-5" />,
      type: "select",
      options: [
        { value: "BPA", label: "Business Process Analysis" },
        { value: "Tech", label: "Technology" },
        { value: "Consulting", label: "Consulting" },
        { value: "Product", label: "Product" },
      ],
    },
    {
      name: "senior_elder_advise",
      label: "Do you ever seek any advice from senior or elders?",
      icon: <Users className="w-5 h-5" />,
      type: "select",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      name: "book_interest",
      label: "Select your interested genre of book!",
      icon: <Book className="w-5 h-5" />,
      type: "select",
      options: [
        { value: "Action and Adventure", label: "Action and Adventure" },
        { value: "Technical", label: "Technical" },
        { value: "Business", label: "Business" },
        { value: "Self-Development", label: "Self-Development" },
      ],
    },
    {
      name: "introvert_extro",
      label: "Are you an Introvert? | No - Extrovert",
      icon: <UserCircle className="w-5 h-5" />,
      type: "select",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      name: "team_player",
      label: "Ever worked in a team?",
      icon: <TeamIcon className="w-5 h-5" />,
      type: "select",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      name: "management_technical",
      label: "Which area do you prefer: Management or Technical?",
      icon: <Settings className="w-5 h-5" />,
      type: "select",
      options: [
        { value: "Management", label: "Management" },
        { value: "Technical", label: "Technical" },
      ],
    },
    {
      name: "smart_hardworker",
      label: "Are you a Smart worker or Hard worker?",
      icon: <Hammer className="w-5 h-5" />,
      type: "select",
      options: [
        { value: "smart worker", label: "Smart Worker" },
        { value: "hard worker", label: "Hard Worker" },
      ],
    },
  ];

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Only advance to next step if it's not the name field
    if (name !== "name" && currentStep < formFields.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/recommend/predict/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-2xl mx-auto  shadow-md rounded-md shadow-cyan-950 p-10  transition-all duration-1000">
        <div>
          <div className="text-3xl font-bold text-center text-gray-800">
            Career Assessment Form
          </div>
          <div className="text-center text-gray-600">
            Let&apos;s find the perfect career path for you
          </div>
        </div>
        <div className="transition-all duration-1000">
          {success ? (
            <div className="bg-green-100 text-green-700 p-4 rounded-md mt-4">
              Form submitted successfully!
            </div>
          ) : (
            <div className="bg-red-100 text-red-700 p-4 rounded-md mt-4">
              {error}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="space-y-6  h-[70vh] overflow-auto p-5 transition-all duration-1000"
          >
            {formFields.map((field, index) => (
              <div
                key={field.name}
                className={`transition-all duration-700 ease-out transform ${
                  index <= currentStep
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-20 opacity-0 scale-95 hidden"
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  {field.icon}
                  <p className="text-sm font-medium text-gray-900">
                    {field.label}
                  </p>
                </div>

                {field.type === "text" ? (
                  <div>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => formData.name && setCurrentStep(1)}
                      className="mt-2 bg-cyan-950 p-2 text-white font-semibold rounded-md flex flex-row"
                    >
                      Continue
                    </button>
                  </div>
                ) : (
                  <select
                    value={formData[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="w-full py-2 bg-gray-100 rounded-md"
                  >
                    <option value="" disabled>
                      {`Select ${field.label}`}
                    </option>
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            ))}

            {currentStep === formFields.length - 1 && (
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Submit Assessment
              </button>
            )}
          </form>

          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Step {currentStep + 1} of {formFields.length}
            </span>
            <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300"
                style={{
                  width: `${((currentStep + 1) / formFields.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
