import React from "react";
import { Link } from "react-router-dom";

const HeaderStep =({currentStep}) =>{
   
    const steps = [
        { step: 1, label: "Elegir estadía" },
        { step: 2, label: "Datos personales" },
        { step: 3, label: "Confirmación" },
      ];
  
    return (
        <header className="fixed top-0 left-0 w-full z-40 bg-white border-b shadow-sm px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          <div className="flex justify-between items-center gap-4 sm:gap-10 w-full sm:w-auto">
            <Link to="/">
            <img
              src="https://zelvanegra.co/wp-content/uploads/2025/02/LOGO-ZELVA-NEGRA-2048x645.png"
              alt="Logo"
              className="h-8 sm:h-10"
            />
            </Link>
          <div className="md:hidden block">
            {steps
                .filter(({ step }) => step === currentStep)
                .map(({ step, label }) => (
                <div
                    key={step}
                    className="flex items-center gap-1 text-[#7c693d] font-semibold"
                >
                    <span className="rounded-full w-5 h-5 text-xs flex items-center justify-center bg-[#7c693d] text-white">
                    {step}
                    </span>
                    {label}
                </div>
                ))}
            </div>
          </div>
         

          <div className=" md:flex hidden flex-wrap sm:flex-nowrap items-start sm:items-center gap-3 text-sm w-full">
            {steps.map(({ step, label }, index) => {
              const isCurrent = step === currentStep;
              const isCompleted = step < currentStep;
              const isLast = index === steps.length - 1;
      
              return (
                <React.Fragment key={step}>
                  <div
                    className={`flex items-center gap-1 ${
                      isCurrent ? "text-[#91763e] font-semibold" : "text-gray-500"
                    }`}
                  >
                    <span
                      className={`rounded-full w-5 h-5 text-xs flex items-center justify-center
                      ${
                        isCurrent
                          ? "bg-[#91763e] text-white"
                          : isCompleted
                          ? "bg-[#d1c6a5] text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {step}
                    </span>
                    {label}
                  </div>
      
                  {!isLast && (
                    <span className="text-gray-300 text-xl font-light select-none">
                      ⋯⋯⋯
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </header>
    )

}

export default HeaderStep