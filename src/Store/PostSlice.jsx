import { createSlice } from '@reduxjs/toolkit'
const initVal = {
    postList: [
        { nameOfTask: "Here is a short passage in English:The sun was setting over the horizon, casting a fiery glow across the sky. This passage is only 10 words long, but it still conveys a sense of beauty and tranquility. The setting sun is a common symbol of hope and new beginnings, and the fiery glow across the sky suggests a sense of excitement and possibility. Here is another one:The ocean was a vast and endless expanse of blue. ", writer: "maya", id: 0},
        { nameOfTask: "children-about-themself", writer: "rachel", id: 1},
        { nameOfTask: "gig-boysiiiiiiiiiiiii", writer: "chava", id: 2 }

    ]
}
const PostSlice = createSlice({
    name: "postList",
    initialState: initVal,
   
})
export const { showToDoList } = PostSlice.actions
export default PostSlice.reducer