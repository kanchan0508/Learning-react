import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: "search",
    initialState:{

    },
    reducers:{
        cacheResult: (state, actions)=>{
          state = Object.assign(state, actions.payload)
        }
    }
}
    
)

export const {cacheResult} = searchSlice.actions
export default searchSlice.reducer