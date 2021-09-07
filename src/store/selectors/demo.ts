import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from 'store/slices/demo';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.demo || initialState;

export const getSelectorDemos = createSelector(
  [selectDomain],
  demo => demo.data,
);

export const getSelectorLoading = createSelector(
  [selectDomain],
  demo => demo.loading,
);
