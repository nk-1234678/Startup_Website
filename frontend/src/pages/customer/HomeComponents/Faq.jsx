import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I know the products are authentic?",
      answer: "We personally vet every artisan and product on our platform. Each item comes with information about its maker, materials used, and production process. Many products include certificates of authenticity."
    },
    {
      question: "What regions do you currently work with?",
      answer: "We currently feature artisans from 30 regions across India, including Kashmir (Pashmina), Rajasthan (Blue Pottery), West Bengal (Dokra), Gujarat (Patola), and more. We're constantly expanding to new regions."
    },
    {
      question: "How are prices determined for artisan products?",
      answer: "Prices reflect fair compensation for the artisan's time, skill, and materials. We work directly with artisans to set prices that allow them sustainable livelihoods while keeping products accessible to customers."
    },
    {
      question: "Can I request custom orders from artisans?",
      answer: "Yes! Many of our artisans accept custom orders. You can make special requests through the product page or contact our customer service to facilitate the conversation with the artisan."
    },
    {
      question: "How can I become an artisan on your platform?",
      answer: "We welcome new artisans! Visit our 'Become an Artisan' page to submit your application. Our team will review your work and get back to you within 7-10 business days."
    },
    {
      question: "What's your return policy for handmade items?",
      answer: "Due to the nature of handmade goods, we accept returns within 14 days for damaged or significantly not-as-described items. Custom orders are generally non-returnable unless defective."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-ink mb-4">
            Frequently Asked <span className="text-clay-orange">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-malachite-green mx-auto mb-6"></div>
          <p className="text-lg text-ash-gray max-w-3xl mx-auto">
            Find answers to common queries about our artisan marketplace
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-charcoal-ink">
                  {faq.question}
                </h3>
                <span className="ml-4">
                  {activeIndex === index ? (
                    <svg className="w-5 h-5 text-clay-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-ash-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 pb-5' : 'max-h-0'}`}
              >
                <p className="text-ash-gray">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;