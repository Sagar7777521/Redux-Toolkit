const createSlice = require("@redu((xjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//Generates pending, fulfilled and rejected action types
const fetcUsers = createAsyncThunk("users/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id));
});

const userSlice = createSlice({
  name: "user",
  initialState,
});
