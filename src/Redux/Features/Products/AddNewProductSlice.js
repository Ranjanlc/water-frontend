import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../Helper/Helper";

export const addNewProduct = createAsyncThunk("branch/addBranch",
    async ({ payload, callback }, { dispatch }) => {
        try {
            dispatch(createNewProductRequest())
            const response = await axios.post(`${API_URL}/product`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(createNewProductSuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createNewProductFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createNewProductFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getAllNewProduct = createAsyncThunk("branch/allBranch",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getNewProductRequest())
            const response = await axios.get(`${API_URL}/product`)
            if (response.status === 200) {
                dispatch(getNewProductSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getNewProductFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getNewProductFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getSingleNewProduct = createAsyncThunk("branch/allBranch",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createNewProductRequest())
            const response = await axios.get(`${API_URL}/product/${id}`)
            if (response.status === 200) {
                dispatch(createNewProductSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createNewProductFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createNewProductFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const updateNewProduct = createAsyncThunk("branch/updateBranch",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateNewProductRequest())
            const response = await axios.put(`${API_URL}/product/${id}`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(updateNewProductSuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateNewProductFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateNewProductFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const deleteNewProduct = createAsyncThunk("branch/deleteBranch",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteNewProductRequest())
            const response = await axios.delete(`${API_URL}/product/${id}`);
            if (response.status === 200) {
                console.log(response)
                dispatch(deleteNewProductSuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteNewProductFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deleteNewProductFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

const initialState = {
    loading: false,
    productData: null,
    allProductData: null,
    updatedData: null,
    error: null,
}

export const AddNewProductSlice = createSlice({
    name: "addProduct",
    initialState,
    reducers: {
        createNewProductRequest: (state) => {
            state.loading = true;
        },
        createNewProductSuccess: (state, action) => {
            state.loading = false;
            state.productData = action.payload;
            state.error = null;
        },
        createNewProductFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getNewProductRequest: (state) => {
            state.loading = true;
        },
        getNewProductSuccess: (state, action) => {
            state.loading = false;
            state.allProductData = action.payload;
            state.error = null;
        },
        getNewProductFail: (state, action) => {
            state.loading = false;
            state.allProductData = null;
            state.error = action.payload;
        },
        updateNewProductRequest: (state, action) => {
            state.loading = true;
        },
        updateNewProductSuccess: (state, action) => {
            state.loading = false;
            state.productData = action.payload;
            state.error = null;
        },
        updateNewProductFail: (state, action) => {
            state.loading = false;
            state.productData = action.payload;
            state.error = null;
        },
        deleteNewProductRequest: (state, action) => {
            state.loading = true;
        },
        deleteNewProductSuccess: (state, action) => {
            state.loading = false;
            state.productData = action.payload;
            state.error = null;
        },
        deleteNewProductFail: (state, action) => {
            state.loading = false;
            state.productData = action.payload;
            state.error = null;
        }
    }
});

export const {
    createNewProductRequest, createNewProductSuccess, createNewProductFail, getNewProductRequest, getNewProductSuccess, getNewProductFail, updateNewProductSuccess, deleteNewProductSuccess, deleteNewProductRequest, deleteNewProductFail, updateNewProductRequest, updateNewProductFail
} = AddNewProductSlice.actions;

export default AddNewProductSlice.reducer;
