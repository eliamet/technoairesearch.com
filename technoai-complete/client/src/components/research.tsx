import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Microscope, Users, Lightbulb, ArrowRight, BarChart, Award } from "lucide-react";

export default function Research() {
  const features = [
    {
      icon: Microscope,
      title: "Advanced Research Labs",
      description: "State-of-the-art facilities equipped with cutting-edge technology for AI research and development."
    },
    {
      icon: Users,
      title: "Expert Research Team",
      description: "Leading AI researchers and scientists with decades of combined experience in machine learning."
    },
    {
      icon: Lightbulb,
      title: "Innovation Pipeline",
      description: "Continuous innovation process that transforms research breakthroughs into practical solutions."
    }
  ];

  return (
    <section id="research" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading Research & Innovation
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our research teams push the boundaries of AI technology through groundbreaking 
              projects and collaborations with leading institutions worldwide.
            </p>
            
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              View Research Papers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Visual Section */}
          <div className="relative">
            {/* Main Image Placeholder - Research Laboratory */}
            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl h-80 flex items-center justify-center">
                <div className="text-white text-center">
                  <Microscope className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">AI Research Lab</h3>
                  <p className="text-blue-100">Advanced research facility with cutting-edge equipment</p>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl p-6 max-w-64">
              <div className="flex items-center mb-2">
                <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <BarChart className="h-4 w-4" />
                </div>
                <span className="font-semibold text-gray-900">Research Impact</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">250+</div>
              <div className="text-gray-600 text-sm">Published Papers</div>
            </Card>
            
            <Card className="absolute -top-6 -right-6 bg-white shadow-xl p-6">
              <div className="flex items-center mb-2">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <Award className="h-4 w-4" />
                </div>
                <span className="font-semibold text-gray-900">Innovation</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600 text-sm">Patents Filed</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
