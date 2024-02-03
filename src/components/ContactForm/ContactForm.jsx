import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const [formData, setFormData] = useState({ name: '', number: '' });

  const inputChange = event => {
    const { name, value } = event.currentTarget;
    setFormData(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isDuplicate =
      formData.name && contacts.some(contact => contact.name === formData.name);

    if (isDuplicate) {
      alert(`${formData.name} is already in contacts`);
      reset();
    } else {
      dispatch(addContact(formData));
      reset();
    }
  };

  const reset = () => {
    setFormData({ name: '', number: '' });
  };

  return (
    <div className={css.formContainer}>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.inputWrapper}>
          <label className={css.label}>Name</label>
          <input
            className={css.input}
            onChange={inputChange}
            type="text"
            name="name"
            value={formData.name}
          />
        </div>
        <div className={css.inputWrapper}>
          <label className={css.label}>Number</label>
          <input
            className={css.input}
            onChange={inputChange}
            type="tel"
            name="number"
            value={formData.number}
          />
        </div>
        <div className={css.submitButtonWrapper}>
          <button type="submit" className={css.submitButton}>
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
