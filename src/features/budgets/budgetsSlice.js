import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

export const budgetSlice = createSlice({
    name: 'budgets',
    initialState: initialState,
    reducers: {
        editBudget: (state, action) => {
            return state.map(budget => {
                if (budget.category === action.payload.category) {
                    return action.payload
                } else {
                    return budget
                }
            })
        },
    }
})

export const selectBudgets = (state) => state.budgets;
export const { editBudget } = budgetSlice.actions
export default budgetSlice.reducer