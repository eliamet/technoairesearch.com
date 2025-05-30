import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Shield, Users } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Expert Team",
      role: "World-class AI researchers and engineers",
      image: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      name: "Data Scientists", 
      role: "Specialists in machine learning and analytics",
      image: "bg-gradient-to-br from-cyan-500 to-blue-600"
    },
    {
      name: "Solution Architects",
      role: "Designing scalable AI implementations", 
      image: "bg-gradient-to-br from-blue-600 to-cyan-600"
    },
    {
      name: "Strategic Leaders",
      role: "Guiding AI transformation initiatives",
      image: "bg-gradient-to-br from-cyan-600 to-blue-500"
    }
  ];

  const values = [
    {
      icon: Rocket,
      title: "Innovation",
      description: "Continuously pushing the boundaries of what's possible with artificial intelligence and machine learning technologies."
    },
    {
      icon: Shield,
      title: "Trust", 
      description: "Building secure, reliable AI solutions with transparent processes and ethical considerations at the core."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Collaborating closely with clients to understand their unique challenges and deliver tailored solutions."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Research Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class researchers and engineers driving the future of artificial intelligence 
            through groundbreaking research and innovative solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className={`w-32 h-32 rounded-full mx-auto mb-4 ${member.image} flex items-center justify-center shadow-lg`}>
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
        
        {/* Company Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
