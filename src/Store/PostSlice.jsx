import { createSlice } from '@reduxjs/toolkit'
const initVal = {
    postList: [
        { nameOfTask: "Reading is an essential skill that is important for people of all ages. It allows us to learn new things, expand our knowledge, and connect with others. Reading can also help us to develop our imagination, creativity, and critical thinking skills.There are many benefits to reading. Reading can help us to: Learn new things about the world around us, including history, science, and current events Expand our vocabulary and improve our grammar skills Develop our imagination and creativity Learn about different cultures and perspectives Improve our critical thinking skill Reading can also be a relaxing and enjoyable activity. It can help us to escape from the stresses of everyday life and simply enjoy a good story. If you are not a regular reader, there are many things you can do to start reading more. You can: Set aside some time each day to read Find books that you are interested in Join a book club or reading group Visit your local library or bookstore. Reading is a lifelong skill that can benefit you in many ways. Make sure to make time for reading in your life ", writer: "maya", id: 0 },
        { nameOfTask: "children-about-themself", writer: "rachel", id: 1 },
        { nameOfTask: "gig-boysdydy dyrujj dyudjyr dtdr", writer: "chava", id: 2 }
    ]
}
const postSlice = createSlice({
    name: "postList",
    initialState: initVal,
    reducers:{

    postEditing: (state,action)=>{   
      
        state.postList.map((item) => {            

            if (item.id === action.payload.id) {
                item.nameOfTask = action.payload.inputChange;              

            }       
            
        })       
        
    },

    postDeleteItem: (state,action)=>{   
      
        // state.postList.map((item) => {
            

        //     if (item.id === action.payload.id) {
        //         item=null;
        //         console.log(item.nameOfTask);

        //     }           
          
        // })       

        
    }
}

 
    
})
export const { postEditing ,postDeleteItem} = postSlice.actions
export default postSlice.reducer