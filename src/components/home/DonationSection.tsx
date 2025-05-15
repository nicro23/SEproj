
import React from "react";
import { Link } from "react-router-dom";
import { Heart, Gift, Receipt } from "lucide-react";
import DonationProductsSection from "./DonationProductsSection";

const DonationSection = () => {
  // Sample donation progress data
  const donationGoals = [
    { 
      title: "مساعدة الأسر المحتاجة", 
      current: 15000, 
      goal: 50000, 
      percentage: 30,
      category: "financial" 
    },
    { 
      title: "بناء مدرسة قرآنية", 
      current: 120000, 
      goal: 200000, 
      percentage: 60,
      category: "financial"
    },
    { 
      title: "توزيع المصاحف", 
      current: 750, 
      goal: 1000, 
      percentage: 75,
      category: "goods" 
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">ساهم في الخير</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            تبرعك يساعد في دعم مشاريعنا الخيرية وتمكين المحتاجين وتعليم الأجيال القادمة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4 text-primary">
              <Heart size={24} className="ml-2" />
              <h3 className="text-xl font-bold">تبرع بالأموال</h3>
            </div>
            <p className="text-gray-600 mb-4">دعم مشاريعنا الخيرية بتبرعات مالية تساعد في توفير الاحتياجات الأساسية للمحتاجين</p>
            <Link to="/donate?type=financial" className="inline-block donate-button mt-2">
              تبرع الآن
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-accent hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4 text-primary">
              <Gift size={24} className="ml-2" />
              <h3 className="text-xl font-bold">تبرع بالبضائع</h3>
            </div>
            <p className="text-gray-600 mb-4">تبرع بالكتب أو الملابس أو الطعام أو أي مواد أخرى تساعد في دعم المحتاجين والمشاريع التعليمية</p>
            <Link to="/donate?type=goods" className="inline-block donate-button mt-2">
              تبرع الآن
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-secondary hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4 text-primary">
              <Receipt size={24} className="ml-2" />
              <h3 className="text-xl font-bold">حاسبة الزكاة</h3>
            </div>
            <p className="text-gray-600 mb-4">استخدم حاسبة الزكاة لمعرفة المبلغ المستحق عليك وتبرع به لمساعدة المحتاجين</p>
            <Link to="/zakat" className="inline-block donate-button mt-2">
              احسب الزكاة
            </Link>
          </div>
        </div>

        {/* Products section moved here - now comes immediately after "ساهم في الخير" section and before donation progress */}
        <DonationProductsSection />

        <div className="bg-primary-light rounded-lg p-6 mb-10 mt-12">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            مستوى التقدم في حملات التبرع الحالية
          </h3>
          <div className="space-y-6">
            {donationGoals.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-primary">{item.title}</h4>
                  <span className="text-sm text-accent font-bold">
                    {item.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      item.category === "financial" ? "bg-primary" : "bg-secondary"
                    }`} 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>{item.current.toLocaleString()} {item.category === "financial" ? "جنيه" : "قطعة"}</span>
                  <span>{item.goal.toLocaleString()} {item.category === "financial" ? "جنيه" : "قطعة"}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/donate" className="donate-button">
              ساهم في حملات التبرع
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
