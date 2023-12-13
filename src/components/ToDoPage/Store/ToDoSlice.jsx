import { createSlice } from '@reduxjs/toolkit'
const initVal = {
    toDoList: [
        { nameOfTask: "my-life", writer: "maya", id: 0, price: 43 },
        { nameOfTask: "children-about-themself", writer: "rachel", id: 1, price: 76 },
        { nameOfTask: "gig-boys", writer: "chava", id: 2, price: 89 }

    ]
}
const toDoSlice = createSlice({
    name: "toDoList",
    initialState: initVal,
    showToDoList: {       
        
        

    }
})
export const { showToDoList } = toDoSlice.actions
export default toDoSlice.reducer