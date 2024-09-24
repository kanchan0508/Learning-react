import { createSlice } from "@reduxjs/toolkit";


const ChatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            
            state.messages.push(action.payload);
            if (state.messages.length > 20) {
                // Remove the oldest message (from the top)
                state.messages.shift();
              }
        },
    },
})

export const {addMessage} = ChatSlice.actions;

export default ChatSlice.reducer