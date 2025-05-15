
import React from "react";
import { Utensils, Shirt, Backpack, Hospital, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface DonationImpactProps {
  amount: number;
}

// هذا المكون يظهر تأثير التبرع المالي فقط (لا يظهر في الزكاة)
const DonationImpactCard = ({ amount }: DonationImpactProps) => {
  // تحديد الرسالة والأيقونة بناء على قيمة التبرع
  const getImpactDetails = (amount: number) => {
    if (amount < 50) {
      return {
        message: "كل تبرع مهما كان صغيراً يساهم في مساعدة المحتاجين",
        icon: <HeartHandshake className="h-12 w-12 text-primary" />,
      };
    } else if (amount >= 50 && amount < 100) {
      return {
        message: "بـ50 جنيه، يمكنك إطعام طفل ليوم",
        icon: <Utensils className="h-12 w-12 text-primary" />,
      };
    } else if (amount >= 100 && amount < 200) {
      return {
        message: "بـ100 جنيه، يمكنك شراء ملابس لطفل",
        icon: <Shirt className="h-12 w-12 text-primary" />,
      };
    } else if (amount >= 200 && amount < 500) {
      return {
        message: "بـ200 جنيه، يمكنك توفير حقيبة مدرسية",
        icon: <Backpack className="h-12 w-12 text-primary" />,
      };
    } else if (amount >= 500 && amount < 1000) {
      return {
        message: "بـ500 جنيه، يمكنك المساهمة في علاج مريض",
        icon: <Hospital className="h-12 w-12 text-primary" />,
      };
    } else {
      return {
        message: "تبرعك يمكن أن يغير حياة أسرة بالكامل",
        icon: <HeartHandshake className="h-12 w-12 text-primary" />,
      };
    }
  };

  const { message, icon } = getImpactDetails(amount);

  return (
    <Card className="overflow-hidden border-2 border-primary-light shadow-md transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light">
            {icon}
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold text-primary">تأثير تبرعك</h4>
            <p className="text-gray-700">{message}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DonationImpactCard;
