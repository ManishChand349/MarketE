import { configureStore } from '@reduxjs/toolkit'
import bazarRedcure from "./bazarSlice";

export const store = configureStore({
  reducer: {
     bazar: bazarRedcure,
  },
})

