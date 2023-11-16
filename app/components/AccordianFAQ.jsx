'use client';
import React from 'react';

import { useRef, useState } from 'react';

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState('0px');
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: '0px' }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default function AccordianFAQ() {
  const faqsList = [
    {
      q: 'Is it possible to convert an estimate or quote into an invoice using the invoice generator?',
      a: 'The invoice generator allow you to easily convert estimates or quotes into invoices, saving time and ensuring consistency in your billing.',
    },
    {
      q: 'Can I include discounts or promotional codes on my invoices with the invoice generator?',
      a: 'Yes, you can often add discounts, promotional codes, or special offers to your invoices to provide incentives to your clients.',
    },
    {
      q: 'Is my data safe when using an online invoice generator?',
      a: "Reputable invoice generators typically use secure encryption to protect your data, but it's essential to choose a trusted service and regularly back up your information.",
    },
    {
      q: 'Can I generate recurring or subscription-based invoices with the invoice generator?',
      a: 'This invoice generator allows you to create recurring invoices that are sent automatically at regular intervals.      Yes, many invoice generators support the creation of recurring invoices, making it easy to bill clients on a regular schedule, such as monthly or annually.',
    },
    {
      q: 'Is there a mobile app available for the invoice generator to create and manage invoices on the go?',
      a: 'Some invoice generators offer mobile apps for iOS and Android devices, enabling you to invoice clients and manage your business from your smartphone or tablet.',
    },
    {
      q: 'Can I customize the invoice generator to match my brand?',
      a: 'Many invoice generators allow you to customize the look and feel of your invoices, including adding your business logo and colors.',
    },
    {
      q: 'Is there a cost associated with using an invoice generator?',
      a: 'Some invoice generators offer free basic plans, while others may have subscription-based pricing with additional features. It depends on the specific tool you choose.',
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 ">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
}
