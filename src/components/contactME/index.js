import React, { useState } from 'react';
import styles from './contactMe.module.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });

    try {
      const response = await fetch('https://sheetdb.io/api/v1/k6is8akl37li9', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            {
              'name': formData.name,
              'email': formData.email,
              'phone': formData.phone,
              'message': formData.message
            }
          ]
        })
      });

      const data = await response.json();
      console.log('Form data submitted:', data);

      // Check if submission was successful
      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: null });
        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        // Show success modal for 5 seconds
        setShowSuccessModal(true);
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 2500); // 5000 milliseconds = 5 seconds
      } else {
        throw new Error(data.message || 'Failed to submit form');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({ submitting: false, submitted: false, error: error.message });
    }
  };

  return (
    <div className={styles.contactFromWrap}>
     <h1>Contact Me</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
            required
          />
        </div>
        <button type="submit" className={styles.button} disabled={formStatus.submitting}>
          {formStatus.submitting ? 'Submitting...' : 'Submit'}
        </button>
        {formStatus.error && (
          <p className={styles.errorMessage}>Error: {formStatus.error}</p>
        )}
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className={styles.modal}>
          <p className={styles.successMessage}>Form submitted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
