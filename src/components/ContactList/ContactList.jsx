import css from './ContactList.module.css';
//import { useState } from 'react';
import Contact from '../Contact/Contact';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const filterItems = useSelector((state) => state.contacts.item);
  const filterName = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const filterUser = filterItems.filter((user) =>
    user.name.toLowerCase().includes(filterName.toLowerCase())
  );
  if (!filterUser || filterUser.length === 0) {
    return <div>No contacts</div>;
  }
  return (
    <div>
      <ul className={css.contact}>
        {filterUser.map(({ id, name, number }) => (
          <Contact
            key={id}
            name={name}
            number={number}
            deleteUser={() => dispatch(deleteContact(id))}
          />
        ))}
      </ul>
    </div>
  );
};
