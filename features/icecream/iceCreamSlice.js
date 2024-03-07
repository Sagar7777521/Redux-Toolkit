const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIcreams: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcreams--;
    },
    restocked: (state, actions) => {
      state.numOfIcreams += actions.payload;
    },
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
