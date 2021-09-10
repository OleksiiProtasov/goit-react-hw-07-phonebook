import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger';
import thunk from "redux-thunk";
import contactsReducer from "./contacts/contacts-reducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV === "development",
});

export default store;
