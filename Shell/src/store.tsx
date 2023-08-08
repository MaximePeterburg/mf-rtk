import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useAppSelector } from './hooks';

const initialState = {
  count: 0
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    }
  }
});
const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export function useStore() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
}
