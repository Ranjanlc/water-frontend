import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../Helper/Helper";


export const addStockInOut = createAsyncThunk("product/addStockInOut",
                                            // foldername/FunctionName
    async ({ payload, callback }, { dispatch }) => {
        try {
            dispatch(createStockInOutRequest())
            const response = await axios.post(`${API_URL}/stockinout`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(createStockInOutSuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createStockInOutFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createStockInOutFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getAllStockInOut = createAsyncThunk("product/getAllStockInOut",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getStockInOutRequest())
            const response = await axios.get(`${API_URL}/stockinout`)
            if (response.status === 200) {
                dispatch(getStockInOutSuccess(response.data));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getStockInOutFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getStockInOutFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })    

export const getSingleStockInOut = createAsyncThunk("product/getSingleStockInOut",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createStockInOutRequest())
            const response = await axios.get(`${API_URL}/stockinout/${id}`)
            if (response.status === 200) {
                dispatch(createStockInOutSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createStockInOutFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createStockInOutFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const updateStockInOut = createAsyncThunk("product/updateStockInOut",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateStockInOutRequest())
            const response = await axios.put(`${API_URL}/stockinout/${id}`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(updateStockInOutSuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateStockInOutFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateStockInOutFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const deleteStockInOut = createAsyncThunk("product/deleteStockInOut",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteStockInOutRequest())
            const response = await axios.delete(`${API_URL}/stockinout/${id}`);
            if (response.status === 200) {
                console.log(response)
                dispatch(deleteStockInOutSuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteStockInOutFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deleteStockInOutFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })


const initialState = {
    loading: false,
    stockInOutData: null,
    allStockInOutData: null,
    updatedStockInOutData: null,
    error: null,
}

const StockInOutSlice =  createSlice({
    name :"StockInOut",
    initialState,
    reducers:{
        createStockInOutRequest: (state) => {
            state.loading = true;
        },
        createStockInOutSuccess: (state, action) => {
            state.loading = false;
            state.stockInOutData = action.payload;
            state.error = null;
        },
        createStockInOutFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getStockInOutRequest: (state) => {
            state.loading = true;
        },
        getStockInOutSuccess: (state, action) => {
            state.loading = false;
            state.allStockInOutData = action.payload;
            state.error = null;
        },
        getStockInOutFail: (state, action) => {
            state.loading = false;
            state.allStockInOutData = null;
            state.error = action.payload;
        },
        updateStockInOutRequest: (state, action) => {
            state.loading = true;
        },
        updateStockInOutSuccess: (state, action) => {
            state.loading = false;
            state.stockInOutData = action.payload;
            state.error = null;
        },
        updateStockInOutFail: (state, action) => {
            state.loading = false;
            state.stockInOutData = action.payload;
            state.error = null;
        },
        deleteStockInOutRequest: (state, action) => {
            state.loading = true;
        },
        deleteStockInOutSuccess: (state, action) => {
            state.loading = false;
            state.stockInOutData = action.payload;
            state.error = null;
        },
        deleteStockInOutFail: (state, action) => {
            state.loading = false;
            state.stockInOutData = action.payload;
            state.error = null;
        }

    }
});

export const {
    createStockInOutRequest, createStockInOutSuccess, createStockInOutFail, getStockInOutRequest, getStockInOutSuccess, getStockInOutFail, updateStockInOutRequest, updateStockInOutSuccess, updateStockInOutFail, deleteStockInOutRequest, deleteStockInOutSuccess, deleteStockInOutFail
} = StockInOutSlice.actions;

export default StockInOutSlice.reducer