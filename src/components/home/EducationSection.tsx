
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Book, Globe, Video } from "lucide-react";

const EducationSection = () => {
  const educationalResources = [
    {
      title: "تعليم القرآن الكريم",
      description: "دروس في تلاوة وتجويد القرآن الكريم وتفسيره",
      icon: BookOpen,
      link: "/education/quran"
    },
    {
      title: "الفقه الإسلامي",
      description: "دروس في فقه العبادات والمعاملات",
      icon: Book,
      link: "/education/fiqh"
    },
    {
      title: "تعلم اللغات",
      description: "دورات في اللغة العربية والإنجليزية وغيرها",
      icon: Globe,
      link: "/education/languages"
    },
    {
      title: "محاضرات مرئية",
      description: "سلسلة محاضرات للعلماء والدعاة في مختلف المجالات",
      icon: Video,
      link: "/education/lectures"
    }
  ];

  return (
    <section className="py-16 islamic-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">المركز التعليمي</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            استفد من مواردنا التعليمية المتنوعة في مجالات القرآن الكريم والفقه واللغات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationalResources.map((resource, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center">
                    <resource.icon size={28} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary text-center mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-center mb-6">{resource.description}</p>
                <div className="text-center">
                  <Link 
                    to={resource.link}
                    className="inline-block bg-primary-light text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    تصفح المحتوى
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/education" className="inline-block bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-opacity-90">
            استكشف المزيد من الدروس
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
