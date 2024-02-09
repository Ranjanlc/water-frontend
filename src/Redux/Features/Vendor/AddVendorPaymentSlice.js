import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../Helper/Helper";

export const addPTVendorPayment = createAsyncThunk("vendor/addVendorPayment",
    async ({ payload, callback }, { dispatch }) => {
        try {
            dispatch(createVendorPaymentRequest())
            const response = await axios.post(`${API_URL}/vendorpayment`, payload);
            if (response.status === 200) {
                dispatch(createVendorPaymentSuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createVendorPaymentFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createVendorPaymentFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })


export const getAllVendorPayment = createAsyncThunk("vendor/getAllVendorPayment",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getMyVendorPaymentRequest())
            const response = await axios.get(`${API_URL}/vendorpayment`)
            if (response.status === 200) {
                dispatch(getMyVendorPaymentSuccess(response.data));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getMyVendorPaymentFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getMyVendorPaymentFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getSingleVendorPayment = createAsyncThunk("vendor/getSingleVendorPayment",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createVendorPaymentRequest())
            const response = await axios.get(`${API_URL}/vendorpayment/${id}`)
            if (response.status === 200) {
                dispatch(createVendorPaymentSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createVendorPaymentFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createVendorPaymentFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const updateVendorPayment = createAsyncThunk("branch/updateBranch",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateVendorPaymentRequest())
            const response = await axios.put(`${API_URL}/vendorpayment/${id}`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(updateVendorPaymentSuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateVendorPaymentFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateVendorPaymentFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const deleteVendorPayment = createAsyncThunk("vendor/deleteVendorPayment",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteVendorPaymentRequest())
            const response = await axios.delete(`${API_URL}/vendorpayment/${id}`);
            if (response.status === 200) {
                console.log(response)
                dispatch(deleteVendorPaymentSuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteVendorPaymentFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deleteVendorPaymentFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

const initialState = {
    loading: false,
    VendorPaymentData: null,
    allVendorPaymentData: null,
    updatedData: null,
    error: null,
}

export const AddVendorPaymentSlice = createSlice({
    name: "addProduct",
    initialState,
    reducers: {
        createVendorPaymentRequest: (state) => {
            state.loading = true;
        },
        createVendorPaymentSuccess: (state, action) => {
            state.loading = false;
            state.VendorPaymentData = action.payload;
            state.error = null;
        },
        createVendorPaymentFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getMyVendorPaymentRequest: (state) => {
            state.loading = true;
        },
        getMyVendorPaymentSuccess: (state, action) => {
            state.loading = false;
            state.allVendorPaymentData = action.payload;
            state.error = null;
        },
        getMyVendorPaymentFail: (state, action) => {
            state.loading = false;
            state.allVendorPaymentData = null;
            state.error = action.payload;
        },
        updateVendorPaymentRequest: (state) => {
            state.loading = true;
        },
        updateVendorPaymentSuccess: (state, action) => {
            state.loading = false;
            state.VendorPaymentData = action.payload;
            state.error = null;
        },
        updateVendorPaymentFail: (state, action) => {
            state.loading = false;
            state.VendorPaymentData = action.payload;
            state.error = null;
        },
        deleteVendorPaymentRequest: (state) => {
            state.loading = true;
        },
        deleteVendorPaymentSuccess: (state, action) => {
            state.loading = false;
            state.VendorPaymentData = action.payload;
            state.error = null;
        },
        deleteVendorPaymentFail: (state, action) => {
            state.loading = false;
            state.VendorPaymentData = action.payload;
            state.error = null;
        }
    }
});

export const {
    createVendorPaymentRequest, createVendorPaymentSuccess, createVendorPaymentFail,
    getMyVendorPaymentRequest, getMyVendorPaymentSuccess, getMyVendorPaymentFail,
    updateVendorPaymentRequest, updateVendorPaymentSuccess, updateVendorPaymentFail,
    deleteVendorPaymentRequest, deleteVendorPaymentSuccess, deleteVendorPaymentFail

} = AddVendorPaymentSlice.actions;

export default AddVendorPaymentSlice.reducer;
