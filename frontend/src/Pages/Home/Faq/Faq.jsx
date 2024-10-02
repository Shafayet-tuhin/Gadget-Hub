import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleOpen = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  const faqs = [
    { question: "What is the difference between an SSD and an HDD?", answer: "An SSD (Solid State Drive) is faster and more durable than an HDD (Hard Disk Drive) because it uses flash memory rather than spinning disks. SSDs offer quicker load times, while HDDs are generally cheaper and offer more storage capacity." },
    { question: "How much RAM do I need for gaming?", answer: "For most modern games, 16GB of RAM is considered ideal. It provides enough memory for smooth gameplay and allows for multitasking without significant slowdowns." },
    { question: "What should I look for in a gaming mouse?", answer: "When choosing a gaming mouse, consider factors like DPI (Dots Per Inch) for sensitivity, the number of programmable buttons, weight, and whether you prefer a wired or wireless connection." },
    { question: "What is a CPU and why is it important?", answer: "The CPU (Central Processing Unit) is the brain of your computer, responsible for processing instructions from programs. A more powerful CPU can handle more tasks simultaneously and improve performance for demanding applications." },
    { question: "Do I need a graphics card for video editing?", answer: "Yes, a dedicated graphics card is highly recommended for video editing. It helps with rendering and ensures smoother performance during editing, especially for high-resolution video." },
    { question: "What are the benefits of a mechanical keyboard?", answer: "Mechanical keyboards offer better durability and tactile feedback compared to membrane keyboards. They are preferred by gamers and typists for their responsiveness and customizability." },
    { question: "Can I upgrade my laptop’s GPU?", answer: "In most cases, laptop GPUs are not upgradeable as they are soldered onto the motherboard. However, some high-end laptops support external GPUs via Thunderbolt ports." },
    { question: "How do I choose the right monitor for my PC setup?", answer: "When choosing a monitor, consider the resolution, refresh rate (important for gaming), panel type (IPS for color accuracy, TN for fast response), and size based on your workspace and usage needs." }
  ];

  return (
    <div className='bg-white lg:py-10 px-8 lg:px-0'>
      <h2 className='text-4xl font-bold text-center text-primary font-abc mb-4'>FAQ <span className='text-secondary'>for Tech Gadgets</span></h2>
      <p className='text-gray-600 lg:w-[40rem] mx-auto text-center mb-8 font-abc'>
        Find answers to common questions about laptops, PCs, and accessories to help you make the best tech decisions.
      </p>
      <div className='max-w-3xl mx-auto'>
        {faqs.map((faq, index) => (
          <div key={index} className='mb-4 border-b border-gray-200'>
            <button
              onClick={() => toggleOpen(index)}
              className='flex justify-between items-center w-full py-4 text-left font-medium text-lg text-gray-900 font-abc'
            >
              {faq.question}
              {open === index ? <FaMinus className="text-secondary" /> : <FaPlus className="text-secondary" />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${open === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className='px-4 py-2 text-gray-700 text-sm font-abc'>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
