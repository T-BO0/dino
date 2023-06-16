import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Player } from "../../app/models/player";
import agent from "../../app/api/agent";

export interface PlayerState {
    Players: Player[] ;
}

const initialState : PlayerState = {
    Players: [],
}

export const fetchPlayersAsync = createAsyncThunk<PlayerState[]>(
    'account/signInUser',
    async (_, thunkAPI) => {
        try {
            const players = await agent.Player.getAllThePlayers();
            setPlayers(players)
            return players;
        } catch (error:any) {
            return thunkAPI.rejectWithValue({error: error.data});
        }
    }
);

export const playerSlice = createSlice({
    name: 'players',
    initialState,
    reducers:{
        setPlayers: (state, action) => {
            state.Players = action.payload;
        },
    },
});

export const {setPlayers} = playerSlice.actions;
