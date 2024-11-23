import { Brain, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800/50 backdrop-blur-md p-4 fixed w-full z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              TechCareerMap
            </span>
          </div>
          <div className="space-x-6 flex flex-row gap-2">
            <Link
              to="/"
              className="hover:text-blue-400 text-white transition-colors  my-auto"
            >
              Home
            </Link>
            <Link
              to="/career"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-all hover:scale-105 group"
            >
              <span>Start Journey</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
