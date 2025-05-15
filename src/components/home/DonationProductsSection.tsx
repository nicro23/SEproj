
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "وصلة مياه منزلية",
    price: 6000,
    description: "تقدر تشارك في توصيل مياه نظيفة لأسرة عن طريق وصلة مياه منزلية.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 mx-auto mb-2">
        <path d="M12 38h24M20 34V18m8 16V18M10 18h28m-6-6V8a4 4 0 10-8 0v4h8z" stroke="#164a38" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    priceLabel: "جنيه"
  },
  {
    id: 2,
    title: "سهم في توصيل مياه",
    price: 600,
    description: "صدقتك مع مصر الخير تساهم في توصيل مياه شرب نظيفة في أبعد المناطق في مصر.. اتبرع دلوقتي عشان ترجعلهم الحياة من تاني.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 mx-auto mb-2">
        <path d="M24 6v16m0 0l6-6m-6 6l-6-6M8 36c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#164a38" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    priceLabel: "جنيه"
  },
  {
    id: 3,
    title: "سهم فى مصارف الزكاة",
    price: 100,
    description: "شارك بزكاتك، واتبرع دلوقتي لسهم في مصارف الزكاة، وساهم في تغيير حياة ناس كثير.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 mx-auto mb-2">
        <rect x="8" y="15" width="32" height="22" rx="3" stroke="#164a38" strokeWidth="2"/>
        <path d="M16 15V9a8 8 0 1116 0v6" stroke="#164a38" strokeWidth="2"/>
      </svg>
    ),
    priceLabel: "جنيه"
  },
  {
    id: 4,
    title: "خيرك دايم 500",
    price: 500,
    description: "اشترك في برنامج خيرك دايم شهريًا لدعم الأسر الأكثر احتياجًا في الغذاء والعلاج وغيره.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 mx-auto mb-2">
        <circle cx="24" cy="24" r="22" stroke="#3fa83b" strokeWidth="2"/>
        <path d="M18 24l5 6 7-12" stroke="#3fa83b" strokeWidth="2"/>
      </svg>
    ),
    priceLabel: "جنيه"
  },
  {
    id: 5,
    title: "سهم طرف صناعي",
    price: 500,
    description: "تبرع للمساعدة في توفير الأطراف الصناعية لذوي الاحتياجات الخاصة.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 mx-auto mb-2">
        <rect x="18" y="6" width="12" height="26" rx="6" stroke="#3fa83b" strokeWidth="2"/>
        <path d="M24 32v9m0 0l-5 2m5-2l5 2" stroke="#3fa83b" strokeWidth="2"/>
      </svg>
    ),
    priceLabel: "جنيه"
  },
  {
    id: 6,
    title: "خيرك دايم 200",
    price: 200,
    description: "اشترك في برنامج خيرك دايم الشهري بـ200 جنيه لدعم مشاريع الخير.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 mx-auto mb-2">
        <circle cx="24" cy="24" r="22" stroke="#3fa83b" strokeWidth="2"/>
        <path d="M16 28l8-8 8 8" stroke="#3fa83b" strokeWidth="2"/>
      </svg>
    ),
    priceLabel: "جنيه"
  },
];

const DonationProductsSection = () => {
  const [quantities, setQuantities] = useState(
    products.reduce((obj, product) => ({ ...obj, [product.id]: 1 }), {})
  );
  const { dispatch } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleQuantityChange = (id: number, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value < 1 ? 1 : value,
    }));
  };

  const handleAddToCart = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      const quantity = quantities[productId];
      
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: quantity,
          priceLabel: product.priceLabel,
          icon: product.icon
        }
      });
      
      toast({
        title: "تمت الإضافة إلى السلة",
        description: `تمت إضافة ${product.title} إلى سلة التسوق`
      });
    }
  };

  const handleDonateNow = (productId: number) => {
    handleAddToCart(productId);
    navigate('/cart');
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-center font-arabic">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-2">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">المنتجات</h2>
          <a href="#" className="text-primary underline text-lg md:text-base hover:text-accent focus:outline-none">
            عرض الكل
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 px-4 py-6 flex flex-col justify-between items-stretch text-right"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-xl text-gray-800">{product.title}</span>
                  <span className="text-primary text-lg font-bold">
                    {product.price.toLocaleString()} <span className="font-normal text-base">{product.priceLabel}</span>
                  </span>
                </div>
                {product.icon}
                <p className="text-gray-600 my-3 min-h-[48px]">{product.description}</p>
              </div>
              <div className="flex flex-col md:flex-row items-end md:items-center gap-3 mt-4">
                <button
                  className="flex-1 bg-accent text-white font-bold px-6 py-2 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={`تبرع لـ${product.title}`}
                  onClick={() => handleDonateNow(product.id)}
                >
                  <ShoppingCart className="ml-2" size={20} />
                  <span>تبرع</span>
                </button>
                <div className="flex items-center">
                  <select
                    className="border border-gray-300 rounded-md px-2 py-1 text-center focus:border-primary"
                    value={quantities[product.id]}
                    onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <span className="text-gray-500 text-sm mr-2">عدد</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-10 px-8 py-2 bg-primary hover:bg-accent rounded-lg text-white font-bold transition-colors shadow">
          المزيد
        </button>
      </div>
    </section>
  );
};

export default DonationProductsSection;
