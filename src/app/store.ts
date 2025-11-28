import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import employeesReducer from "../features/employees/employeeSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        employees: employeesReducer,
    },
    devTools: {
        name: 'Web React lab 13'
    },
})