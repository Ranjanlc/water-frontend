import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../Helper/Helper";

export const addPurchaseOrderVendor = createAsyncThunk("vendor/addPurchaseOrderVendor",
    async ({ payload, callback }, { dispatch }) => {
        try {
           
            dispatch(createPurchaseOrderVendorRequest());
            // console.log("yesdgodig");
            const response = await axios.post(`${API_URL}/vendorpurchaseorder`, payload);
            if (response.status === 200) {
                dispatch(createPurchaseOrderVendorSuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createPurchaseOrderVendorFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createPurchaseOrderVendorFail(error.response.data.message));
            callback(error.response.data.message)
        }
        console.log(response);
    })


export const getAllPurchaseOrderVendor= createAsyncThunk("vendor/getAllPurchaseOrderVendor",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getPurchaseOrderVendorRequest())
            const response = await axios.get(`${API_URL}/vendorpurchaseorder`)
            if (response.status === 200) {
                dispatch(getPurchaseOrderVendorSuccess(response.data));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getPurchaseOrderVendorFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getPurchaseOrderVendorFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getSinglePurchaseOrderVendor = createAsyncThunk("vendor/getSinglePurchaseOrderVendor",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createPurchaseOrderVendorRequest())
            const response = await axios.get(`${API_URL}/vendorpurchaseorder/${id}`)
            if (response.status === 200) {
                dispatch(createPurchaseOrderVendortSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createPurchaseOrderVendorFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createPurchaseOrderVendorFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const updatePurchaseOrderVendor= createAsyncThunk("branch/updatePurchaseOrderVendor",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updatePurchaseOrderVendorRequest())
            const response = await axios.put(`${API_URL}/vendorpurchaseorder/${id}`, payload);
            console.log(response );
            if (response.status === 200) {
             
                dispatch(updatePurchaseOrderVendorSuccess(response.data.updatedata));
                callback("Updated Successfully!!")
            } else {
                dispatch(updatePurchaseOrderVendorFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updatePurchaseOrderVendorFail(error.response.data.message));
            callback(error.response.data.message)
        }
        console.log(response)
    })

export const deletePurchaseOrderVendor = createAsyncThunk("vendor/deletePurchaseOrderVendor",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deletePurchaseOrderVendorRequest())
            const response = await axios.delete(`${API_URL}/vendorpurchaseorder/${id}`);
            if (response.status === 200) {
                console.log(response)
                dispatch(deletePurchaseOrderVendorSuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deletePurchaseOrderVendorFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deletePurchaseOrderVendorFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

const initialState = {
    loading: false,
    PurchaseOrderVendorData: null,
    allPurchaseOrderVendorData: null,
    updatedData: null,
    error: null,
}

export const PurchaseOrderVendorSlice = createSlice({
    name: "purchaseOrder",
    initialState,
    reducers: {
        createPurchaseOrderVendorRequest: (state) => {
            state.loading = true;
        },
        createPurchaseOrderVendorSuccess: (state, action) => {
            state.loading = false;
            state.PurchaseOrderVendorData = action.payload;
            state.error = null;
        },
        createPurchaseOrderVendorFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getPurchaseOrderVendorRequest: (state) => {
            state.loading = true;
        },
        getPurchaseOrderVendorSuccess: (state, action) => {
            state.loading = false;
            state.allPurchaseOrderVendorData = action.payload;
            state.error = null;
        },
        getPurchaseOrderVendorFail: (state, action) => {
            state.loading = false;
            state.allPurchaseOrderVendorData = null;
            state.error = action.payload;
        },
        updatePurchaseOrderVendorRequest: (state) => {
            state.loading = true;
        },
        updatePurchaseOrderVendorSuccess: (state, action) => {
            state.loading = false;
            state.PurchaseOrderVendorData = action.payload;
            state.error = null;
        },
        updatePurchaseOrderVendorFail: (state, action) => {
            state.loading = false;
            state.PurchaseOrderVendorData = action.payload;
            state.error = null;
        },
        deletePurchaseOrderVendorRequest: (state) => {
            state.loading = true;
        },
        deletePurchaseOrderVendorSuccess: (state, action) => {
            state.loading = false;
            state.PurchaseOrderVendorData = action.payload;
            state.error = null;
        },
        deletePurchaseOrderVendorFail: (state, action) => {
            state.loading = false;
            state.PurchaseOrderVendorData = action.payload;
            state.error = null;
        }
    }
});

export const {
    createPurchaseOrderVendorRequest, createPurchaseOrderVendorSuccess, createPurchaseOrderVendorFail,
    getPurchaseOrderVendorRequest, getPurchaseOrderVendorSuccess, getPurchaseOrderVendorFail,
    updatePurchaseOrderVendorRequest, updatePurchaseOrderVendorSuccess, updatePurchaseOrderVendorFail,
    deletePurchaseOrderVendorRequest, deletePurchaseOrderVendorSuccess, deletePurchaseOrderVendorFail

} =PurchaseOrderVendorSlice.actions;

export default PurchaseOrderVendorSlice.reducer;
