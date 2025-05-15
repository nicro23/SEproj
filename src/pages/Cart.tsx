import React from "react";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { toast } = useToast();

  const handleRemoveItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
    toast({
      title: "تمت إزالة المنتج",
      description: "تم حذف المنتج من سلة التسوق بنجاح",
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const handleCheckout = () => {
    toast({
      title: "جاري الانتقال إلى صفحة الدفع",
      description: "سيتم تحويلك إلى صفحة الدفع خلال لحظات",
    });
    // هنا يمكن إضافة منطق الانتقال إلى صفحة الدفع
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-primary">سلة التسوق</h1>

        {state.items.length === 0 ? (
          <div className="text-center py-10">
            <div className="mb-4 text-gray-500">
              <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-4">سلة التسوق فارغة</h2>
            <p className="text-gray-600 mb-8">لم تقم بإضافة أي منتجات إلى سلة التسوق بعد</p>
            <Link to="/donate" className="donate-button">
              العودة للتبرع
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="p-6 bg-primary text-white">
                  <h2 className="text-xl font-bold">المنتجات في السلة ({state.items.length})</h2>
                </div>
                <div className="divide-y">
                  {state.items.map((item) => (
                    <div key={item.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        {item.icon || (
                          <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M20 4v16H4V4h16zm2-2H2v20h20V2z" />
                          </svg>
                        )}
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-primary font-bold">{item.price.toLocaleString()} {item.priceLabel}</p>
                      </div>
                      
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-3 py-1">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <div className="text-left ml-4 font-bold">
                        {(item.price * item.quantity).toLocaleString()} {item.priceLabel}
                      </div>
                      
                      <Button
                        variant="ghost"
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 size={18} />
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="sticky top-24">
                <div className="p-6 bg-primary text-white">
                  <h2 className="text-xl font-bold">ملخص السلة</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between text-lg">
                    <span className="font-medium">المجموع الكلي:</span>
                    <span className="font-bold text-primary">
                      {state.total.toLocaleString()} جنيه
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-accent hover:bg-primary text-white font-bold py-3"
                  >
                    إتمام عملية الدفع
                  </Button>
                  
                  <Link to="/" className="block text-center text-primary hover:underline mt-4">
                    مواصلة التبرع
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
