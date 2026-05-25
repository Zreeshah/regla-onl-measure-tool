"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Zap } from 'lucide-react';

const AboutPageClient = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="container flex-1 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h1 className="text-3xl font-bold mb-6 text-ruler-primary">About Us</h1>
            <p className="text-lg text-gray-700 mb-6">
              Welcome to Online-Ruler.Onl, your reliable and precise digital measurement tool. Created to provide a practical solution when you need to measure objects and don&apos;t have a physical ruler on hand.
            </p>
            <p className="text-gray-700 mb-6">
              In an increasingly digital world, we understand that traditional tools are not always available when you need them. That&apos;s why we developed this web application that turns your screen into a calibrated ruler, allowing you to take precise measurements anytime and anywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="text-ruler-primary mr-3" size={32} />
                <h2 className="text-xl font-semibold text-ruler-primary">Our Mission</h2>
              </div>
              <p className="text-gray-700">
                To provide an accessible, precise, and easy-to-use online measurement tool for everyone, regardless of where they are or what device they use.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Zap className="text-ruler-primary mr-3" size={32} />
                <h2 className="text-xl font-semibold text-ruler-primary">Our Vision</h2>
              </div>
              <p className="text-gray-700">
                To be the most trusted and widely used digital measurement tool in the world, helping millions of people in their daily measurement needs.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-ruler-primary">Why Choose Online-Ruler.Onl?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                  <span className="text-ruler-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">Guaranteed Precision</h3>
                  <p className="text-gray-700">Advanced calibration system that adapts to your specific screen for exact measurements.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                  <span className="text-ruler-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">100% Free</h3>
                  <p className="text-gray-700">No sign-ups, no subscriptions, no hidden costs. Always free.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                  <span className="text-ruler-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">Easy to Use</h3>
                  <p className="text-gray-700">Intuitive interface designed so anyone can use it without complications.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                  <span className="text-ruler-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">Compatible with All Devices</h3>
                  <p className="text-gray-700">Works perfectly on computers, tablets, and smartphones.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                  <span className="text-ruler-primary font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">Privacy First</h3>
                  <p className="text-gray-700">All calibrations are saved locally in your browser. We do not collect or share your data.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-ruler-primary">Our Commitment</h2>
            <p className="text-gray-700 mb-4">
              We are committed to keeping Online-Ruler.Onl as a free, accessible, and constantly improving tool. We listen to our community and work continuously to add new features and improve the user experience.
            </p>
            <p className="text-gray-700">
              If you have any suggestions or feedback, don&apos;t hesitate to contact us. Your opinion is fundamental to us.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPageClient;
