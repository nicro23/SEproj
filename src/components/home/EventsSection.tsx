
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";

const EventsSection = () => {
  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "توزيع سلال رمضان",
      date: "10 مارس 2025",
      location: "القاهرة، مصر",
      attendees: 45,
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "محاضرة في التفسير",
      date: "15 مارس 2025",
      location: "الإسكندرية، مصر",
      attendees: 120,
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      title: "حملة تبرع بالدم",
      date: "22 مارس 2025",
      location: "المنصورة، مصر",
      attendees: 75,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">الفعاليات القادمة</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            انضم إلينا في فعالياتنا القادمة وكن جزءاً من مجتمع الخير والعطاء
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{event.title}</h3>
                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar size={18} className="ml-2 text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={18} className="ml-2 text-accent" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={18} className="ml-2 text-accent" />
                    <span>{event.attendees} مشارك</span>
                  </div>
                </div>
                <Link 
                  to={`/events/${event.id}`}
                  className="inline-block bg-secondary text-white px-4 py-2 rounded-full hover:bg-secondary-dark transition-colors duration-300"
                >
                  التسجيل في الفعالية
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/events"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-opacity-90"
          >
            عرض جميع الفعاليات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
