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
    reducers:{

    editing: (state,action)=>{   
      
        state.todoArr.map((item) => {
            console.log(action);

            if (item.id === action.payload.id) {
                item.nameOfTask = action.payload.inputChange;
                console.log(item.nameOfTask);

            }

            console.log(state.toDoList);
            
        })

        console.log('editing');   

        
    },

    deleteItem: (state,action)=>{   
      
        state.todoArr.map((item) => {
            console.log(action);

            if (item.id === action.payload.id) {
                item=null;
                console.log(item.nameOfTask);

            }

            console.log(state.toDoList);
          
        })

        console.log('editing');   

        
    }
}

 
    
})
export const { editing ,deleteItem} = toDoSlice.actions
export default toDoSlice.reducer