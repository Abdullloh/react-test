import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data/user.json";
import { IUser } from "../models";

interface IInitialState {
  users: IUser[];
}

const initialState: IInitialState = {
  users: data,
};

export const accountSlice = createSlice({
  initialState: initialState,
  name: "accountSlice",
  reducers: {
    addUser: (state, { payload }) => {
      state.users = [...state.users, payload];
    },
    updateUser: (state, { payload }) => {
      state.users.splice(payload.idx, 1, payload.data);
    },
    searchUser: (state, { payload }) => {
      state.users = payload
        ? data.filter((user) => user.email.includes(payload))
        : data;
    },
    deleteUser: (state, { payload }) => {
      state.users = data.filter((item) => item.email !== payload);
    },
  },
});

export const { deleteUser, addUser, searchUser, updateUser } =
  accountSlice.actions;
