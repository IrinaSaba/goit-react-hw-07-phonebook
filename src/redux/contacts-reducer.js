import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { changeFilter } from './contacts-actions';
import { getContacts, addContact, removeContact } from './contacts-operations';

const itemsReducer = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [getContacts.fulfilled]: (_, { payload }) => payload,

  [removeContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
const setError = (_, { payload }) => payload;
const resetError = () => null;

const errorReducer = createReducer(null, {
  [getContacts.rejected]: setError,
  [getContacts.pending]: resetError,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  error: errorReducer,
});
