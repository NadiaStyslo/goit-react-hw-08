import css from './Contact.module.css';
import { FaAddressBook, FaMobileAlt } from 'react-icons/fa';
import { deleteContact } from '../../redux/operationsApi';
import { useDispatch } from 'react-redux';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const deleteId = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  return (
    <li className={css.contact}>
      <div className={css.book}>
        <h2 className={css.name}>
          {' '}
          <FaAddressBook />
          {contact.name}
        </h2>
        <h2 className={css.name}>
          {' '}
          <FaMobileAlt />
          {contact.number}
        </h2>
        <button onClick={() => dispatch(deleteId(contact.id))} className={css.button}>
          Delete
        </button>
      </div>
    </li>
  );
};
export default Contact;
