
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    skills: '',
    availability: '',
    experience: '',
    reason: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would send the form data to a server in a real application
    alert('شكراً لتسجيلك! سنتواصل معك قريباً.');
  };

  return (
    <Layout>
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">تطوع معنا</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            انضم إلى فريق المتطوعين في خير الأمتي وساهم في نشر الخير والمعرفة
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">فرص التطوع المتاحة</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary-light p-6 rounded-md">
                  <h3 className="text-lg font-bold text-primary mb-3">مساعدة المحتاجين</h3>
                  <p className="text-gray-600">
                    المشاركة في توزيع المساعدات العينية والمادية على الأسر المحتاجة والأيتام
                  </p>
                </div>
                
                <div className="bg-secondary-light p-6 rounded-md">
                  <h3 className="text-lg font-bold text-primary mb-3">تنظيم الفعاليات</h3>
                  <p className="text-gray-600">
                    المساعدة في تنظيم وإدارة الفعاليات والحملات الخيرية
                  </p>
                </div>
                
                <div className="bg-accent-light p-6 rounded-md">
                  <h3 className="text-lg font-bold text-primary mb-3">التعليم والتدريب</h3>
                  <p className="text-gray-600">
                    المشاركة في تدريس وتعليم العلوم الإسلامية واللغات وغيرها من المجالات
                  </p>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-md">
                  <h3 className="text-lg font-bold text-primary mb-3">التسويق والإعلام</h3>
                  <p className="text-gray-600">
                    المشاركة في الحملات التسويقية والإعلامية ومواقع التواصل الاجتماعي
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary-light p-6">
              <h2 className="text-2xl font-bold text-primary">نموذج التطوع</h2>
              <p className="text-gray-600">يرجى تعبئة النموذج التالي للتسجيل كمتطوع معنا</p>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                      الاسم الكامل *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                      البريد الإلكتروني *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                      رقم الهاتف *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                      العنوان *
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="skills">
                    المهارات والخبرات *
                  </label>
                  <textarea
                    id="skills"
                    name="skills"
                    rows={3}
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="availability">
                    أوقات التطوع المتاحة *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">-- اختر الوقت المناسب --</option>
                    <option value="weekdays-morning">أيام الأسبوع - صباحاً</option>
                    <option value="weekdays-evening">أيام الأسبوع - مساءً</option>
                    <option value="weekends">عطلة نهاية الأسبوع</option>
                    <option value="flexible">مرن / حسب الحاجة</option>
                  </select>
                </div>
                
                <div className="mb-8">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="reason">
                    لماذا ترغب في التطوع معنا؟ *
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    rows={4}
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="bg-accent text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-opacity-90"
                  >
                    إرسال طلب التطوع
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Volunteer;
