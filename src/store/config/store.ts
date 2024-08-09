import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { employeesPageReducer } from "../slice/employeesSlice.ts";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore( {
    reducer: {
        employeesPage: employeesPageReducer
    },
} )

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>()

