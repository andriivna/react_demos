import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carServices} from "../../services";

const initialState ={
    cars: [],
    currentCar:null,
    loading:false,
    error:null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await carServices.getAll();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCurrentCar: (state, action) => {
            state.currentCar = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
});
const {reducer: carReducer, actions: {setCurrentCar}} = carSlice;

const carActions ={
    getAll,
    setCurrentCar
}

export {
    carReducer,
    carActions
}