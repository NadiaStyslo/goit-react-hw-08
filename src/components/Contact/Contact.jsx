import css from './Contact.module.css'
import { FaAddressBook, FaMobileAlt } from 'react-icons/fa';

const Contact = ({ name, number, deleteUser }) => {
  return (
    <li className={css.contact}>
      <div className={css.book}>
        <h2 className={css.name}>
          {' '}
          <FaAddressBook />
          {name}
        </h2>
        <h2 className={css.name}>
          {' '}
          <FaMobileAlt />
          {number}
        </h2>
        <button onClick={deleteUser} className={css.button}>
          Delete
        </button>
      </div>
    </li>
  );
};
export default Contact;