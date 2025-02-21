import { createSlice } from '@reduxjs/toolkit'
import quiz from '../quiz.js'

const initialState = {
  currentQuestionIndex: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  finished: false,
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer(state, action) {
      if (state.finished) return
      const currentQuestion = quiz.questions[state.currentQuestionIndex]
      const index = currentQuestion.answers.indexOf(action.payload)
      const isCorrect = currentQuestion.correct === index

      if (isCorrect) {
        state.correctAnswers += 1
      } else {
        state.wrongAnswers += 1
      }
      state.finished = state.currentQuestionIndex >= quiz.questions.length - 1

      if (state.finished) return
      state.currentQuestionIndex += 1
    },
  },
})

export const { nextQuestion, selectAnswer } = quizSlice.actions
export default quizSlice.reducer
