import {
  Twitter,
  Github,
  Linkedin,
  Mail,
  Globe,
  Heart,
  Code,
  //   Terminal,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    {
      icon: <Github size={20} />,
      href: "https://github.com/peter-mwau/TechCareerMap.git",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/peter-kyale-6b11a4233/",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "kyalepeter2000@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { text: "Home", href: "/" },
    { text: "Careers", href: "/careers" },
    { text: "Roadmaps", href: "/roadmap" },
    { text: "Resources", href: "/resources" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* <Terminal className="w-6 h-6 text-purple-400" /> */}
              <img src="/tech_career.png" className="w-10 h-10" />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                TechCareerMap
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Mapping your journey through the tech landscape, one roadmap at a
              time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-400" />
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  www.techcareermap.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <a
                  href="mailto:contact@techcareermap.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  contact@techcareermap.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 border border-gray-700 hover:border-purple-500/50"
                >
                  <span className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <span>© {currentYear} TechCareerMap. Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>and</span>
              <Code className="w-4 h-4 text-purple-400" />
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
