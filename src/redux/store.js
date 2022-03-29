import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './actions-reducer'

export default configureStore({
  reducer: {
      counter: counterReducer
  },
})