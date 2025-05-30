import { Brain } from "lucide-react";
import { SiLinkedin, SiX, SiGithub, SiYoutube } from "react-icons/si";

export default function Footer() {
  const footerSections = [
    {
      title: "Research Areas",
      links: [
        "Machine Learning",
        "Computer Vision", 
        "Natural Language Processing",
        "Robotics",
        "Predictive Analytics"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Research Team",
        "Publications",
        "Careers",
        "News & Events"
      ]
    },
    {
      title: "Resources", 
      links: [
        "Documentation",
        "Case Studies",
        "Whitepapers",
        "Support",
        "Contact"
      ]
    }
  ];

  const socialLinks = [
    { icon: SiLinkedin, href: "#", label: "LinkedIn" },
    { icon: SiX, href: "#", label: "X (Twitter)" },
    { icon: SiGithub, href: "#", label: "GitHub" },
    { icon: SiYoutube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold">TechnoAI Research</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading AI research solutions company advancing the future of artificial intelligence 
              through scientific excellence and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TechnoAI Research Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
