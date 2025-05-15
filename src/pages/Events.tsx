
import React from "react";
import Layout from "@/components/layout/Layout";
import { Calendar, MapPin, Users } from "lucide-react";

const Events = () => {
  // Sample upcoming events with more details
  const upcomingEvents = [
    {
      id: 1,
      title: "توزيع سلال رمضان",
      date: "10 مارس 2025",
      time: "10:00 صباحاً - 2:00 مساءً",
      location: "القاهرة، مصر",
      address: "شارع النيل، ميدان التحرير",
      attendees: 45,
      description: "حملة لتوزيع سلال غذائية على الأسر المحتاجة خلال شهر رمضان المبارك",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "محاضرة في التفسير",
      date: "15 مارس 2025",
      time: "7:30 مساءً - 9:30 مساءً",
      location: "الإسكندرية، مصر",
      address: "مسجد القائد إبراهيم، شارع الحرية",
      attendees: 120,
      description: "محاضرة في تفسير سورة الكهف مع الشيخ محمد بن صالح المنجد",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "حملة تبرع بالدم",
      date: "22 مارس 2025",
      time: "9:00 صباحاً - 3:00 مساءً",
      location: "المنصورة، مصر",
      address: "مستشفى المنصورة الجامعي",
      attendees: 75,
      description: "حملة للتبرع بالدم بالتعاون مع بنك الدم الإقليمي",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "دورة تعليم القرآن للأطفال",
      date: "1 أبريل 2025",
      time: "4:00 مساءً - 6:00 مساءً",
      location: "الجيزة، مصر",
      address: "مركز خير الأمتي التعليمي، شارع الهرم",
      attendees: 35,
      description: "دورة تعليمية للأطفال في تلاوة وحفظ القرآن الكريم",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <Layout>
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">الفعاليات والأنشطة</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            انضم إلينا في فعالياتنا القادمة وكن جزءاً من مجتمع الخير والعطاء
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Calendar View Preview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">تقويم الفعاليات</h2>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-gray-600">يمكنك عرض وتحميل تقويم الفعاليات القادمة</p>
            <button className="mt-4 bg-secondary text-white px-6 py-2 rounded-md hover:bg-secondary-dark transition-colors duration-300">
              عرض التقويم الكامل
            </button>
          </div>
        </div>
        
        {/* Events Listing */}
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">الفعاليات القادمة</h2>
        <div className="space-y-8">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Calendar size={18} className="ml-2 text-accent" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={18} className="ml-2 text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Users size={18} className="ml-2 text-accent" />
                      <span>{event.attendees} مشارك</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={18} className="ml-2 text-accent" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
                <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-300">
                  التسجيل في الفعالية
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Events;
