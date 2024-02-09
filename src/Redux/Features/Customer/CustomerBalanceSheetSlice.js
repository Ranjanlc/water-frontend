import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../Helper/Helper";

export const addBalanceSheet = createAsyncThunk("customer/addBalanceSheet",
    async ({ payload, callback }, { dispatch }) => {
        try {
            dispatch(createBalanceSheetRequest())
            const response = await axios.post(`${API_URL}/customer-balance-sheet`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(createBalanceSheetSuccess(response.data.newData));
                callback("Created Successfully!!")
            } else {
                dispatch(createBalanceSheetFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createBalanceSheetFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getAllBalanceSheet = createAsyncThunk("customer/getAllBalanceSheet",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getAllBalanceSheetRequest())
            const response = await axios.get(`${API_URL}/customer-balance-sheet`)
            if (response.status === 200) {
                dispatch(getAllBalanceSheetSuccess(response.data.data));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getAllBalanceSheetFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getAllBalanceSheetFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const updateBalanceSheet = createAsyncThunk("customer/updateBalanceSheet",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateBalanceSheetRequest())
            const response = await axios.put(`${API_URL}/customer-balance-sheet/${id}`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(updateBalanceSheetSuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateBalanceSheetFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateBalanceSheetFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const deleteBalanceSheet = createAsyncThunk("customer/deleteBalanceSheet",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteBalanceSheetRequest())
            const response = await axios.delete(`${API_URL}/customer-balance-sheet/${id}`);
            if (response.status === 200) {
                console.log(response)
                dispatch(deleteBalanceSheetSuccess(response.data.deleteData));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteBalanceSheetFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deleteBalanceSheetFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

const initialState = {
    loading: false,
    newBalanceSheetData: null,
    allBalanceSheetData: null,
    updatedBalanceSheetData: null,
    error: null,
}

const CustomerBalanceSheetSlice = createSlice({
    name: "addBalanceSheet",
    initialState,
    reducers: {
        createBalanceSheetRequest: (state) => {
            state.loading = true;
        },
        createBalanceSheetSuccess: (state, action) => {
            state.loading = false;
            state.newBalanceSheetData = action.payload;
            state.error = null;
        },
        createBalanceSheetFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getAllBalanceSheetRequest: (state) => {
            state.loading = true;
        },
        getAllBalanceSheetSuccess: (state, action) => {
            state.loading = false;
            state.allBalanceSheetData = action.payload;
            state.error = null;
        },
        getAllBalanceSheetFail: (state, action) => {
            state.loading = false;
            state.allBalanceSheetData = null;
            state.error = action.payload;
        },
        updateBalanceSheetRequest: (state) => {
            state.loading = true;
        },
        updateBalanceSheetSuccess: (state, action) => {
            state.loading = false;
            state.updatedBalanceSheetData = action.payload;
            state.error = null;
        },
        updateBalanceSheetFail: (state, action) => {
            state.loading = false;
            state.updatedBalanceSheetData = null;
            state.error = action.payload;
        },
        deleteBalanceSheetRequest: (state) => {
            state.loading = true;
        },
        deleteBalanceSheetSuccess: (state, action) => {
            state.loading = false;
            state.updatedBalanceSheetData = action.payload;
            state.error = null;
        },
        deleteBalanceSheetFail: (state, action) => {
            state.loading = false;
            state.updatedBalanceSheetData = null;
            state.error = action.payload;
        }
    }
})

export const {
    createBalanceSheetRequest, createBalanceSheetSuccess, createBalanceSheetFail,
    getAllBalanceSheetRequest, getAllBalanceSheetSuccess, getAllBalanceSheetFail,
    updateBalanceSheetRequest, updateBalanceSheetSuccess, updateBalanceSheetFail,
    deleteBalanceSheetRequest, deleteBalanceSheetSuccess, deleteBalanceSheetFail
} = CustomerBalanceSheetSlice.actions;

export default CustomerBalanceSheetSlice.reducer