import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../Helper/Helper";

export const addSelectProduct = createAsyncThunk("selectProduct/addSelectProduct",
    async ({ payload, callback }, { dispatch }) => {
        try {
            dispatch(createSelectProductRequest())
            const response = await axios.post(`${API_URL}/neworder`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(createSelectProductSuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createSlectProductFail(response.data.message));
                callback(response.data.message)
            }
           
        } catch (error) {
            dispatch(createSlectProductFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })
    export const getAllSelectProduct = createAsyncThunk("selectProduct/getSelectProduct",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getSelectProductRequest())
            const response = await axios.get(`${API_URL}/neworder`)
            console.log(response);
            if (response.status === 200) {
                dispatch(getSelectProductSuccess(response.data));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getSelectProductFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getSelectProductFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

    export const getSingleSelectProduct = createAsyncThunk("selectProduct/allselectProduct",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createSelectProductRequest())
            const response = await axios.get(`${API_URL}/neworder/${id}`)
            if (response.status === 200) {
                dispatch(createSelectProductSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createSlectProductFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createSlectProductFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

    export const updateSelectProduct = createAsyncThunk("selectProduct/updateselectProduct",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateSelectProductRequest())
            const response = await axios.put(`${API_URL}/neworder/${id}`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(updateSelectProductSuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateSelectProductFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateSelectProductFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })
    export const deleteSelectProduct = createAsyncThunk("selectProduct/deleteselectProduct",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteSelectProductRequest())
            const response = await axios.delete(`${API_URL}/neworder/${id}`);
            console.log(response)
            if (response.status === 200) {
                dispatch(deleteSelectProductSuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteSelectProductFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deleteSelectProductFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })



const initialState = {
    loading: false,
    SelectproductData: null,
    allSelectProductData: null,
    updatedSelectPoductData: null,
    error: null,
}


const SalesOrderSlice = createSlice({
    name : "SalesOrder",
    initialState,
    reducers:{
        createSelectProductRequest: (state) => {
            state.loading = true;
        },
        createSelectProductSuccess: (state, action) => {
            state.loading = false;
            state.SelectproductData= action.payload;
            state.error = null;
        },
        createSelectProductFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getSelectProductRequest: (state) => {
            state.loading = true;
        },
        getSelectProductSuccess: (state, action) => {
            state.loading = false;
            state.allSelectProductData = action.payload;
            state.error = null;
        },
        getSelectProductFail: (state, action) => {
            state.loading = false;
            state.allSelectProductData = null;
            state.error = action.payload;
        },
        updateSelectProductRequest: (state, action) => {
            state.loading = true;
        },
        updateSelectProductSuccess: (state, action) => {
            state.loading = false;
            state.SelectproductData = action.payload;
            state.error = null;
        },
        updateSelectProductFail: (state, action) => {
            state.loading = false;
            state.SelectproductData = action.payload;
            state.error = null;
        },
        deleteSelectProductRequest: (state, action) => {
            state.loading = true;
        },
        deleteSelectProductSuccess: (state, action) => {
            state.loading = false;
            state.SelectproductData = action.payload;
            state.error = null;
        },
        deleteSelectProductFail: (state, action) => {
            state.loading = false;
            state.SelectproductData = action.payload;
            state.error = null;
        }

    }
})

export const {
    createSelectProductRequest,createSelectProductSuccess, createSlectProductFail,getSelectProductRequest,
    getSelectProductSuccess, getSelectProductFail, updateSelectProductRequest, updateSelectProductSuccess,
    updateSelectProductFail, deleteSelectProductRequest, deleteSelectProductSuccess, deleteSelectProductFail

} = SalesOrderSlice.actions;

export default SalesOrderSlice.reducer