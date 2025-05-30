import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Bot, 
  Settings,
  ArrowRight,
  Check
} from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: Brain,
      title: "Machine Learning Research",
      description: "Advanced algorithms and model development for predictive analytics, pattern recognition, and automated decision-making systems.",
      features: ["Deep Learning Models", "Neural Networks", "Pattern Recognition"],
      color: "text-blue-600"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Image processing, object detection, and visual recognition systems for automation and intelligent monitoring applications.",
      features: ["Image Recognition", "Object Detection", "Real-time Analysis"],
      color: "text-cyan-600"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Language understanding, sentiment analysis, and conversational AI systems for enhanced human-computer interaction.",
      features: ["Text Analysis", "Sentiment Detection", "Language Generation"],
      color: "text-blue-600"
    },
    {
      icon: Bot,
      title: "Robotics & Automation",
      description: "Intelligent robotics systems combining AI with physical automation for manufacturing and service applications.",
      features: ["Smart Robotics", "Process Automation", "Human-Robot Interaction"],
      color: "text-cyan-600"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Data-driven forecasting and trend analysis to support strategic decision-making and business optimization.",
      features: ["Forecasting Models", "Trend Analysis", "Business Intelligence"],
      color: "text-blue-600"
    },
    {
      icon: Settings,
      title: "AI Ethics & Safety",
      description: "Responsible AI development ensuring fairness, transparency, and safety in artificial intelligence systems.",
      features: ["Ethical AI", "Safety Protocols", "Transparent Systems"],
      color: "text-cyan-600"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Research Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI research services delivers breakthrough innovations 
            across multiple domains and industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Check className="h-4 w-4 text-cyan-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
