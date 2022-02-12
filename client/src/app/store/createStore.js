import usersReducer from "./users";
import commentsReducer from "./comments";
import qualitiesReducer from "./qualities";
import professionsReducer from "./professions";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  qualities: qualitiesReducer,
  professions: professionsReducer,
  users: usersReducer,
  comments: commentsReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
