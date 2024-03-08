import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.name;
export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (nameFilter, contacts) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(nameFilter));
  }
);
export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;
