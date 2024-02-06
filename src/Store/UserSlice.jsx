import { createSlice } from '@reduxjs/toolkit'
import UseGet from '../hooks/useGet'
import UsePost from '../hooks/usePost'
import UsePut from '../hooks/usePut'
import UseDelete from '../hooks/useDelete'

const userList = {
    arr: []
}

const userSlice = createSlice({
    name: "userList",
    initialState: userList,
    reducers:{
        UserGet: (state, actions) => {
            const [httpGet, res] = UseGet()
            httpGet('https://localhost:7149/UserGet')
            state.arr = res
        },

        UserPut: (state, action) => {

            const httpPut= UsePut()          
            httpPut('https://localhost:7149/UserPut'+action.payload.id,action.payload)
        },

        UserDelete: (state, action) => {
          
            const httpDelete = UseDelete()              
            httpDelete('https://localhost:7149/UserDelete'+action.payload)   
        },       

        UserAdd: (state, action) => {
          
            const httpPost = UsePost()              
            httpPost('https://localhost:7149/UsersPost',action.payload)   
        }
    }           
})
export const { UserGet ,UserPut,UserDelete,UserAdd} = userSlice.actions
export default userSlice.reducer