import { configureStore } from "@reduxjs/toolkit";
import VideoReducer from "./VideoSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import UserReducer from "./userSlice";

const reducers = combineReducers({
  videos: VideoReducer,
  user: UserReducer,
});
const persistConfig = {
  key: "root",

  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const Store = configureStore({
  reducer: persistedReducer,

  // reducer: {
  // videos: VideoReducer,
  //   videos: persistedReducer,
  // },
});

// const Store = configureStore({
//   reducer: reducers,
// });
export const persistor = persistStore(Store);
export default Store;
