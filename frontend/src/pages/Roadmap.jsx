import { useLocation } from "react-router-dom";
import {
  Briefcase,
  DollarSign,
  Brain,
  Map,
  Trophy,
  Clock,
  BookOpen,
  Link as LinkIcon,
  Video,
  ChevronDown,
} from "lucide-react";

const Roadmap = () => {
  const location = useLocation();
  const { data } = location.state || {};

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="w-full max-w-lg p-8 bg-gray-800 text-white rounded-xl shadow-2xl border border-gray-700 backdrop-blur-sm bg-opacity-80">
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-300">
              No data available
            </p>
          </div>
        </div>
      </div>
    );
  }

  const renderVideo = (link) => {
    if (link.includes("youtube.com") || link.includes("youtu.be")) {
      const videoId = link.includes("youtu.be")
        ? link.split("/").pop()
        : link.split("v=")[1]?.split("&")[0];
      return (
        <div className="relative w-full pt-[56.25%] mt-2">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
          />
        </div>
      );
    }
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
      >
        <LinkIcon size={16} /> Visit Resource
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black p-6 pt-[100px] text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Career Overview Card */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 backdrop-blur-sm bg-opacity-80 hover:shadow-2xl transition-all duration-300">
          <div className="mb-6">
            <div className="flex items-center gap-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              <Briefcase className="w-7 h-7 text-purple-400" />
              {data.career.name}
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              {data.career.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center gap-3 bg-gray-700/50 p-4 rounded-lg border border-gray-600 hover:border-green-500/50 transition-colors duration-200">
                <DollarSign className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">
                  ${data.career.average_salary}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-gray-700/50 p-4 rounded-lg border border-gray-600 hover:border-blue-500/50 transition-colors duration-200">
                <Brain className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">
                  {data.career.required_skills}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-gray-700/50 p-4 rounded-lg border border-gray-600 hover:border-purple-500/50 transition-colors duration-200">
                <Map className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-semibold">
                  {data.career.related_roadmap}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Stages */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 pb-2 border-b border-gray-700">
            <Trophy className="w-7 h-7 text-yellow-400" />
            Learning Path
          </h2>

          <div className="relative">
            {/* Background Path Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/20 via-blue-500/20 to-cyan-500/20 hidden md:block" />

            <div className="space-y-8 relative">
              {data.roadmap.map((item, index) => (
                <div key={index} className="relative">
                  {/* Connection Line and Dot */}
                  <div className="hidden md:block">
                    <div
                      className="absolute left-8 top-0 -bottom-8 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500"
                      style={{
                        display:
                          index === data.roadmap.length - 1 ? "none" : "block",
                      }}
                    />
                    <div className="absolute left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                    {index !== data.roadmap.length - 1 && (
                      <div className="absolute left-7 bottom-4 transform rotate-45">
                        <ChevronDown className="w-6 h-6 text-cyan-400 animate-bounce" />
                      </div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="ml-0 md:ml-16">
                    <div className="bg-gray-800/80 rounded-xl border border-gray-700 relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500" />
                      <div className="p-4">
                        <div className="text-xl text-white font-semibold p-2 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold md:hidden">
                            {index + 1}
                          </span>
                          {item.stage_name}
                        </div>
                      </div>
                      <div className="space-y-4 p-6">
                        <p className="text-gray-300 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3 bg-gray-700/40 p-4 rounded-lg border border-gray-600">
                            <Brain className="w-5 h-5 text-blue-400" />
                            <span className="text-gray-200">
                              {item.skills_required}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 bg-gray-700/40 p-4 rounded-lg border border-gray-600">
                            <Clock className="w-5 h-5 text-green-400" />
                            <span className="text-gray-200">
                              {item.time_to_complete} days
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 pb-2 border-b border-gray-700">
            <BookOpen className="w-7 h-7 text-blue-400" />
            Learning Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.resources.map((resource, index) => (
              <div
                key={index}
                className="bg-gray-800/80 rounded-xl p-6 border border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="text-lg text-white font-semibold flex items-center gap-2 mb-3">
                    <Video className="w-5 h-5 text-blue-400" />
                    {resource.title}
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="mt-4">{renderVideo(resource.link)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
