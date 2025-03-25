import { configureStore, createSlice, current } from '@reduxjs/toolkit'

let nullState = createSlice({
    name : 'nullState',
    initialState : null,
    reducers : {
        setNullState(state, action){
            return null;
        }
    }
})

export default configureStore({
    reducer: {
        nullState : nullState.reducer,
    }
})