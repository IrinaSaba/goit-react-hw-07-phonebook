import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsApi,
  addContactApi,
  deleteContactsApi,
} from 'utils/fetchApi';

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, thunkApi) => {
    try {
      const contacts = await getContactsApi();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/add',
  async (newContact, thunkApi) => {
    try {
      const contacts = await addContactApi(newContact);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const removeContact = createAsyncThunk(
  'todos/delete',
  async (id, thunkApi) => {
    try {
      await deleteContactsApi(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
