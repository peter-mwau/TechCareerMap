import { useState } from "react";
import { FaCertificate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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
  Target,
  ChevronRight,
} from "lucide-react";

const CareerForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
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
        { value: 0, label: "App Development" },
        { value: 1, label: "Web Development" },
        { value: 2, label: "Cloud Computing" },
        { value: 3, label: "Data Science" },
      ],
    },
    {
      name: "worskhop_code",
      label: "Select a workshop you attended!",
      icon: <Cloud className="w-5 h-5" />,
      type: "select",
      options: [
        { value: 0, label: "Cloud Computing" },
        { value: 1, label: "Web Development" },
        { value: 2, label: "Mobile Development" },
        { value: 3, label: "Data Analytics" },
      ],
    },
    {
      name: "read_writing_skill",
      label: "Select your reading and writing skill",
      icon: <FileText className="w-5 h-5" />,
      type: "select",
      options: [
        { value: 0, label: "Excellent" },
        { value: 1, label: "Good" },
        { value: 2, label: "Average" },
        { value: 3, label: "Poor" },
      ],
    },
    {
      name: "memory_capability",
      label: "Is your memory capability good?",
      icon: <MemoryIcon className="w-5 h-5" />,
      type: "select",
      options: [
        { value: 0, label: "Excellent" },
        { value: 1, label: "Good" },
        { value: 2, label: "Average" },
        { value: 3, label: "Poor" },
      ],
    },
    {
      name: "subject_interest",
      label: "What subject you are interested in?",
      icon: <BookOpen className="w-5 h-5" />,
      type: "select",
      options: [
        { value: 0, label: "Cloud Computing" },
        { value: 1, label: "Software Development" },
        { value: 2, label: "Data Science" },
        { value: 3, label: "Cybersecurity" },
      ],
    },
    {
      name: "career_interest",
      label: "Which IT-Career do you have interests in?",
      icon: <Briefcase className="w-5 h-5" />,
      type: "select",
      options: [
        {
          value: 0,
          label: "Business Process Analyst",
        },
        { value: 1, label: "Software Engineer" },
        { value: 2, label: "Data Scientist" },
        { value: 3, label: "Cloud Architect" },
      ],
    },
    {
      name: "company_intend",
      label: "Do you have any interested company that you intend to settle in?",
      icon: <Building className="w-5 h-5" />,
      type: "select",
      options: [
        { value: 0, label: "Business Process Analysis" },
        { value: 1, label: "Technology" },
        { value: 2, label: "Consulting" },
        { value: 3, label: "Product" },
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
        { value: 0, label: "Action and Adventure" },
        { value: 1, label: "Technical" },
        { value: 2, label: "Business" },
        { value: 3, label: "Self-Development" },
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
        { value: 0, label: "Management" },
        { value: 1, label: "Technical" },
      ],
    },
    {
      name: "smart_hardworker",
      label: "Are you a Smart worker or Hard worker?",
      icon: <Hammer className="w-5 h-5" />,
      type: "select",
      options: [
        { value: 0, label: "Smart Worker" },
        { value: 1, label: "Hard Worker" },
      ],
    },
  ];

  const handleChange = (name, value) => {
    const field = formFields.find((field) => field.name === name);
    let formattedValue = value;

    // Check if the field is a select type
    if (field.type === "select") {
      // For Yes/No selects, convert "Yes" to 1 and "No" to 0
      if (
        name === "self_learning" ||
        name === "extra_course" ||
        name === "senior_elder_advise" ||
        name === "introvert_extro" ||
        name === "team_player"
      ) {
        formattedValue = value === "Yes" ? "1" : "0";
      }
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));

    // Only advance to the next step if it's not the name field
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
      setTimeout(() => {
        navigate("/roadmap", { state: { data: response.data } });
      }, 2000);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-8 pt-[90px]">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700 p-10 shadow-xl shadow-blue-500/5 transition-all duration-1000">
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Brain className="w-8 h-8 text-blue-400" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Career Assessment
              </h1>
            </div>
            <div className="text-center text-gray-400">
              Let&apos;s discover your perfect tech career path using AI
            </div>
          </div>

          <div className="transition-all duration-1000">
            {success ? (
              <div className="bg-green-900/50 text-green-400 p-4 rounded-xl mt-4 border border-green-700">
                Assessment submitted successfully! We&apos;ll analyze your
                profile and provide recommendations shortly.
              </div>
            ) : error ? (
              <div className="bg-red-900/50 text-red-400 p-4 rounded-xl mt-4 border border-red-700">
                {error}
              </div>
            ) : null}

            <form
              onSubmit={handleSubmit}
              className="space-y-6 h-[60vh] overflow-auto p-5 transition-all duration-1000 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800"
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
                  <div className="flex items-center space-x-3 mb-3 text-white">
                    {field.icon}
                    <p className="text-sm font-medium text-gray-300">
                      {field.label}
                    </p>
                  </div>

                  {field.type === "text" ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 required"
                        placeholder={field.placeholder}
                        value={formData[field.name] || ""}
                        onChange={(e) =>
                          handleChange(field.name, e.target.value)
                        }
                      />
                      {formData[field.name] && (
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 text-white font-semibold rounded-xl flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300"
                        >
                          <span>Continue</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ) : (
                    <select
                      value={formData[field.name] || ""}
                      onChange={(e) => {
                        handleChange(field.name, e.target.value);
                        if (currentStep < formFields.length - 1) {
                          setCurrentStep(currentStep + 1);
                        }
                      }}
                      className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 required"
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
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Submit Assessment</span>
                  <Target className="w-5 h-5" />
                </button>
              )}
            </form>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between items-center text-gray-400">
                <span className="text-sm">
                  Step {currentStep + 1} of {formFields.length}
                </span>
                <span className="text-sm">
                  {Math.round(((currentStep + 1) / formFields.length) * 100)}%
                  Complete
                </span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                  style={{
                    width: `${((currentStep + 1) / formFields.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
