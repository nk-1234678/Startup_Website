import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq12 = () => {
  const faqs = [
    {
      question: "What is Artisan Connect 3?",
      answer: "Artisan Connect 3 is a platform that connects local artisans with tourists, promoting cultural tourism and handmade products."
    },
    {
      question: "How does the platform help artisans?",
      answer: "It provides artisans with a digital marketplace and opportunity to earn by acting as local guides or selling handmade products."
    },
    {
      question: "Can tourists book local guides through the platform?",
      answer: "Yes, tourists can connect with registered artisans who offer personalized cultural tours and experiences."
    },
    {
      question: "Are the handmade products authentic?",
      answer: "Yes, all listed products are handcrafted by verified local artisans, ensuring authenticity and cultural value."
    },
    {
      question: "How does the reward-based system work?",
      answer: "Users earn rewards by discovering hidden gems and engaging with cultural experiences, which can be redeemed on the platform."
    },
    {
      question: "Is there an app available for Artisan Connect 3?",
      answer: "We are currently developing a mobile app to enhance accessibility and user experience on the go."
    },
    {
      question: "How can an artisan register on the platform?",
      answer: "Artisans can sign up through our website by providing basic information, skills, and uploading sample works for verification."
    },
    {
      question: "Is the platform available across India?",
      answer: "We are initially launching in selected states and plan to expand across India with broader artisan involvement."
    },
    {
      question: "What kind of cultural experiences are available?",
      answer: "Users can explore village tours, traditional crafting sessions, local festivals, and more through artisan-led experiences."
    },
    {
      question: "Can I buy souvenirs directly from the artisans?",
      answer: "Absolutely! You can browse, purchase, and even request custom handmade souvenirs from artisans on the platform."
    },
    {
      question: "How does the platform ensure quality and trust?",
      answer: "We verify all artisans before listing, collect user feedback, and continuously monitor quality for a trustworthy experience."
    },
    {
      question: "Will there be AR/VR experiences in the future?",
      answer: "Yes! We're working on integrating AR/VR to offer immersive previews of cultural sites and artisan workshops."
    },
    {
      question: "Can users review and rate artisans?",
      answer: "Yes, users can provide ratings and reviews after each experience or purchase, helping others choose wisely."
    },
    {
      question: "What payment methods are supported?",
      answer: "We support secure payments via UPI, credit/debit cards, and mobile wallets for hassle-free transactions."
    },
    {
      question: "Can foreign tourists use the platform?",
      answer: "Yes, our platform supports multiple languages and currencies, making it tourist-friendly for international users."
    },
    {
      question: "What are 'Hidden Gems' on the platform?",
      answer: "Hidden Gems are unique, lesser-known cultural spots suggested by artisans that users can explore and earn rewards for discovering."
    },
  ];
  

  const [activeIndex, setActiveIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 6;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const next = () => {
    if (currentPage < Math.floor(faqs.length / questionsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previous = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedFaqs = faqs.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage);

  return (
    <div className="bg-white text-[#38404f] py-20 flex justify-center">
      <div className="w-[90%] max-w-6xl">
        <div className="relative text-center mb-6">
          {/* Background Text */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-[30px] lg:text-[70px] font-bold text-gray-200 opacity-60 z-5 mb-4 whitespace-nowrap select-none">
              Frequently Ask Question
            </h1>
          </div>

          {/* Foreground Text */}
          <div className="relative z-10 text-4xl font-bold font-playfair">
            Frequently Asked Questions <br />
            <span className="text-[#ff6612] text-sm cursor-pointer">Click Here</span>
            <span className="text-[#38404f] text-sm cursor-pointer"> ___to get answers</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-14">
          {/* Left Side */}
          <div className="lg:w-[55%] w-full">
            {displayedFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-5 mb-3 border border-[#e0e0e0]"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="text-base font-medium text-[#2c2d67]">{faq.question}</p>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-[#ff6612]" />
                  ) : (
                    <FaChevronDown className="text-[#ff6612]" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="mt-3 text-[#38404f] text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
            <div className="text-center mt-4">
              <button
                className="bg-[#ff6612] hover:bg-[#e05b0f] text-white w-10 h-10 rounded-full mx-2 shadow-md transition-colors"
                onClick={previous}
              >
                &lt;
              </button>
              <button
                className="bg-[#ff6612] hover:bg-[#e05b0f] text-white w-10 h-10 rounded-full mx-2 shadow-md transition-colors"
                onClick={next}
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-[40%] w-full lg:mb-9 text-center mt-8 lg:mt-0">
            <img
              className="mx-auto w-[60%] mb-9"
              src="https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5b49e6atVeg9asBXzKcdUu5Po6FhjmvntTyM2"
              alt="question"
            />
            <div className="mb-4 -mt-6">
              <h2 className="text-3xl font-bold mb-2 font-playfair">Any Question?</h2>
              <p className="text-sm text-[#38404f]">
                You can ask anything you want to know about our platform.
              </p>
              <h2 className="text-xl font-bold mt-10 text-[#2c2d67] text-left ml-1">Let us know</h2>

              <input
                type="text"
                placeholder="Enter your question here"
                className="w-full p-3 border border-[#e0e0e0] rounded-md mt-1 text-[#38404f] focus:ring-2 focus:ring-[#ff6612] focus:outline-none"
              />
              <button className="bg-[#ff6612] hover:bg-[#e05b0f] text-white px-8 py-3 mt-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                Send Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq12;