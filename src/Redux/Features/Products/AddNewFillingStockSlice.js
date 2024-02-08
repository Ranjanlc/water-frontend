import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../Helper/Helper";

export const addNewfllingStock = createAsyncThunk("product/addFllingStock",
    async ({ payload, callback }, { dispatch }) => {
        try {
            dispatch(createNewFllingStocktRequest())
            const response = await axios.post(`${API_URL}/fillingstock`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(createNewFllingStockSuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createNewFllingStockFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createNewFllingStockFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getAllFillingStock = createAsyncThunk("product/getAllFillingStock",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getNewFllingStockRequest())
            const response = await axios.get(`${API_URL}/fillingstock`)
            console.log(response)
            if (response.status === 200) {
                dispatch(getNewFllingStockSuccess(response.data));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getNewFllingStockFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getNewFllingStockFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getSingleFillingStock = createAsyncThunk("product/getSingleFllingStock",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createNewFllingStocktRequest())
            const response = await axios.get(`${API_URL}/fillingstock/${id}`)
            if (response.status === 200) {
                dispatch(createNewFllingStockSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createNewFllingStockFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createNewFllingStockFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const updateNewFllingStock = createAsyncThunk("product/updateNewFllingStock",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateNewFllingStockRequest())
            const response = await axios.put(`${API_URL}/fillingstock/${id}`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(updateNewFllingStockSuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateNewFllingStockFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateNewFllingStockFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const deleteNewFllingStock = createAsyncThunk("product/deleteFllingStock",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteNewFllingStockRequest())
            const response = await axios.delete(`${API_URL}/fillingstock/${id}`);
            if (response.status === 200) {
                console.log(response)
                dispatch(deleteNewFllingStockSuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteNewFllingStockFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deleteNewFllingStockFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })


const initialState = {
    loading: false,
    fllingStockData: null,
    allFllingStockData: null,
    updatedFllingStockData: null,
    error: null,
}

export const AddNewFillingStockSlice = createSlice({
    name: "addnewfllingstock",
    initialState,
    reducers:
    {
        createNewFllingStocktRequest: (state) => {
            state.loading = true;
        },
        createNewFllingStockSuccess: (state, action) => {
            state.loading = false;
            state.fllingStockData = action.payload;
            state.error = null;
        },
        createNewFllingStockFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getNewFllingStockRequest: (state) => {
            state.loading = true;
        },
        getNewFllingStockSuccess: (state, action) => {
            state.loading = false;
            state.allFllingStockData = action.payload;
            state.error = null;
        },
        getNewFllingStockFail: (state, action) => {
            state.loading = false;
            state.allFllingStockData = null;
            state.error = action.payload;
        },

        updateNewFllingStockRequest: (state, action) => {
            state.loading = true;
        },
        updateNewFllingStockSuccess: (state, action) => {
            state.loading = false;
            state.fllingStockData = action.payload;
            state.error = null;
        },
        updateNewFllingStockFail: (state, action) => {
            state.loading = false;
            state.fllingStockData = action.payload;
            state.error = null;
        },
        deleteNewFllingStockRequest: (state, action) => {
            state.loading = true;
        },
        deleteNewFllingStockSuccess: (state, action) => {
            state.loading = false;
            state.fllingStockData = action.payload;
            state.error = null;
        },
        deleteNewFllingStockFail: (state, action) => {
            state.loading = false;
            state.fllingStockData = action.payload;
            state.error = null;
        }

    }
})

export const {
    createNewFllingStocktRequest,
    createNewFllingStockSuccess, createNewFllingStockFail,
    getNewFllingStockRequest, getNewFllingStockSuccess, getNewFllingStockFail,
    updateNewFllingStockRequest, updateNewFllingStockSuccess, updateNewFllingStockFail,
    deleteNewFllingStockRequest, deleteNewFllingStockSuccess, deleteNewFllingStockFail
} = AddNewFillingStockSlice.actions;
export default AddNewFillingStockSlice.reducer;
