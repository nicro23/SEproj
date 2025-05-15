
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";

const Zakat = () => {
  const [gold, setGold] = useState<number | ''>('');
  const [silver, setSilver] = useState<number | ''>('');
  const [cash, setCash] = useState<number | ''>('');
  const [investments, setInvestments] = useState<number | ''>('');
  const [propertyValue, setPropertyValue] = useState<number | ''>('');
  const [debts, setDebts] = useState<number | ''>('');
  const [zakatAmount, setZakatAmount] = useState<number>(0);
  const [nisabThreshold, setNisabThreshold] = useState<number>(0);
  
  // Fictional current gold/silver prices for demonstration
  const goldPricePerGram = 1750; // Egyptian Pounds
  const silverPricePerGram = 25; // Egyptian Pounds
  const nisabGoldGrams = 85; // 85 grams of gold
  const nisabSilverGrams = 595; // 595 grams of silver
  
  useEffect(() => {
    // Calculate Nisab threshold (using silver as it's typically lower)
    const silverNisab = nisabSilverGrams * silverPricePerGram;
    const goldNisab = nisabGoldGrams * goldPricePerGram;
    setNisabThreshold(Math.min(silverNisab, goldNisab));
  }, []);
  
  const handleCalculate = () => {
    // Convert empty strings to 0 for calculation
    const goldValue = Number(gold) * goldPricePerGram || 0;
    const silverValue = Number(silver) * silverPricePerGram || 0;
    const cashValue = Number(cash) || 0;
    const investmentsValue = Number(investments) || 0;
    const propertyVal = Number(propertyValue) || 0;
    const debtsVal = Number(debts) || 0;
    
    // Calculate total assets
    const totalAssets = goldValue + silverValue + cashValue + investmentsValue + propertyVal;
    
    // Subtract debts
    const netWorth = totalAssets - debtsVal;
    
    // Calculate Zakat if above Nisab threshold
    if (netWorth > nisabThreshold) {
      // Zakat is 2.5% of net worth
      setZakatAmount(netWorth * 0.025);
    } else {
      setZakatAmount(0);
    }
  };

  return (
    <Layout>
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">حاسبة الزكاة</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            احسب زكاة أموالك بطريقة سهلة وميسرة
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="bg-primary-light p-6">
              <h2 className="text-2xl font-bold text-primary">حساب الزكاة</h2>
              <p className="text-gray-600 mt-2">
                أدخل قيمة ممتلكاتك لحساب الزكاة المستحقة عليك (جميع القيم بالجنيه المصري)
              </p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    الذهب (بالجرام)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={gold}
                    onChange={(e) => setGold(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    الفضة (بالجرام)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={silver}
                    onChange={(e) => setSilver(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    الأموال النقدية
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={cash}
                    onChange={(e) => setCash(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    الاستثمارات وأسهم وودائع
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={investments}
                    onChange={(e) => setInvestments(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    العقارات المعدة للتجارة
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    الديون المستحقة عليك
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={debts}
                    onChange={(e) => setDebts(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <button 
                  onClick={handleCalculate}
                  className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-opacity-90"
                >
                  احسب الزكاة
                </button>
              </div>
            </div>
            
            {zakatAmount > 0 && (
              <div className="bg-accent-light p-6 border-t border-accent">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">نتيجة حساب الزكاة</h3>
                  <p className="text-gray-600 mb-4">
                    نصاب الزكاة الحالي: {nisabThreshold.toLocaleString()} جنيه مصري
                  </p>
                  <div className="bg-white p-4 rounded-lg inline-block">
                    <span className="block text-accent font-bold text-3xl mb-2">
                      {zakatAmount.toLocaleString()} جنيه
                    </span>
                    <span className="text-gray-600">قيمة الزكاة المستحقة عليك</span>
                  </div>
                  <div className="mt-6">
                    <a 
                      href="/donate?type=zakat"
                      className="donate-button"
                    >
                      دفع الزكاة الآن
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-primary mb-4">معلومات عن الزكاة</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                الزكاة هي الركن الثالث من أركان الإسلام، وهي فريضة مالية على كل مسلم يملك نصابًا من المال حال عليه الحول.
              </p>
              <p>
                <strong>نصاب الزكاة:</strong> يساوي قيمة 85 جرام من الذهب أو 595 جرام من الفضة، ويؤخذ الأقل منهما.
              </p>
              <p>
                <strong>نسبة الزكاة:</strong> 2.5% من المال الذي حال عليه الحول (عام هجري كامل).
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Zakat;
