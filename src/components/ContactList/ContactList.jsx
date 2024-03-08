import css from './ContactList.module.css';
// import { useState, useEffect } from 'react';

import Contact from '../Contact/Contact';

import { useSelector } from 'react-redux';
import { selectFilter, selectContacts } from '../../redux/selectors';

export const ContactList = () => {
  const filterItems = useSelector(selectContacts);
  const filterName = useSelector(selectFilter);

  const filterUser = filterItems.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      <ul className={css.contact}>
        {filterUser.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};
