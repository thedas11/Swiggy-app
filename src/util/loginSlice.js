import { createSlice } from "@reduxjs/toolkit";


const loggedUser = createSlice({

    name: 'loggedUser',
    initialState: {
        loggedInUser: "Default"   
    },

    reducers:{

        changeuser: (state, action)=>{

            state.loggedInUser = action.payload;
        }
    }
})

export const {changeuser} = loggedUser.actions;

export default loggedUser.reducer;
