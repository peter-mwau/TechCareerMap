import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Brain,
  Rocket,
  Target,
  Code2,
  Users,
  Laptop,
  Sparkles,
  GraduationCap,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500">
    <Icon className="w-12 h-12 text-blue-400 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-8 pt-24">
        <section className="text-center mb-20 pt-12">
          <div className="inline-block animate-bounce mb-6">
            <Sparkles className="w-12 h-12 text-blue-400" />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Discover Your Perfect Tech Career Path
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Using advanced AI and machine learning, we&apos;ll help you navigate
            the vast landscape of IT careers to find your perfect match.
          </p>
          <Link
            to="/career"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Rocket className="w-6 h-6" />
            <span>Take the Career Quiz</span>
          </Link>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Why Choose TechCareerMap?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI-Powered Insights"
              description="Our ML model provides 89% accurate career predictions based on your unique profile and preferences."
            />
            <FeatureCard
              icon={Target}
              title="Personalized Matching"
              description="Get tailored career recommendations that align with your skills, interests, and career goals."
            />
            <FeatureCard
              icon={Users}
              title="Industry Validated"
              description="Recommendations based on real-world data and success patterns from tech professionals."
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <GraduationCap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Take Assessment</h3>
              <p className="text-gray-400">
                Complete our comprehensive career assessment
              </p>
            </div>
            <div className="text-center p-6">
              <Code2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-400">
                Our AI analyzes your profile and preferences
              </p>
            </div>
            <div className="text-center p-6">
              <Target className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Get Matches</h3>
              <p className="text-gray-400">
                Receive personalized career recommendations
              </p>
            </div>
            <div className="text-center p-6">
              <Laptop className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Start Journey</h3>
              <p className="text-gray-400">
                Begin your path to a fulfilling tech career
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20 bg-gray-800/50 p-12 rounded-2xl border border-gray-700">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">
              Ready to Find Your Perfect Tech Career?
            </h2>
            <p className="text-gray-300 mb-8">
              Join thousands of others who have discovered their ideal career
              path in technology. Our AI-powered assessment takes just 10
              minutes to complete.
            </p>
            <Link
              to="/career"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Target className="w-6 h-6" />
              <span>Start Your Assessment Now</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Home;
