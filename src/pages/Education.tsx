
import React from "react";
import Layout from "@/components/layout/Layout";
import { BookOpen, Book, Globe, Video } from "lucide-react";

const Education = () => {
  const categories = [
    {
      id: "quran",
      title: "القرآن الكريم",
      icon: BookOpen,
      description: "تعلم تلاوة وتجويد القرآن الكريم وتفسيره"
    },
    {
      id: "fiqh",
      title: "الفقه الإسلامي",
      icon: Book,
      description: "دروس في فقه العبادات والمعاملات"
    },
    {
      id: "languages",
      title: "تعلم اللغات",
      icon: Globe,
      description: "دورات في اللغة العربية والإنجليزية وغيرها"
    },
    {
      id: "lectures",
      title: "محاضرات مرئية",
      icon: Video,
      description: "سلسلة محاضرات للعلماء والدعاة في مختلف المجالات"
    }
  ];
  
  // Sample featured courses
  const featuredCourses = [
    {
      id: 1,
      title: "تعليم أحكام التجويد للمبتدئين",
      instructor: "الشيخ أحمد محمد",
      duration: "8 أسابيع",
      lessons: 16,
      category: "quran",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "فقه المعاملات المالية المعاصرة",
      instructor: "د. عبد الله الغامدي",
      duration: "10 أسابيع",
      lessons: 20,
      category: "fiqh",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      title: "تعلم اللغة العربية للناطقين بغيرها",
      instructor: "أ. سارة الأحمد",
      duration: "12 أسبوع",
      lessons: 24,
      category: "languages",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 4,
      title: "سلسلة محاضرات في السيرة النبوية",
      instructor: "د. محمد العريفي",
      duration: "6 أسابيع",
      lessons: 12,
      category: "lectures",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <Layout>
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">المركز التعليمي</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            استفد من مواردنا التعليمية المتنوعة في مجالات القرآن الكريم والفقه واللغات
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-t-4 border-primary"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center">
                  <category.icon size={28} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-2">{category.title}</h3>
              <p className="text-gray-600 text-center">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Courses */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">دورات مميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <div 
                key={course.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-primary-light text-primary text-sm px-3 py-1 rounded-full">
                      {categories.find(cat => cat.id === course.category)?.title}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.instructor}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{course.duration}</span>
                    <span>{course.lessons} درس</span>
                  </div>
                  <button className="mt-4 w-full bg-secondary text-white py-2 rounded-md hover:bg-secondary-dark transition-colors duration-300">
                    استعراض الدورة
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-3">محاضرات مرئية</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              شاهد أحدث المحاضرات والدروس المرئية من علماء الأمة في مختلف المجالات
            </p>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 max-w-3xl mx-auto">
            <div className="w-full h-0 relative pb-[56.25%] bg-black">
              {/* This would be a real video in a production environment */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="text-white text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-r-0 border-t-[8px] border-b-[8px] border-r-[16px] border-t-transparent border-b-transparent border-r-white mr-2"></div>
                  </div>
                  <p className="font-bold">محاضرة تفسير سورة الكهف</p>
                  <p className="text-sm mt-2">الشيخ محمد بن صالح المنجد</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
