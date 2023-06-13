import { createSlice } from "@reduxjs/toolkit";
const initialState={
    _name:"",
}
export const nameSlide=createSlice({
    name:"dispatchName",
    initialState,reducers:{
        countryName:(state,action)=>{
            
            state._name=action.payload._name
        }
    }
})
export const {countryName}=nameSlide.actions;
export default nameSlide.reducer;