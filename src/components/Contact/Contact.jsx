import css from './Contact.module.css';
import { FaAddressBook, FaMobileAlt } from 'react-icons/fa';
import { deleteContact } from '../../redux/operationsApi';
import { useDispatch } from 'react-redux';

const Contact = ({ item }) => {
  const dispatch = useDispatch();
  const deleteId = () => {
    dispatch(deleteContact(item.id));
  };
  return (
    <li className={css.contact}>
      <div className={css.book}>
        <h2 className={css.name}>
          {' '}
          <FaAddressBook />
          {item.name}
        </h2>
        <h2 className={css.name}>
          {' '}
          <FaMobileAlt />
          {item.number}
        </h2>
        <button onClick={deleteId} className={css.button}>
          Delete
        </button>
      </div>
    </li>
  );
};
export default Contact;
