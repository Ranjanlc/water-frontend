import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../Helper/Helper";

export const addCustomerSecurity = createAsyncThunk("customer/addCustomerSecurity",
                                            // foldername/FunctionName
    async ({ payload, callback }, { dispatch }) => {
        try {
            dispatch(createCustomerSecurityRequest())
            const response = await axios.post(`${API_URL}/custumersecurity`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(createCustomerSecuritySuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createCustomerSecurityFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createCustomerSecurityFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getAllCustomerSecurity = createAsyncThunk("customer/addCustomerSecurity",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getCustomerSecurityRequest())
            const response = await axios.get(`${API_URL}/custumersecurity`)
            if (response.status === 200) {
                dispatch(getCustomerSecuritySuccess(response.data));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getCustomerSecurityFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getCustomerSecurityFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })    

export const getSingalCustomerSecurity = createAsyncThunk("customer/getCustomerSecurity",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createCustomerSecurityRequest())
            const response = await axios.get(`${API_URL}/custumersecurity/${id}`)
            if (response.status === 200) {
                dispatch(createCustomerSecuritySuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createCustomerSecurityFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createCustomerSecurityFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })
    
export const updateCustomerSecurity = createAsyncThunk("customer/updateCustomerSecurity",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateCustomerSecurityRequest())
            const response = await axios.put(`${API_URL}/custumersecurity/${id}`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(updateCustomerSecuritySuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateCustomerSecurityFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateCustomerSecurityFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const deleteCustomerSecurity = createAsyncThunk("customer/deleteCustomerSecurity",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteCustomerSecurityRequest())
            const response = await axios.delete(`${API_URL}/custumersecurity/${id}`);
            if (response.status === 200) {
                console.log(response)
                dispatch(deleteCustomerSecuritySuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteCustomerSecurityFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deleteCustomerSecurityFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })


    const initialState = {
        loading: false,
        customerSecurityData: null,
        allcustomerSecurityData: null,
        updatedcustomerSecurityData: null,
        error: null,
    }


    const CustomerSecurityAmountSlice = createSlice ({
        name :"CustomerSecurityAmount",
        initialState,
        reducers:{
            createCustomerSecurityRequest: (state) => {
                state.loading = true;
            },
            createCustomerSecuritySuccess: (state, action) => {
                state.loading = false;
                state.customerSecurityData = action.payload;
                state.error = null;
            },
            createCustomerSecurityFail: (state, action) => {
                state.loading = false;
                state.error = action.payload;
            },
            getCustomerSecurityRequest: (state) => {
                state.loading = true;
            },
            getCustomerSecuritySuccess: (state, action) => {
                state.loading = false;
                state.allcustomerSecurityData = action.payload;
                state.error = null;
            },
            getCustomerSecurityFail: (state, action) => {
                state.loading = false;
                state.allcustomerSecurityData = null;
                state.error = action.payload;
            },
            updateCustomerSecurityRequest: (state, action) => {
                state.loading = true;
            },
            updateCustomerSecuritySuccess: (state, action) => {
                state.loading = false;
                state.customerSecurityData = action.payload;
                state.error = null;
            },
            updateCustomerSecurityFail: (state, action) => {
                state.loading = false;
                state.customerSecurityData = action.payload;
                state.error = null;
            },
            deleteCustomerSecurityRequest: (state, action) => {
                state.loading = true;
            },
            deleteCustomerSecuritySuccess: (state, action) => {
                state.loading = false;
                state.customerSecurityData = action.payload;
                state.error = null;
            },
            deleteCustomerSecurityFail: (state, action) => {
                state.loading = false;
                state.customerSecurityData = action.payload;
                state.error = null;
            }
        }
    })


    export const {
        createCustomerSecurityRequest, createCustomerSecuritySuccess, createCustomerSecurityFail, getCustomerSecurityRequest, getCustomerSecuritySuccess, getCustomerSecurityFail, updateCustomerSecurityRequest, updateCustomerSecuritySuccess, updateCustomerSecurityFail, deleteCustomerSecurityRequest, deleteCustomerSecuritySuccess, deleteCustomerSecurityFail
    } = CustomerSecurityAmountSlice.actions;
    
    export default CustomerSecurityAmountSlice.reducer

