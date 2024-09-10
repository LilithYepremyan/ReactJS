import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { counterSlice } from "../features/counter/counterSlice"
import { quotesApiSlice } from "../features/quotes/quotesApiSlice"
import { reducer } from "../features/products/procucts.slice"
import type { IState } from "../features/products/types"

const rootReducer = combineSlices(counterSlice, quotesApiSlice)
export type RootState = IState

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: reducer,
  })

  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
