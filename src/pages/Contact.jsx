import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import { ContactList } from '../components/ContactList/ContactList';
import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/operationsApi';

const Contact = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <b>loading...</b>}
      <ContactList />
    </div>
  );
};

export default Contact;
