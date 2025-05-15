
import React from "react";
import { Link } from "react-router-dom";

const VolunteerSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pl-10">
            <h2 className="text-3xl font-bold mb-4">كن متطوعاً معنا</h2>
            <p className="text-lg mb-6 opacity-90 leading-relaxed">
              انضم إلى فريق المتطوعين في خير الأمتي وساهم في نشر الخير والعلم والمعرفة. 
              متطوعونا هم محور عملنا، وبفضلهم نستطيع الوصول إلى المزيد من المحتاجين.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center ml-4">
                  <span className="font-bold">1</span>
                </div>
                <p>مساعدة المحتاجين وتقديم الدعم المباشر</p>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center ml-4">
                  <span className="font-bold">2</span>
                </div>
                <p>المشاركة في تنظيم الفعاليات وحملات التبرع</p>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center ml-4">
                  <span className="font-bold">3</span>
                </div>
                <p>المساعدة في تدريس وتعليم العلوم الإسلامية واللغات</p>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center ml-4">
                  <span className="font-bold">4</span>
                </div>
                <p>المشاركة في الحملات الإعلامية والتوعوية</p>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                to="/volunteer"
                className="inline-block bg-accent text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                سجل كمتطوع الآن
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -top-4 -right-4 bg-accent w-24 h-24 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 bg-secondary w-16 h-16 rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="متطوعون يساعدون في العمل الخيري"
                className="rounded-lg shadow-xl w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
