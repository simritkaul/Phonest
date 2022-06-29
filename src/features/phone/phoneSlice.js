import { createSlice } from "@reduxjs/toolkit";
import { phoneList } from "../../assets/phoneList";

const initialState = {
    data: phoneList,
};

export const phoneSlice = createSlice({
    name: "phone",
    initialState,
    reducers: {
        addPhone: (state, action) => {
            state.data.push(action.payload);
        },
        deletePhone: (state, action) => {
            state.data.splice(action.payload.id - 1, action.payload.id - 1);
            // return state.data.filter((phone) => phone.name !== action.payload);
        },
        editPhone: (state, action) => {
            state.data[action.payload.id - 1] = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addPhone, deletePhone, editPhone } = phoneSlice.actions;

export const selectInitialPhones = (state) => state.phone.data;

export default phoneSlice.reducer;
