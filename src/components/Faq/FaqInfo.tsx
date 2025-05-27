import { useState } from "react";
import "./FaqInfo.scss";

interface IFaq {
  id: number;
  question: string;
  answer: string;
}

const faqInfo = () => {
  const faqInfo: IFaq[] = [
    {
      id: 1,
      question: "How can I track the status of my order?",
      answer:
        'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer:
        'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    },
    {
      id: 3,
      question: "How can I return or exchange an item?",
      answer:
        'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    },
  ];

  const [answer, setAnswer] = useState<number[]>([]);

  function visibilityAnswer(id: number) {
    setAnswer((prev) => prev.includes(id) ? prev.filter((item) => item != id) : [...answer, id]);
  }


  return (
    <div className="faqInfo">
      {faqInfo.map((faq) => (
        <div key={faq.id} className="faqInfo__block">
          <div className="faqInfo__question" >{faq.question}</div>



          <svg
            onClick={() => visibilityAnswer(faq.id)}
            className={`faqInfo__icon ${answer.includes(faq.id) ? "open" : ""}`}
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3852 12.2477L20.9052 3.72768L21.7891 4.61157L13.2691 13.1316L21.6577 21.5201L20.6834 22.4943L12.2949 14.1058L4.11144 22.2892L3.22756 21.4054L11.411 13.2219L3.00578 4.81667L3.98 3.84245L12.3852 12.2477Z"
              fill="white"
            />
          </svg>






          <div className={`faqInfo__answer-wrapper ${answer.includes(faq.id) ? "open" : ""}`}><div className="faqInfo__answer">{faq.answer}</div></div>





        </div>
      ))}
    </div>
  );
};

export default faqInfo;
