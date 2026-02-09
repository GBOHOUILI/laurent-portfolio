import React from "react";
import { CalendarDays, Megaphone, Users, Globe } from "lucide-react";

const KeyFigures: React.FC = () => {
  const stats = [
    { number: "5+", label: "Années d'engagement", icon: CalendarDays },
    { number: "35+", label: "Campagnes menées", icon: Megaphone },
    { number: "100+", label: "Personnes formées", icon: Users },
    { number: "3+", label: "Pays d'intervention", icon: Globe },
  ];

  return (
    <section className="relative bg-[#F1F8E9] py-16 md:py-24">
      
      {/* Accent décoratif */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] rounded-full opacity-70 md:w-96  " />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1B5E20] mb-12 md:mb-16">
          Chiffres clés
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#E8F5E9] flex flex-col items-center text-center"
              >
                
                {/* Icône */}
                <div className="mb-6 p-4 bg-[#E8F5E9] rounded-full group-hover:bg-[#C8E6C9] transition-colors duration-300">
                  <Icon className="w-10 h-10 text-[#1B5E20]" strokeWidth={1.8} />
                </div>

                {/* Nombre */}
                <div className="text-5xl md:text-6xl font-black text-[#1B5E20] mb-2 group-hover:text-[#2E7D32] transition-colors">
                  {stat.number}
                </div>

                {/* Label */}
                <p className="text-base md:text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFigures;
