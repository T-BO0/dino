import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { accountSlice } from "../../features/account/userSlice";
import { playerSlice } from "../../features/mainPage/playerSlice";

export const store = configureStore({
    reducer:{
        account: accountSlice.reducer,
        players: playerSlice.reducer,
    }
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;