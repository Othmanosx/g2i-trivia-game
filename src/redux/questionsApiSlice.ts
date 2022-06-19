import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  correct: boolean;
}
interface RootObject {
  response_code: number;
  results: Question[];
}

export const apiSlice = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://opentdb.com',
  }),
  tagTypes: ['Questions'],
  endpoints: (builder) => ({
    fetchQuestions: builder.query<Question[], void>({
      query: () => '/api.php?amount=10&difficulty=hard&type=boolean',
      transformResponse: (rawResult: RootObject) => {
        return rawResult.results;
      },
      providesTags: [{ type: 'Questions', id: 'LIST' }],
    }),
  }),
});

export const { useFetchQuestionsQuery } = apiSlice;
