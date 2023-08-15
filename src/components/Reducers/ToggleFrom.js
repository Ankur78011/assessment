import { createSlice } from "@reduxjs/toolkit";
const initalState={
 showModal:false,
 showDetials:false,
 showMobileNav:false
}

const form=createSlice({
    name:"form",
    initialState:initalState,
    reducers:{
        toggleForm:(state,action)=>{
         state.showModal=!state.showModal
        },
        toggleDetails:(state,action)=>{
         state.showDetials=!state.showDetials;
        },
        toggleMobileNav:(state,action)=>{
            state.showMobileNav=!state.showMobileNav;

        }
    }

})

export default form.reducer
export const{toggleForm,toggleDetails,toggleMobileNav}=form.actions
