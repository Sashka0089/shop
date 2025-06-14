import Card from "../Card/Card";
import Header from "../Header/Header";
import "./Catalog.scss";
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";

const Catalog = () => {
  return (
    <>
      <section className="catalog-header">
        <div className="catalog-header__container">
          <div className="catalog-header__nav">
            <Header />
          </div>

          <div className="catalog-header__info">
            <div className="catalog-header__back">Goods4you</div>
            <div className="catalog-header__title">
              Any products from famous brands <br /> with worldwide delivery
            </div>
            <div className="catalog-header__text">
              We sell smartphones, laptops, clothes, shoes <br />
              and many other products at low prices
            </div>
            <div className="catalog-header__btn">Go to shopping</div>
          </div>
        </div>
      </section>

      <main className="starter">
        <div className="catalog" id="catalog">
          <div className="catalog__container">
            <div className="catalog__title">Catalog</div>
            <input className="catalog__input" placeholder="Search by title" />
            <div className="catalog__store">
              <Card />
            </div>

            <div className="catalog__btn">
              <div className="catalog__show">Show more</div>
            </div>
          </div>
        </div>

        <div className="faq">
          <Faq />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Catalog;
