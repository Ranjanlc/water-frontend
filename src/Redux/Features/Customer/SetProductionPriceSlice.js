import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../Helper/Helper";

export const addProductPrice = createAsyncThunk("ProductPrice/addProductPrice",
    async ({ payload, callback }, { dispatch }) => {
        try {
            dispatch(createProductPriceRequest())
            const response = await axios.post(`${API_URL}/productprice`, payload);
            
            if (response.status === 200) {
           
                dispatch(createProductPriceSuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createProductPriceFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createProductPriceFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getAllProductPrice = createAsyncThunk("ProductPrice/getallProductPrice",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getProductPriceRequest())
            const response = await axios.get(`${API_URL}/productprice`)
            
             if (response.status === 200) {
                dispatch(getProductPriceSuccess(response.data));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getProductPriceFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getProductPriceFail(error.response.data.message));
            callback(error.response.data.message)
        }
        console.log(response);
    })

    export const getSingleProductPrice = createAsyncThunk("ProductPrice/allProductPrice",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createProductPriceRequest())
            const response = await axios.get(`${API_URL}/productprice/${id}`)
            if (response.status === 200) {
                dispatch(createProductPriceSuccess(response.data));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createProductPriceFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createProductPriceFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })
    export const updateProductPrice = createAsyncThunk("ProductPrice/updateProductPrice",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateProductPriceRequest())
            const response = await axios.put(`${API_URL}/productprice/${id}`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(updateProductPriceSuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateProductPriceFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateProductPriceFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const deleteProductPrice = createAsyncThunk("ProductPrice/deleteProductPrice",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteProductionPriceRequest())
            const response = await axios.delete(`${API_URL}/productprice/${id}`);
            console.log(response)
            if (response.status === 200) {
              
                dispatch(deleteProductionPriceSuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteProductionPriceFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deleteProductionPriceFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })


const initialState = {
    loading: false,
    ProductPriceData: null,
    allProductPriceData: null,
    updatedProductPriceData: null,
    error: null,
}


const SetProductionPriceSlice = createSlice({
    name: "customerSecurity",
    initialState,
    reducers:{
        createProductPriceRequest: (state) => {
            state.loading = true;
        },
        createProductPriceSuccess: (state, action) => {
            state.loading = false;
            state.ProductPriceData = action.payload;
            state.error = null;
        },
        createProductPriceFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getProductPriceRequest: (state) => {
            state.loading = true;
        },
        getProductPriceSuccess: (state, action) => {
            state.loading = false;
            state.allProductPriceData = action.payload;
            state.error = null;
        },
        getProductPricFail: (state, action) => {
            state.loading = false;
            state.allProductPriceData = null;
            state.error = action.payload;
        },
        updateProductPriceRequest: (state, action) => {
            state.loading = true;
        },
        updateProductPriceSuccess: (state, action) => {
            state.loading = false;
            state.ProductPriceData = action.payload;
            state.error = null;
        },
        updateProductPriceFail: (state, action) => {
            state.loading = false;
            state.ProductPriceData = action.payload;
            state.error = null;
        },
        deleteProductionPriceRequest: (state, action) => {
            state.loading = true;
        },
        deleteProductionPriceSuccess: (state, action) => {
            state.loading = false;
            state.ProductPriceData= action.payload;
            state.error = null;
        },
        deleteProductionPriceFail: (state, action) => {
            state.loading = false;
            state.ProductPriceData = action.payload;
            state.error = null;
        }

    }
})
export const {
    createProductPriceRequest,createProductPriceSuccess,createProductPriceFail,getProductPriceRequest,
    getProductPriceSuccess, getProductPriceFail, updateProductPriceRequest, updateProductPriceSuccess,
    updateProductPriceFail,deleteProductionPriceRequest,deleteProductionPriceSuccess,deleteProductionPriceFail
} = SetProductionPriceSlice.actions;


export default SetProductionPriceSlice.reducer