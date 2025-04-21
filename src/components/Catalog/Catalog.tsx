import Card from "../Card/Card";
import Header from "../Header/Header";
import "./Catalog.scss";

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

      <main className="catalog">
        <div className="catalog__container">
          <div className="catalog__title">Catalog</div>
          <input className="catalog__input" placeholder="Search by title" />
          <div className="catalog__store">
            <Card />
          </div>
        </div>
      </main>
    </>
  );
};

export default Catalog;
