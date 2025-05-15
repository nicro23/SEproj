
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Heart, Gift, Receipt } from "lucide-react";
import { Input } from "@/components/ui/input";
import DonationImpactCard from "@/components/home/DonationImpactCard";

const Donate = () => {
  const [donationType, setDonationType] = useState('financial');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [goodsDescription, setGoodsDescription] = useState('');
  const [showImpact, setShowImpact] = useState(false);
  
  useEffect(() => {
    // عرض تأثير التبرع فقط إذا كان هناك مبلغ مُدخل وكان نوع التبرع مالياً فقط (بدون الزكاة)
    setShowImpact(amount !== '' && donationType === 'financial');
  }, [amount, donationType]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to payment processor in a real application
    alert('شكراً لتبرعك! سيتم تحويلك إلى صفحة الدفع.');
  };
  
  const predefinedAmounts = [50, 100, 250, 500, 1000];

  return (
    <Layout>
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">تبرع الآن</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            تبرعك يساعد في دعم المحتاجين ونشر العلم والمعرفة وبناء مستقبل أفضل للجميع
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
          <div className="bg-primary-light p-6">
            <h2 className="text-2xl font-bold text-primary mb-2">اختر نوع التبرع</h2>
            <p className="text-gray-600">يمكنك التبرع بالأموال أو البضائع أو حساب الزكاة</p>
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                className={`flex items-center px-4 py-2 rounded-full ${donationType === 'financial' ? 'bg-primary text-white' : 'bg-gray-100 text-primary'}`}
                onClick={() => setDonationType('financial')}
              >
                <Heart size={18} className="ml-2" />
                تبرع مالي
              </button>
              <button 
                className={`flex items-center px-4 py-2 rounded-full ${donationType === 'goods' ? 'bg-primary text-white' : 'bg-gray-100 text-primary'}`}
                onClick={() => setDonationType('goods')}
              >
                <Gift size={18} className="ml-2" />
                تبرع بالبضائع
              </button>
              <button 
                className={`flex items-center px-4 py-2 rounded-full ${donationType === 'zakat' ? 'bg-primary text-white' : 'bg-gray-100 text-primary'}`}
                onClick={() => setDonationType('zakat')}
              >
                <Receipt size={18} className="ml-2" />
                دفع الزكاة
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              {donationType === 'financial' || donationType === 'zakat' ? (
                <>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-3">
                      {donationType === 'zakat' ? 'مبلغ الزكاة' : 'مبلغ التبرع'}
                    </label>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {predefinedAmounts.map(amt => (
                        <button
                          key={amt}
                          type="button"
                          className={`py-2 px-4 rounded-md ${amount === amt.toString() ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                          onClick={() => setAmount(amt.toString())}
                        >
                          {amt} جنيه
                        </button>
                      ))}
                      <button
                        type="button"
                        className={`py-2 px-4 rounded-md ${!predefinedAmounts.includes(Number(amount)) && amount !== '' ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                        onClick={() => document.getElementById('custom-amount')?.focus()}
                      >
                        مبلغ آخر
                      </button>
                    </div>
                    <div className="mt-3">
                      <Input
                        id="custom-amount"
                        type="number"
                        min="1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="أدخل مبلغ التبرع"
                        required
                      />
                    </div>
                  </div>

                  {/* عنصر عرض تأثير التبرع - فقط للتبرع المالي وليس الزكاة */}
                  {showImpact && Number(amount) > 0 && (
                    <div className="mb-8 animate-fade-in">
                      <DonationImpactCard amount={Number(amount)} />
                    </div>
                  )}
                </>
              ) : (
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="goods-description">
                    وصف البضائع
                  </label>
                  <textarea
                    id="goods-description"
                    rows={4}
                    value={goodsDescription}
                    onChange={(e) => setGoodsDescription(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="يرجى وصف البضائع التي ترغب في التبرع بها"
                    required
                  />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                    الاسم
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    البريد الإلكتروني
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="example@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                    رقم الهاتف
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="01xxxxxxxxx"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                    العنوان
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="أدخل عنوانك"
                    required
                  />
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="donate-button">
                  {donationType === 'financial' ? 'تبرع الآن' : donationType === 'goods' ? 'تسجيل التبرع' : 'دفع الزكاة'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
