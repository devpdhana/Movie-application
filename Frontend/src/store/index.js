import {configureStore, createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:"user",
    initialState:{isLoggedin:false},
    reducers:{
        login(state){
            state.isLoggedin = true
        },
        signup(state){
            state.isLoggedin = false
        }
    }
})

const adminSlice = createSlice({
    name:"admin",
    initialState:{isLoggedin:false},
    reducers:{
        login(state){
            state.isLoggedin = true
        },
        signup(state){
            state.isLoggedin = false
        }
    }
})

export const userAction = userSlice.actions
export const adminAction = adminSlice.actions

export const store = configureStore({
    reducer:{
        user:userSlice.reducer,
        admin:adminSlice.reducer
    }
})