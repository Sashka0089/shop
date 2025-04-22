import "./FaqInfo.scss";

interface IFaq {
  id: number;
  question: string;
  icon: string;
  answer: string;
}

const faqInfo = () => {
  const faqInfo: IFaq[] = [
    {
      id: 1,
      question: "How can I track the status of my order?",
      icon: "",
      answer:
        'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      icon: "",
      answer:
        'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    },
    {
      id: 3,
      question: "How can I return or exchange an item?",
      icon: "",
      answer:
        'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    },
  ];

  return (
    <div className="faqInfo">
      {faqInfo.map((faq) => (
        <div key={faq.id}>
          <div className="faqInfo__block">
            <div className="faqInfo__question">{faq.question}</div>
            <div className="faqInfo__icon">{faq.icon}</div>
          </div>
          <div className="faqInfo__answer">{faq.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default faqInfo;
