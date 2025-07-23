import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What makes your regional products special?",
      answer: "Each product in our collection is handcrafted by local artisans using traditional techniques passed down through generations. We work directly with craftspeople to ensure authenticity and fair compensation for their work."
    },
    {
      question: "How do you source your products?",
      answer: "Our team travels across India to discover hidden artisans and authentic regional crafts. We verify the origin and craftsmanship of every item before bringing it to our platform."
    },
    {
      question: "Can I visit the artisans or workshops?",
      answer: "Yes! We organize cultural immersion tours to artisan communities. Contact our experiences team to learn about upcoming opportunities to meet the makers."
    },
    {
      question: "How does my purchase support local communities?",
      answer: "80% of each sale goes directly to the artisan or their cooperative. The remaining 20% helps us sustain our platform, provide marketing support, and fund artisan development programs."
    },
    {
      question: "What if I'm not satisfied with my purchase?",
      answer: "We offer a 30-day happiness guarantee. If you're not completely satisfied, you can return the item for a full refund or exchange. Some handmade items may have slight variations that make them uniquely special."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes! We ship worldwide with careful packaging to protect your treasures. International orders typically arrive within 10-15 business days, depending on customs processing."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f4f1e9] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2a2a2a] mb-4">Preserving Heritage, One Purchase at a Time</h2>
          <p className="text-[#5a5a5a] max-w-2xl mx-auto">
            Answers to common questions about our mission, products, and the communities we support
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-[#5a5a5a]/20 rounded-lg overflow-hidden bg-[#f9f8f5]"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-medium text-lg text-[#2a2a2a]">
                  {faq.question}
                </h3>
                <span className="ml-4 text-[#7a9f79]">
                  {activeIndex === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                </span>
              </button>
              
              <div 
                className={`px-6 pb-6 pt-0 transition-all duration-300 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-[#5a5a5a]">
                  {faq.answer}
                </p>
                {index === 2 && (
                  <button className="mt-4 text-[#7a9f79] hover:underline text-sm flex items-center">
                    Learn more about artisan experiences <FiChevronDown className="ml-1 transform rotate-90" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#5a5a5a] mb-6">
            Still have questions? Our cultural ambassadors are here to help.
          </p>
          <button className="bg-[#7a9f79] hover:bg-[#6a8f69] text-white px-6 py-3 rounded-lg font-medium transition duration-300">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;