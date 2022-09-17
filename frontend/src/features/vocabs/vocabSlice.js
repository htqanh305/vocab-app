import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import vocabService from './vocabService'

const initialState = {
    vocabs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create new vocab
//thunkAPI object has a getState method that helps get anything we want/ any part of the state
// ie. get auth state to get token to access user so we can set/get vocabs
export const createVocab = createAsyncThunk('vocabs/create', async(vocabData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token // get token from outside of goal state (auth state)
        return await vocabService.createVocab(vocabData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
} )

// Get user vocabs
export const getVocabs = createAsyncThunk('vocabs/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token // get token from outside of goal state (auth state)
        return await vocabService.getVocabs(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Edit vocab
export const editVocab = createAsyncThunk('vocabs/edit', async({id, vocabData}, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token // get token from outside of goal state (auth state)
        return await vocabService.editVocab(id, vocabData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
} )


// Delete goal
export const deleteVocab = createAsyncThunk('goals/delete', async(id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token // get token from outside of goal state (auth state)
        console.log("test")
        return await vocabService.deleteVocab(id, token)
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
} )



export const vocabSlice = createSlice({
    name: 'vocab',
    initialState,
    reducers: {
        reset: (state) => initialState
    }, 

    extraReducers: (builder) => {
        builder
            .addCase(createVocab.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createVocab.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.vocabs.push(action.payload)
    
            })
            .addCase(createVocab.rejected, (state, action) => {
               state.isLoading = false
               state.isError = true
               state.message = action.payload
            })
            .addCase(getVocabs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getVocabs.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.vocabs = action.payload
    
            })
            .addCase(getVocabs.rejected, (state, action) => {
               state.isLoading = false
               state.isError = true
               state.message = action.payload
            })
            .addCase(editVocab.pending, (state) => {
                state.isLoading = true
                
            })
            .addCase(editVocab.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.vocabs.concat(action.payload)
    
            })
            .addCase(editVocab.rejected, (state, action) => {
               state.isLoading = false
               state.isError = true
               //console.log(action.payload._id)
               state.message = action.payload
            })
            .addCase(deleteVocab.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteVocab.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                // filter out the UI when delete a goal, only show goals that are not deleted
                // another way: add getgoals at onclick
                //state.vocabs = state.goals.filter(
                //   vocab => vocab._id !== action.payload.id)
                   
             })
            .addCase(deleteVocab.rejected, (state, action) => {
               state.isLoading = false
               state.isError = true
               state.message = action.payload
            })
    }
})

export const {reset} = vocabSlice.actions
export default vocabSlice.reducer