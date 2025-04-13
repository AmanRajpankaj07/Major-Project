"use client";

import React from "react";

import { LanguageCard } from "@/components/LanguageCard";
import { CompanyCard } from "@/components/CompanyCard";
import { CalendarWidget } from "@/components/CalenderWidget";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#0b1221] text-white font-sans px-8 sm:px-20 py-24">
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 mb-24">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight">
            Contest ke liye ready raho maderchod. Nahi toh gand faar denge bhodiwala.
          </h1>
          <p className="text-lg mt-6">
            "You're like a contest challenge — you looked hard at first, but I can't resist trying."
          </p>
        </div>
        <CalendarWidget />
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-10">Practice in Specific Language</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <LanguageCard src="/cpp.png" label="20k+ Questions in C++" />
          <LanguageCard src="/c_logo.png" label="20k+ Questions in C" />
          <LanguageCard src="/python.png" label="20k+ Questions in Python" />
          <LanguageCard src="/java.png" label="20k+ Questions in Java" />
          <LanguageCard src="/javascript.png" label="20k+ Questions in JS" />
          <LanguageCard isMore />
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold mb-10">Questions Asked by Companies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <CompanyCard name="Google" src="/google.png" />
          <CompanyCard name="Microsoft" src="/microsoft.png" />
          <CompanyCard name="Meta" src="/meta.png" />
          <CompanyCard name="Amazon" src="/amazon.png" />
          <CompanyCard name="Infosys" src="/infosys.png" />
          <CompanyCard isMore />
        </div>

      </section>
      
      <Footer />
      
    </main>
  );
};

export default HomePage;