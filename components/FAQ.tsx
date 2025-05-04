// components/FAQ.js
import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is SPARK Amazon PPC System?",
      answer:
        "SPARK is a cutting-edge Amazon PPC Algorithm designed to optimize your advertising performance, simplify maintenance, and improve client management, all at a fraction of the cost of traditional solutions.",
    },
    {
      question: "How much does SPARK cost compared to Pacvue?",
      answer:
        "SPARK costs only $200/month per account, which is 1/10th the cost of Pacvue, while delivering better performance results.",
    },
    {
      question: "What features are included in SPARK?",
      answer:
        "SPARK includes Placement Complete Algorithm, Auto Auditor, Auto Reporting, and Auto Restructure Tools. Additional features like Auto Client Management Tools and Real-time Support are coming soon.",
    },
  ];

  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div key={index} className="collapse collapse-arrow bg-base-200">
          <input
            type="checkbox"
            name={`faq-accordion-${index}`}
            defaultChecked={index === 0}
          />
          <div className="collapse-title text-xl font-medium after:!text-primary">
            {faq.question}
          </div>
          <div className="collapse-content">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
