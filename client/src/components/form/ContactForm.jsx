import { useState } from "react";
import api from "../../services/api";

// Import form styles
import '../../styles/form.css'

/**
 * Contact form component
 */
function ContactForm() {
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Get field errors from API errors
   */
  function getFieldErrors(apiErrors) {
    return Object.fromEntries(
      apiErrors
        .map((error) => [
          error?.path || error?.param,
          error?.msg || "Invalid value",
        ])
        .filter(([key]) => key)
    );
  }

  /**
   * Handle form submission
   * Get form data and submit to API
   */
  async function onSubmit(e) {
    e.preventDefault();

    const formEl = e.currentTarget;
    const formData = Object.fromEntries(new FormData(formEl));

    setFieldErrors({});
    setStatus("");
    setIsSubmitting(true);

    try {
      // Submit form data to API
      await api.post("/api/contact", formData);

      setStatus("Message sent successfully.");
      formEl.reset();
    } catch (err) {
      // Get API errors from response
      const apiErrors = err?.response?.data?.errors;

      if (!Array.isArray(apiErrors)) {
        // If API errors are not an array, set status to generic error message
        setStatus("Something went wrong. Please try again.");
        return;
      }

      // Set field errors from API errors
      setFieldErrors(getFieldErrors(apiErrors));
      setStatus("Please fix the errors and try again.");
    }

    // Reset form and submission status
    setIsSubmitting(false);
  }

  return (
    <article className="content-block">
      <h2>Send a Message</h2>

      <form id="contact-form" name="contactForm" noValidate onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />
        {fieldErrors.name && <p className="error-message">{fieldErrors.name}</p>}

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
        {fieldErrors.email && <p className="error-message">{fieldErrors.email}</p>}

        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" />
        {fieldErrors.phone && <p className="error-message">{fieldErrors.phone}</p>}

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="6"></textarea>
        {fieldErrors.message && <p className="error-message">{fieldErrors.message}</p>}

        <button className="ui-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      <p className="form-message" aria-live="polite">
        {status}
      </p>
    </article>
  );
}

export default ContactForm;
