import { createSlice } from '@reduxjs/toolkit';

type user = {
  nickname: string;
};

const userSlice = createSlice({
  initialState: {
    nickname: '홀앵희',
    auth: '이종환',
  },
  name: 'user',
  reducers: {
    updateNickname(state, action) {
      const newNickname = action.payload;
      state.nickname = newNickname;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { updateNickname } = userSlice.actions;
