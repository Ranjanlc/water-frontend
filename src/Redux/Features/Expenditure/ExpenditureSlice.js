import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../Helper/Helper";

export const addExpenditure = createAsyncThunk("Expenditure/addVendorMy",
    async ({ payload, callback }, { dispatch }) => {

        try {
            dispatch(createExpenditureRequest())
            const response = await axios.post(`${API_URL}/expenditure`, payload);
            if (response.status === 200) {
                dispatch(createExpenditureSuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createExpenditureFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createExpenditureFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })


export const getAllExpenditure = createAsyncThunk("Expenditure/getAllVendorMy",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getExpenditureRequest())
            const response = await axios.get(`${API_URL}/expenditure`)
            console.log(response)
            if (response.status === 200) {
                dispatch(getExpenditureSuccess(response.data.finddata))
                callback("Fetched Successfully!!")
            } else {
                dispatch(getExpenditureFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getExpenditureFail(error.response.data.message));
            callback(error.response.data.message)
        }

    })

export const getSingleExpenditure = createAsyncThunk("Expenditure/getSingleVendorMy",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createExpenditureRequest())
            const response = await axios.get(`${API_URL}/expenditure/${id}`)
            if (response.status === 200) {
                dispatch(createExpenditureSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createExpenditureFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createExpenditureFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const updateExpenditure = createAsyncThunk("Expenditure/updateVendorMy",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateExpenditureRequest())
            const response = await axios.put(`${API_URL}/expenditure/${id}`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(updateExpenditureSuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateExpenditureFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateExpenditureFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const deleteExpenditure = createAsyncThunk("Expenditure/deleteVendorMy",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteExpenditureRequest())
            const response = await axios.delete(`${API_URL}/expenditure/${id}`);
            if (response.status === 200) {
                console.log(response)
                dispatch(deleteExpenditureSuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteExpenditureFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {

            dispatch(deleteExpenditureFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

const initialState = {
    loading: false,
    ExpenditureData: null,
    allExpenditureData: null,
    updatedData: null,
    error: null,
}

export const ExpenditureSlice = createSlice({
    name: "Expenditure",
    initialState,
    reducers: {
        createExpenditureRequest: (state) => {
            state.loading = true;
        },
        createExpenditureSuccess: (state, action) => {
            state.loading = false;
            state.ExpenditureData = action.payload;
            state.error = null;
        },
        createExpenditureFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getExpenditureRequest: (state) => {
            state.loading = true;
        },
        getExpenditureSuccess: (state, action) => {
            state.loading = false;
            state.allExpenditureData = action.payload;
            state.error = null;
        },
        getExpenditureFail: (state, action) => {
            state.loading = false;
            state.allExpenditureData = null;
            state.error = action.payload;
        },
        updateExpenditureRequest: (state) => {
            state.loading = true;
        },
        updateExpenditureSuccess: (state, action) => {
            state.loading = false;
            state.ExpenditureData = action.payload;
            state.error = null;
        },
        updateExpenditureFail: (state, action) => {
            state.loading = false;
            state.ExpenditureData = action.payload;
            state.error = null;
        },
        deleteExpenditureRequest: (state) => {
            state.loading = true;
        },
        deleteExpenditureSuccess: (state, action) => {
            state.loading = false;
            state.ExpenditureData = action.payload;
            state.error = null;
        },
        deleteExpenditureFail: (state, action) => {
            state.loading = false;
            state.ExpenditureData = action.payload;
            state.error = null;
        }
    }
});

export const {
    createExpenditureRequest, createExpenditureSuccess, createExpenditureFail,
    getExpenditureRequest, getExpenditureSuccess, getExpenditureFail,
    updateExpenditureRequest, updateExpenditureSuccess, updateExpenditureFail,
    deleteExpenditureRequest, deleteExpenditureSuccess, deleteExpenditureFail

} = ExpenditureSlice.actions;

export default ExpenditureSlice.reducer;
