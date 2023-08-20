import SubmitButton from "../buttons/SubmitButton";
import Form from "../form/Form";
import InputField from "../form/InputField";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <h2 className="newsletter__heading">Subscribe to our news letter</h2>
      <Form className="newsletter__form" initialValues={{ email: "" }}>
        <InputField
          className="newsletter__input-field"
          name="email"
          placeholder="Email"
        />
        <SubmitButton className="newsletter__submit-btn">
          Subscribe
        </SubmitButton>
      </Form>
    </section>
  );
};

export default NewsLetter;
