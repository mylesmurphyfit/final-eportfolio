import ContactForm from "../components/form/ContactForm";

/**
 * Contact page component
 */
function Contact() {
  return (
    <section className="content-row">
      <ContactForm />

      <article className="content-block">
        <h2>Other Contact Information</h2>

        <ul>
          <li>
            Email: <a href="mailto:murphymmyles@gmail.com">murphymmyles@gmail.com</a>
          </li>
          <li>
            Phone: <a href="tel:+16126551863">(612) 655-1863</a>
          </li>
          <li>Location: Winter Garden, Florida</li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/mylesmmurphy">
              github.com/mylesmmurphy
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/mylesmorganmurphy">
              linkedin.com/in/mylesmorganmurphy
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Contact;
