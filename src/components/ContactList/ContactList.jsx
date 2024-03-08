import css from './ContactList.module.css';
import { useState, useEffect } from 'react';
import Contact from '../Contact/Contact';
import { deleteContact, fetchContacts } from '../../redux/operationsApi';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
  selectContacts,
} from '../../redux/selectors';

export const ContactList = () => {
  const filterItems = useSelector(selectContacts);
  const filterName = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul className={css.contact}>
        {filterName.map((item) => (
          <Contact key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
