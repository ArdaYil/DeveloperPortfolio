import { Link } from "react-router-dom";
import NewsLetter from "../homepage/NewsLetter";

const footerData = [
  {
    heading: "Company info",
    links: ["About us", "Latest posts", "Contact us", "Shop"],
  },
  {
    heading: "Help and support",
    links: ["Deliveries", "Free returns", "Refunds", "Tracking"],
  },
  {
    heading: "Customer service",
    links: ["Contact us", "Payments & tax", "My orders", "Tickets"],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <header className="footer__header-section">
        <div className="footer__header">
          {footerData.map(({ heading, links }) => (
            <section className="footer__header__section">
              <article className="footer__header__heading-section">
                <h2 className="footer__header__heading">{heading}</h2>
              </article>
              <article className="footer__header__link-holder">
                {links.map((link) => (
                  <Link to="/" className="footer__header__section__link">
                    {link}
                  </Link>
                ))}
              </article>
            </section>
          ))}
        </div>
        <NewsLetter />
      </header>
      <footer className="footer__footer">
        <section>
          <article className="footer__footer__heading">
            <h2>&copy; 2023 Nova Fits</h2>
          </article>
          <article className="footer__footer__privacy">
            <Link className="footer__footer__privacy__link" to="privacy-policy">
              Privacy Policy
            </Link>
            <Link
              className="footer__footer__privacy__link"
              to="terms-and-conditions"
            >
              Terms & Conditions
            </Link>
          </article>
        </section>
        <section className="footer__footer__payment-methods">
          <img
            className="icon--small"
            src="/src/assets/vectors/mastercard.svg"
          />
          <img className="icon--small" src="/src/assets/vectors/maestro.svg" />
          <img className="icon--small" src="/src/assets/vectors/visa.svg" />
          <img
            className="icon--small"
            src="/src/assets/vectors/apple-pay.svg"
          />
          <img className="icon--small" src="/src/assets/vectors/paypal.svg" />
        </section>
      </footer>
    </footer>
  );
};

export default Footer;
