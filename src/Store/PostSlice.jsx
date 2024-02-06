import { createSlice } from '@reduxjs/toolkit'
import UseGet from '../hooks/useGet'
import UsePut from '../hooks/usePut'
import UsePost from '../hooks/usePost'
import UseDelete from '../hooks/useDelete'

const postlist = {    
        arr: []    
}

const postSlice = createSlice({
    name: "postList",
    initialState: postlist,
    reducers:{

        postGet: (state, actions) => {
            const [httpGet, res] = UseGet()
            httpGet('https://localhost:7149/PostGet')
            state.arr = res
        },

        postPut: (state, action) => {

            const httpPut= UsePut()   
            // console.log();       
            httpPut('https://localhost:7149/PostPut'+action.payload.id,action.payload)
        },

        PostDelete: (state, action) => {
          
            const httpDelete = UseDelete()              
            httpDelete('https://localhost:7149/PostDelete'+action.payload)   
        },
        
        PostAdd: (state, action) => {                   
            const httpPost = UsePost()              
            httpPost('https://localhost:7149/PostsPost',action.payload)   
        }             
    }          
        
})
export const { postGet ,postPut,PostDelete,PostAdd} = postSlice.actions
export default postSlice.reducer