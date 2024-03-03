import css from './ContactList.module.css';
//import { useState } from 'react';
import Contact from '../Contact/Contact';
import { deleteContact } from '../../redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const filterItems = useSelector((state) => state.contacts.items);
  const filterName = useSelector((state) => state.filter.name);
  const dispatch = useDispatch();

  const filterUser = filterItems.filter((item) =>
    item.name.toLowerCase().includes(filterName.toLowerCase())
  );

  if (!filterUser || filterUser.length === 0) {
    return <div className={css.user}>No contacts</div>;
  }
  return (
    <div>
      <ul className={css.contact}>
        {filterUser.map((item) => (
          <Contact key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
