import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={css.container}>
          <h1 className={css.title}>Phonebook</h1>
          <div className={css.contactsContainer}>
            <ContactForm className={css.contactsForm} />
            <h2 className={css.contactsHeader}>Contacts</h2>
            <Filter />
            <ContactList />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
