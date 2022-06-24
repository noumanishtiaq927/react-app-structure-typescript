import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:1,
        title:'Learn now',
        content:'what'
    },
    {
        id:2,
        title:'Learn now',
        content:'what'
    },
]

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        
    }
})