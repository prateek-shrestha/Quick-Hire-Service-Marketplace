import React, { useState } from "react";
import { Container, Accordion, Card } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../styles/FAQ.css";

const faqs = [
  { question: "Is QuickHire free to use?", answer: "Yes, QuickHire is free to sign up and use." },
  { question: "How does QuickHire ensure secure payments?", answer: "QuickHire uses encrypted payment gateways for secure transactions." },
  { question: "Can I communicate with clients or professionals directly?", answer: "Yes, QuickHire allows direct messaging between clients and professionals." },
  { question: "What is the Verified Badge, and how do I get it?", answer: "The Verified Badge is awarded to users who complete identity verification." },
  { question: "What if I’m not satisfied with the work?", answer: "QuickHire offers a dispute resolution system to ensure fair outcomes." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container className="faq-container">
      <h2 className="faq-title">FAQ</h2>
      <p className="faq-subtitle">These are most frequently asked questions. <br /> If you have any questions, please contact us.</p>
      <Card className="faq-card">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </Card>
    </Container>
  );
};

export default FAQ;
