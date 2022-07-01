import {createSlice} from '@reduxjs/toolkit'

export const nameUserSlice = createSlice({
    name: 'nameUser',
    initialState: '',
    reducers: {
        nameGlobal: (state, action) => action.payload
    }
})

export const { nameGlobal } = nameUserSlice.actions

export default nameUserSlice.reducer