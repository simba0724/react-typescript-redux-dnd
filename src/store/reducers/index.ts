import tasksOperations from "./tasksOperations"

import { combineReducers } from "redux";

export default combineReducers({
    tasks: tasksOperations
})