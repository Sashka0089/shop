import FaqInfo from "./FaqInfo";
import './Faq.scss';
const Faq = () => {
  return (
    <div className="faq" id="faq">
      <div className="faq__container">
        <div className="faq__title">FAQ</div>

        <FaqInfo />
      </div>
    </div>
  );
};

export default Faq;
