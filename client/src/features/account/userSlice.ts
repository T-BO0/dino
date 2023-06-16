import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { User } from "../../app/models/user";
import { router } from "../../app/router/router";
import agent from "../../app/api/agent";
import { FieldValues } from "react-hook-form";

export interface AccountState {
    user: User | null;
}

const initialState : AccountState = {
    user: null,
}

export const signInUser = createAsyncThunk<User, FieldValues>(
    'account/signInUser',
    async (data, thunkAPI) => {
        try {
            const user = await agent.Account.login(data);
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } catch (error:any) {
            return thunkAPI.rejectWithValue({error: error.data});
        }
    }
);

export const fetchCurrentUser = createAsyncThunk<User>(
    'account/currentUser',
    async (_, thunkAPI) => {
        thunkAPI.dispatch(setUser(JSON.parse(localStorage.getItem('user')!)))
        try {
            const user = await agent.Account.getCuurentUser();
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({error: error.data});
        }
    },
    {
        condition: () => {
            if(!localStorage.getItem('user')) return false;
        }
    }
);

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers:{
        signOut: (state) => {
            state.user = null;
            localStorage.removeItem('user');
            router.navigate('/')
        },

        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers:(builder => {
        builder.addMatcher(isAnyOf(signInUser.rejected, fetchCurrentUser.rejected), (_, action) => {
            throw action.payload;
        });
        builder.addMatcher(isAnyOf(signInUser.fulfilled, fetchCurrentUser.fulfilled), (state, action) => {
            state.user = action.payload;
        });
    })
});

export const {signOut, setUser} = accountSlice.actions;