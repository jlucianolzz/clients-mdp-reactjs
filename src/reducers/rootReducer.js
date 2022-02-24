import { combineReducers } from "redux";
import { clienteReducer } from "./clienteReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    cliente: clienteReducer,
});
