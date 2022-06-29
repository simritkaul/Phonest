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
            const foundIdx = state.data.findIndex((datum) => datum.id === action.payload.id);
            if (foundIdx >= 0) {
                if (state.data.length === 1) {
                    state.data = [];
                } else {
                    state.data.splice(foundIdx, 1);
                }
            }
            // state.data.splice(action.payload.id - 1, 1);
            // return state.data.filter((phone) => phone.name !== action.payload);
        },
        editPhone: (state, action) => {
            const foundIdx = state.data.findIndex((datum) => datum.id === action.payload.id);
            console.log(foundIdx);
            if (foundIdx >= 0) {
                state.data[foundIdx] = action.payload;
            }
            console.log(state.data[foundIdx]);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addPhone, deletePhone, editPhone } = phoneSlice.actions;

export const selectInitialPhones = (state) => state.phone.data;

export default phoneSlice.reducer;
