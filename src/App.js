import ContactForm from './Components/ContactForm/ContactForm.jsx';
import ContactList from './Components/ContactList/ContactList.jsx';
import Filter from './Components/Filter/Filter.jsx';
import './App.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from './redux/contacts-operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
