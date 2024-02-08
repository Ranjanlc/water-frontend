import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../Helper/Helper";


export const addNewCustomerPayment = createAsyncThunk("customer/addNewCustomerPayment",
    async ({ payload, callback }, { dispatch }) => {
        try {
            dispatch(createNewCustomerPaymentRequest())
            const response = await axios.post(`${API_URL}/custumerpayment`, payload);
            if (response.status === 200) {
                dispatch(createNewCustomerPaymentSuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createNewCustomerPaymentFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createNewCustomerPaymentFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getAllCustomerPayment = createAsyncThunk("customer/getAllCustomerPayment",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getNewCustomerPaymentRequest())
            const response = await axios.get(`${API_URL}/custumerpayment`)
            if (response.status === 200) {
                dispatch(getNewCustomerPaymentSuccess(response.data));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getNewCustomerPaymentFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getNewCustomerPaymentFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getSingleCustomerPayment = createAsyncThunk("customer/getSingleCustomerPayment",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createNewCustomerPaymentRequest())
            const response = await axios.get(`${API_URL}/custumerpayment/${id}`)
            if (response.status === 200) {
                dispatch(createNewCustomerPaymentSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createNewCustomerPaymentFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createNewCustomerPaymentFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })


export const updateNewCustomerPayment = createAsyncThunk("customer/updateNewCustomerPayment",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateNewCustomerPaymentRequest())
            const response = await axios.put(`${API_URL}/custumerpayment/${id}`, payload);
            if (response.status === 200) {
                dispatch(updateNewCustomerPaymentSuccess(response.data.updatedata));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateNewCustomerPayment(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateNewCustomerPaymentFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const deleteNewCustomerPayment = createAsyncThunk("customer/deleteNewCustomerPayment",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteNewCustomerPaymentRequest())
            const response = await axios.delete(`${API_URL}/custumerpayment/${id}`);
            if (response.status === 200) {
                dispatch(deleteNewCustomerPaymentSuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteNewCustomerPaymentFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deleteNewCustomerPaymentFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

const initialState = {
    loading: false,
    customerPaymentData: null,
    allCustomerPaymentData: null,
    updateCustomerPaymentData: null,
    error: null,

}

const AddCustomerPaymentSlice = createSlice({
    name: "addCustomerPayment",
    initialState,
    reducers:
    {
        createNewCustomerPaymentRequest: (state) => {
            state.loading = true;
        },
        createNewCustomerPaymentSuccess: (state, action) => {
            state.loading = false;
            state.customerPaymentData = action.payload;
            state.error = null;
        },
        createNewCustomerPaymentFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getNewCustomerPaymentRequest: (state) => {
            state.loading = true;
        },
        getNewCustomerPaymentSuccess: (state, action) => {
            state.loading = false;
            state.allCustomerPaymentData = action.payload;
            state.error = null;
        },
        getNewCustomerPaymentFail: (state, action) => {
            state.loading = false;
            state.allCustomerPaymentData = null;
            state.error = action.payload;
        },

        updateNewCustomerPaymentRequest: (state, action) => {
            state.loading = true;
        },
        updateNewCustomerPaymentSuccess: (state, action) => {
            state.loading = false;
            state.customerPaymentData = action.payload;
            state.error = null;
        },
        updateNewCustomerPaymentFail: (state, action) => {
            state.loading = false;
            state.customerPaymentData = action.payload;
            state.error = null;
        },

        deleteNewCustomerPaymentRequest: (state, action) => {
            state.loading = true;
        },
        deleteNewCustomerPaymentSuccess: (state, action) => {
            state.loading = false;
            state.customerPaymentData = action.payload;
            state.error = null;
        },
        deleteNewCustomerPaymentFail: (state, action) => {
            state.loading = false;
            state.customerPaymentData = action.payload;
            state.error = null;
        }
    }
})

export const
    {
        createNewCustomerPaymentRequest, createNewCustomerPaymentSuccess,
        createNewCustomerPaymentFail, getNewCustomerPaymentRequest, getNewCustomerPaymentSuccess,
        getNewCustomerPaymentFail, updateNewCustomerPaymentRequest, updateNewCustomerPaymentSuccess,
        updateNewCustomerPaymentFail,
        deleteNewCustomerPaymentRequest, deleteNewCustomerPaymentSuccess,
        deleteNewCustomerPaymentFail
    } = AddCustomerPaymentSlice.actions;

export default AddCustomerPaymentSlice.reducer;

