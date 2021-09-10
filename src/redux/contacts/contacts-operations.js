import axios from "axios";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:3000";

export const fetchContacts = (name) => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const params = {};
    if (name) params["name_like"] = `^${name}`;

    const { data } = await axios.get(`/contacts`, { params });

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContact = (contact) => async (dispatch) => {
  dispatch(addContactRequest());

  try {
    await axios.post("/contacts", contact);
    dispatch(addContactSuccess());
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess());
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
