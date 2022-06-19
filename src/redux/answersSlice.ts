import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answers: [],
  correct_answers: 0,
};

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    answerAdd: (state: any, action: any) => ({
      ...state,
      answers: [...state.answers, action.payload],
      correct_answers: state.correct_answers + (action.payload.correct ? 1 : 0),
    }),
    answersLoading: (state) => ({
      ...state,
      status: 'loading',
    }),
    answersClear: (state) => {
      state.answers = [];
      state.correct_answers = 0;
    },
  },
});

//export dispatch hook functions
export const { answerAdd, answersLoading, answersClear } = answersSlice.actions;
//export combined reducer to redux store
export default answersSlice.reducer;
