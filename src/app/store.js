import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "../features/phone/phoneSlice";

export const store = configureStore({
    reducer: {
        phone: phoneReducer,
    },
});
