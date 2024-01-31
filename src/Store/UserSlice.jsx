import { createSlice } from '@reduxjs/toolkit'
const initVal = {
    UserList: [
        { nameOfTask: "my-life", writer: "maya", id: 0, price: 43 },
        { nameOfTask: "children-about-themself", writer: "rachel", id: 1, price: 76 },
        { nameOfTask: "gig-boys", writer: "chava", id: 2, price: 89 }
    ]
}
const userSlice = createSlice({
    name: "UserList",
    initialState: initVal,
    reducers:{

        UserEditing: (state,action)=>{   
      
        state.UserList.map((item) => {            

            if (item.id === action.payload.id) {
                item.nameOfTask = action.payload.inputChange;              

            }           
            
        })    

        
    },

    UserListDeleteItem: (state,action)=>{   
      
        state.UserList.map((item) => {           

            if (item.id === action.payload.id) {
                item=null;              

            }         
          
        })    

        
    }
}
 
    
})
export const { UserEditing ,UserListDeleteItem} = userSlice.actions
export default userSlice.reducer