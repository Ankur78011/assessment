import { configureStore } from "@reduxjs/toolkit";
import form from "../Reducers/ToggleFrom"
const Store=configureStore({
    reducer:{
        form:form,
    }
})
export default Store