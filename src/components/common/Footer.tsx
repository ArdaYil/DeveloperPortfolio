import { Link } from "react-router-dom";
import NewsLetter from "../homepage/NewsLetter";
import useImages from "../../hooks/useImages";

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
  const { data: mastercard } = useImages("vectors:mastercard.svg", "svg+xml");
  const { data: maestro } = useImages("vectors:maestro.svg", "svg+xml");
  const { data: visa } = useImages("vectors:visa.svg", "svg+xml");
  const { data: applePay } = useImages("vectors:apple-pay.svg", "svg+xml");
  const { data: paypal } = useImages("vectors:paypal.svg", "svg+xml");

  console.log(mastercard);

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
          <img className="icon--small" src={mastercard} />
          <img className="icon--small" src={maestro} />
          <img className="icon--small" src={visa} />
          <img className="icon--small" src={applePay} />
          <img className="icon--small" src={paypal} />
        </section>
      </footer>
    </footer>
  );
};

export default Footer;
