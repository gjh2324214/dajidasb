// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: 0,
    role: 1, // 默认角色
    username: '',
    password: '',
    level:''
  },
  reducers: {
    updateUserId: (state, action) => {
      state.id = action.payload;
    },
    updateRole: (state, action) => {
      state.role = action.payload;
    },
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateUserLevel:(state, action) => {
        state.level = action.payload
    },
    getRole(){
        return state.role
    }
    // 其他 reducer 函数...
  },
});

export const { updateRole, updateUsername, updatePassword, updateUserId, updateUserLevel,getRole } = userSlice.actions;
export default userSlice.reducer;