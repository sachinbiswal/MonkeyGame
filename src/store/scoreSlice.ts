import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScoresState {
  score: number; 
}

const initialState: ScoresState = {
  score: 0,
};

const scoreSlice = createSlice({
  name: 'scores', 
  initialState, 
  reducers: {
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload; 
    },
  },
});

export const { setScore } = scoreSlice.actions;

export const selectScore = (state: { scores: ScoresState }) => state.scores.score;

export default scoreSlice.reducer;
