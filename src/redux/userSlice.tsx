import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const userAdaper = createEntityAdapter<User>();

export const fetchUsers = createAsyncThunk(
  '/users/fetchUsers',
  async () =>
    (await (await fetch('https://reqres.in/api/users?delay=1')).json())
      .data as User[],
);

const userSlice = createSlice({
  name: 'users',
  initialState: userAdaper.getInitialState({
    loading: false,
    users: [] as User[],
  }),
  reducers: {
    addOneUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = false;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, staet => {
      staet.loading = false;
    });
  },
});

export default userSlice.reducer;

export const {addOneUser} = userSlice.actions;
