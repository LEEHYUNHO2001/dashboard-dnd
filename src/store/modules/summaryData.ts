import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ActionSummaryPayload } from '@/types';

const initialState = { headers: {}, rows: {} };

const summarySlice = createSlice({
  name: 'summaryData',
  initialState,
  reducers: {
    setSummary: (state, action: PayloadAction<ActionSummaryPayload>) => {
      state.headers = action.payload.headers;
      state.rows = action.payload.rows;
    },
  },
});
export const { setSummary } = summarySlice.actions;
export default summarySlice.reducer;
