import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__logo">Goods4you</div>
                <div className="footer__nav">
                    <div className="footer__nav--catalog">Catalog</div>
                    <div className="footer__nav--faq">FAQ</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;