import { PayloadAction } from '@reduxjs/toolkit';
import { Demo } from 'types/Demo';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { demoSaga } from 'store/sagas/demoSaga';
import { DemoType, DemoErrorType } from 'store/types/demo';

export const initialState: DemoType = {
  data: [],
  error: null,
  loading: false,
};

const slice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    removeItem(state, action: PayloadAction<Demo>) {
      const index = state.data.findIndex((item) => item.id === action.payload.id);
      console.log('index', index);
      state.data.splice(index, 1);
      state.error = null;
    },
    loadDemosData(state) {
      state.error = null;
      state.data = [];
      state.loading = true;
    },
    demoLoaded(state, action: PayloadAction<Demo[]>) {
      const data = action.payload;
      state.data = data;
      state.loading = false;
    },
    demoError(state, action: PayloadAction<DemoErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: demoActions, reducer } = slice;

export const useDemoSlice = () => {
  useInjectReducer({key: slice.name, reducer: slice.reducer});
  useInjectSaga({key: slice.name, saga: demoSaga});
  return {actions: slice.actions};
};
