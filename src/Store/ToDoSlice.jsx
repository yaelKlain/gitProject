  import UseGet from '../hooks/useGet'
import { createSlice } from '@reduxjs/toolkit'
import UseDelete from '../hooks/useDelete'
import UsePut from '../hooks/usePut'
import UsePost from '../hooks/usePost'
const toDoList = {
    arr: []
}

const toDoSlice = createSlice({
    name: "toDoList",
    initialState: toDoList,
    reducers: {

        todoGet: (state, actions) => {
            const [httpGet, res] = UseGet()
            httpGet('https://localhost:7149/ToDoGet')
            state.arr = res
        },

        toDoPut: (state, action) => {

            const httpPut= UsePut()          
            httpPut('https://localhost:7149/ToDoPut'+action.payload.id,action.payload)
        },

        toDoDelete: (state, action) => {
          
            const httpDelete = UseDelete()              
            httpDelete('https://localhost:7149/ToDoDelete'+action.payload)   
        },

        toDoAdd: (state, action) => {
          
            const httpPost = UsePost()              
            httpPost('https://localhost:7149/ToDoPost',action.payload)   
        }
    }
})
export const { toDoPut, toDoDelete,todoGet ,toDoAdd} = toDoSlice.actions
export default toDoSlice.reducer







