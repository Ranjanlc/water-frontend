import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../Helper/Helper";

export const addNewCustomer = createAsyncThunk("customer/addNewCustomer",
    async ({ payload, callback }, { dispatch }) => {
        try {
            dispatch(createNewCustomerRequest())
            const response = await axios.post(`${API_URL}/new-customer`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(createNewCustomerSuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createNewCustomerFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createNewCustomerFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getAllNewCustomer = createAsyncThunk("customer/getAllNewCustomer",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getAllNewCustomerRequest())
            const response = await axios.get(`${API_URL}/new-customer`)
            if (response.status === 200) {
                dispatch(getAllNewCustomerSuccess(response.data));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getAllNewCustomerFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getAllNewCustomerFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const updateNewCustomer = createAsyncThunk("customer/updateNewCustomer",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateNewCustomerRequest())
            const response = await axios.put(`${API_URL}/new-customer/${id}`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(updateNewCustomerSuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateNewCustomerFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateNewCustomerFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const deleteNewCustomer = createAsyncThunk("customer/deleteNewCustomer",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteNewCustomerRequest())
            const response = await axios.delete(`${API_URL}/new-customer/${id}`);
            if (response.status === 200) {
                console.log(response)
                dispatch(deleteNewCustomerSuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteNewCustomerFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deleteNewCustomerFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

const initialState = {
    loading: false,
    newCustomerData: null,
    allNewCustomerData: null,
    updatedNewCustomerData: null,
    error: null,
}

const AddNewCustomerSlice = createSlice({
    name: "AddNewCustomer",
    initialState,
    reducers: {
        createNewCustomerRequest: (state) => {
            state.loading = true;
        },
        createNewCustomerSuccess: (state, action) => {
            state.loading = false;
            state.newCustomerData = action.payload;
            state.error = null;
        },
        createNewCustomerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getAllNewCustomerRequest: (state) => {
            state.loading = true;
        },
        getAllNewCustomerSuccess: (state, action) => {
            state.loading = false;
            state.allNewCustomerData = action.payload;
            state.error = null;
        },
        getAllNewCustomerFail: (state, action) => {
            state.loading = false;
            state.allNewCustomerData = null;
            state.error = action.payload;
        },
        updateNewCustomerRequest: (state) => {
            state.loading = true;
        },
        updateNewCustomerSuccess: (state, action) => {
            state.loading = false;
            state.customerLedgerData = action.payload;
            state.error = null;
        },
        updateNewCustomerFail: (state, action) => {
            state.loading = false;
            state.customerLedgerData = action.payload;
            state.error = null;
        },
        deleteNewCustomerRequest: (state) => {
            state.loading = true;
        },
        deleteNewCustomerSuccess: (state, action) => {
            state.loading = false;
            state.updatedNewCustomerData = action.payload;
            state.error = null;
        },
        deleteNewCustomerFail: (state, action) => {
            state.loading = false;
            state.customerLedgerData = null;
            state.error = action.payload;
        }
    }
})

export const {
    createNewCustomerRequest, createNewCustomerSuccess, createNewCustomerFail,
    getAllNewCustomerRequest, getAllNewCustomerSuccess, getAllNewCustomerFail,
    updateNewCustomerRequest, updateNewCustomerSuccess, updateNewCustomerFail,
    deleteNewCustomerRequest, deleteNewCustomerSuccess, deleteNewCustomerFail
} = AddNewCustomerSlice.actions;

export default AddNewCustomerSlice.reducer