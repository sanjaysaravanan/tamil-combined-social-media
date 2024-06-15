import { configureStore } from "@reduxjs/toolkit";

import pageInfoReducer from "./reducer/pageInfo";

const store = configureStore({
  reducer: {
    pageInfoReducer,
  },
  devTools: true,
});

export default store;
