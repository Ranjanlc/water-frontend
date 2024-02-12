import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../Helper/Helper";

export const addVendorMy = createAsyncThunk("vendor/addVendorMy",
    async ({ payload, callback }, { dispatch }) => {
        
        try {
            dispatch(createVendorMyRequest())
            const response = await axios.post(`${API_URL}/vendor`, payload);
            if (response.status === 200) {
                dispatch(createVendorMySuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createVendorMyFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createVendorMyFail(error.response.data.message));
            callback(error.response.data.message)
        }
       
     
    })
  

    export const getAllVendorMy = createAsyncThunk("vendor/getAllVendorMy",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getVendorMyRequest())
            const response = await axios.get(`${API_URL}/vendor`)
            if (response.status === 200) {
                debugger;
                dispatch(getVendorMySuccess(response.data))
                callback("Fetched Successfully!!")
               
            } else {
                dispatch(getVendorMyFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getVendorMyFail(error.response.data.message));
            callback(error.response.data.message)
        }
        console.log(response);
    })

export const getSingleVendorMy  = createAsyncThunk("vendor/getSingleVendorMy",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createVendorMyRequest())
            const response = await axios.get(`${API_URL}/vendor/${id}`)
            if (response.status === 200) {
                dispatch(createVendorMySuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createVendorMyFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createaVendorMyFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const updateVendorMy = createAsyncThunk("vendor/updateVendorMy",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateVendorMyRequest())
            const response = await axios.put(`${API_URL}/vendor/${id}`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(updateVendorMySuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateVendorMyFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateVendorMyFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const deleteVendorMy = createAsyncThunk("vendor/deleteVendorMy",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteVendorMyRequest())
            const response = await axios.delete(`${API_URL}/vendor/${id}`);
            if (response.status === 200) {
                console.log(response)
                dispatch(deleteVendorMySuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteVendorMyFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {

            dispatch(deleteVendorMyFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

const initialState = {
    loading: false,
    VendorMyData: null,
    allVendorMyData: null,
    updatedData: null,
    error: null,
}

export const VendorSlice = createSlice({
    name: "addVendor",
    initialState,
    reducers: {
        createVendorMyRequest: (state) => {
            state.loading = true;
        },
        createVendorMySuccess: (state, action) => {
            state.loading = false;
            state.VendorMyData = action.payload;
            state.error = null;
        },
        createVendorMyFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getVendorMyRequest: (state) => {
            state.loading = true;
        },
        getVendorMySuccess: (state, action) => {
        console.log("this is message11",action.payload);
            state.loading = false;
            state.allVendorMyData = action.payload;
            state.error = null;
            console.log("this is message1",state.allVendorMyData);
        },
        getVendorMyFail: (state, action) => {
            state.loading = false;
            state.allVendorMyData = null;
            state.error = action.payload;
        },
        updateVendorMyRequest: (state, action) => {
            state.loading = true;
        },
        updateVendorMySuccess: (state, action) => {
            state.loading = false;
            state.VendorMyData = action.payload;
            state.error = null;
        },
        updateVendorMyFail: (state, action) => {
            state.loading = false;
            state.VendorMyData = action.payload;
            state.error = null;
        },
        deleteVendorMyRequest: (state, action) => {
            state.loading = true;
        },
        deleteVendorMySuccess: (state, action) => {
            state.loading = false;
            state.VendorMyData = action.payload;
            state.error = null;
        },
        deleteVendorMyFail: (state, action) => {
            state.loading = false;
            state.VendorMyData = action.payload;
            state.error = null;
        }
    }
});

export const {
    createVendorMyRequest, createVendorMySuccess, createVendorMyFail,
    getVendorMyRequest, getVendorMySuccess, getVendorMyFail,
     updateVendorMyRequest,updateVendorMySuccess,updateVendorMyFail,
     deleteVendorMyRequest, deleteVendorMySuccess, deleteVendorMyFail
      
} = VendorSlice.actions;

export default VendorSlice.reducer;
