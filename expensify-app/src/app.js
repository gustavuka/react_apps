import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import AppRouter from "./routers/AppRouter"
import configureStore from "./store/configureStore"
import { addExpense, removeExpense, editExpense } from "./actions/expenses"
import { setTextFilter } from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"
import "normalize.css/normalize.css"
import "./styles/styles.scss"
import "./firebase/firebase"

const store = configureStore()

store.dispatch(addExpense({ description: "Water Bill", amount: 3000 }))
store.dispatch(
  addExpense({ description: "Gas Bill", amount: 1000, createdAt: 1000 })
)
store.dispatch(addExpense({ description: "Rent", amount: 109500 }))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))
