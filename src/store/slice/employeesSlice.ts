import { createSlice } from "@reduxjs/toolkit";
import { EmployeesSchema } from "./types/employeesSchema.ts";

const initialState: EmployeesSchema = {
    employeesDate: undefined,
};

export const employeesPageSlice = createSlice( {
    name: 'employeesSlice',
    initialState,
    reducers: {},
    extraReducers: () => {
    },
} )

export const { actions: employeesPageActions } = employeesPageSlice;
export const { reducer: employeesPageReducer } = employeesPageSlice;