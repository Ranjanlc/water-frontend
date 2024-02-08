import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../Helper/Helper";

export const addCustomerLedger = createAsyncThunk("customer/addCustomerLedger",
    // foldername/FunctionName
    async ({ payload, callback }, { dispatch }) => {
        try {
            dispatch(createCustomerLedgerRequest())
            const response = await axios.post(`${API_URL}/customerledger`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(createCustomerLedgerSuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createCustomerLedgerFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createCustomerLedgerFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getAllCustomerLedger = createAsyncThunk("customer/addCustomerLedger",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getCustomerLedgerRequest())
            const response = await axios.get(`${API_URL}/customerledger`)
            if (response.status === 200) {
                dispatch(getCustomerLedgerSuccess(response.data));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getCustomerLedgerFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getCustomerLedgerFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getSingalCustomerLedger = createAsyncThunk("customer/getCustomerLedger",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createCustomerLedgerRequest())
            const response = await axios.get(`${API_URL}/customerledger/${id}`)
            if (response.status === 200) {
                dispatch(createCustomerLedgerSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createCustomerLedgerFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createCustomerLedgerFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const updateCustomerLedger = createAsyncThunk("customer/updateCustomerLedger",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateCustomerLedgerRequest())
            const response = await axios.put(`${API_URL}/customerledger/${id}`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(updateCustomerLedgerSuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateCustomerLedgerFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateCustomerLedgerFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const deleteCustomerLedger = createAsyncThunk("customer/deleteCustomerLedger",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteCustomerLedgerRequest())
            const response = await axios.delete(`${API_URL}/custumersecurity/${id}`);
            if (response.status === 200) {
                console.log(response)
                dispatch(deleteCustomerLedgerSuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteCustomerLedgerFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deleteCustomerLedgerFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

const initialState = {
    loading: false,
    customerLedgerData: null,
    allcustomerLedgerData: null,
    updatedcustomerLedgerData: null,
    error: null,
}


const CustomerLedgerSlice = createSlice ({
    name :"CustomerSecurityAmount",
    initialState,
    reducers:{
        createCustomerLedgerRequest: (state) => {
            state.loading = true;
        },
        createCustomerLedgerSuccess: (state, action) => {
            state.loading = false;
            state.customerLedgerData = action.payload;
            state.error = null;
        },
        createCustomerLedgerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getCustomerLedgerRequest: (state) => {
            state.loading = true;
        },
        getCustomerLedgerSuccess: (state, action) => {
            state.loading = false;
            state.allcustomerLedgerData = action.payload;
            state.error = null;
        },
        getCustomerLedgerFail: (state, action) => {
            state.loading = false;
            state.allcustomerLedgerData = null;
            state.error = action.payload;
        },
        updateCustomerLedgerRequest: (state, action) => {
            state.loading = true;
        },
        updateCustomerLedgerSuccess: (state, action) => {
            state.loading = false;
            state.customerLedgerData = action.payload;
            state.error = null;
        },
        updateCustomerLedgerFail: (state, action) => {
            state.loading = false;
            state.customerLedgerData = action.payload;
            state.error = null;
        },
        deleteCustomerLedgerRequest: (state, action) => {
            state.loading = true;
        },
        deleteCustomerLedgerSuccess: (state, action) => {
            state.loading = false;
            state.customerLedgerData = action.payload;
            state.error = null;
        },
        deleteCustomerLedgerFail: (state, action) => {
            state.loading = false;
            state.customerLedgerData = action.payload;
            state.error = null;
        }
    }
})

export const {
    createCustomerLedgerRequest, createCustomerLedgerSuccess, createCustomerLedgerFail, getCustomerLedgerRequest, getCustomerLedgerSuccess, getCustomerLedgerFail, updateCustomerLedgerRequest,
    updateCustomerLedgerSuccess, updateCustomerLedgerFail, deleteCustomerLedgerRequest, deleteCustomerLedgerSuccess, deleteCustomerLedgerFail
} = CustomerLedgerSlice.actions;


export default CustomerLedgerSlice.reducer