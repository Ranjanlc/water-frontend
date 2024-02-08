
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../Helper/Helper";

export const addNewProductType = createAsyncThunk("productType/addproductType",
    async ({ payload, callback }, { dispatch }) => {
        try {
            dispatch(createProductTypeRequest())
            const response = await axios.post(`${API_URL}/product-type`, payload);
            if (response.status === 201) {
                console.log(response)
                dispatch(createProductTypeSuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createProductTypeFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createProductTypeFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })
export const getAllProductType = createAsyncThunk("productType/allproductType",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getProductTypeRequest())
            const response = await axios.get(`${API_URL}/product-type`)
            if (response.status === 200) {
                dispatch(getProductTypeSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getProductTypeFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getProductTypeFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })
    export const getSingleProductType = createAsyncThunk("productType/getproductType",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createProductTypeRequest())
            const response = await axios.get(`${API_URL}/product-type/${id}`)
            if (response.status === 200) {
                dispatch(createProductTypeSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createProductTypeFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createProductTypeFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })
    export const updateNewProduct = createAsyncThunk("productType/updateproductType",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateProductTypeRequest())
            const response = await axios.put(`${API_URL}/product-type/${id}`, payload);
            if (response.status === 201) {
                console.log(response)
                dispatch(updateProductTypeSuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateProductTypeFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateProductTypeFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })
    export const deleteProductType = createAsyncThunk("productType/deleteproductType",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteProductTypeRequest())
            const response = await axios.delete(`${API_URL}/product-type/${id}`);
            if (response.status === 200) {
                console.log(response)
                dispatch(deleteProductTypeSuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteProductTypeFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deleteProductTypeFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

const initialState = {
    loading: false,
    productTypeData: null,
    allProductTypeData: null,
    updatedProductTypeData: null,
    error: null,
}

const AddProductTypeSlice = createSlice({
    name: "AddProductType",
    initialState,
    reducers: {
        createProductTypeRequest: (state) => {
            state.loading = true;
        },
        createProductTypeSuccess: (state, action) => {
            state.loading = false;
            state.productTypeData = action.payload;
            state.error = null;
        },
        createProductTypeFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getProductTypeRequest: (state) => {
            state.loading = true;
        },
        getProductTypeSuccess: (state, action) => {
            state.loading = false;
            state.allProductTypeData = action.payload;
            state.error = null;
        },
        getProductTypeFail: (state, action) => {
            state.loading = false;
            state.allProductTypeData = null;
            state.error = action.payload;
        },
        updateProductTypeRequest: (state, action) => {
            state.loading = true;
        },
        updateProductTypeSuccess: (state, action) => {
            state.loading = false;
            state.productTypeData = action.payload;
            state.error = null;
        },
        updateProductTypeFail: (state, action) => {
            state.loading = false;
            state.productTypeData = action.payload;
            state.error = null;
        },
        deleteProductTypeRequest: (state, action) => {
            state.loading = true;
        },
        deleteProductTypeSuccess: (state, action) => {
            state.loading = false;
            state.productTypeData = action.payload;
            state.error = null;
        },
        deleteProductTypeFail: (state, action) => {
            state.loading = false;
            state.productTypeData = action.payload;
            state.error = null;
        }

    }

})
export const {
    createProductTypeRequest, createProductTypeSuccess, createProductTypeFail, getProductTypeRequest, getProductTypeSuccess,
    getProductTypeFail , updateProductTypeRequest ,updateProductTypeSuccess, updateProductTypeFail, deleteProductTypeRequest,
    deleteProductTypeSuccess,deleteProductTypeFail
} = AddProductTypeSlice.actions


export default AddProductTypeSlice.reducer