import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../Helper/Helper";

export const addInvestment  = createAsyncThunk("expenditure/addInvestment",
                                            // foldername/FunctionName
    async ({ payload, callback }, { dispatch }) => {
        try {
            dispatch(createInvestmentRequest())
            const response = await axios.post(`${API_URL}/investment`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(createInvestmentSuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createInvestmentFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createInvestmentFail(error.response.data.message));
            callback(error.response.data.message)
        }
    });

export const getAllInvestment = createAsyncThunk("expenditure/getAllInvestment",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getInvestmentRequest())
            const response = await axios.get(`${API_URL}/investment`)
            console.log(response)
            if (response.status === 200) {
                dispatch(getInvestmentSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getInvestmentFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getInvestmentFail(error.response.data.message));
            callback(error.response.data.message)
        }
    });

export const getSingleInvestment = createAsyncThunk("expenditure/getSingleInvestment",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createInvestmentRequest())
            const response = await axios.get(`${API_URL}/investment/${id}`)
            if (response.status === 200) {
                dispatch(createInvestmentSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createInvestmentFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createInvestmentFail(error.response.data.message));
            callback(error.response.data.message)
        }
    });

export const updateInvestment = createAsyncThunk("expenditure/updateInvestment",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateInvestmentRequest())
            const response = await axios.put(`${API_URL}/investment/${id}`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(updateInvestmentSuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateInvestmentFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateInvestmentFail(error.response.data.message));
            callback(error.response.data.message)
        }
    });

export const deleteInvestment = createAsyncThunk("expenditure/deleteInvestment",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteInvestmentRequest())
            const response = await axios.delete(`${API_URL}/investment/${id}`);
            if (response.status === 200) {
                console.log(response)
                dispatch(deleteInvestmentSuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteInvestmentFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deleteInvestmentFail(error.response.data.message));
            callback(error.response.data.message)
        }
    });

    const initialState = {
        loading: false,
        investmentData: null,
        allInvestmentData: null,
        updatedInvestmentData: null,
        error: null,
    }

    const InvestmentSlice =  createSlice({
        name :"Investment",
        initialState,
        reducers:{
            createInvestmentRequest: (state) => {
                state.loading = true;
            },
            createInvestmentSuccess: (state, action) => {
                state.loading = false;
                state.investmentData = action.payload;
                state.error = null;
            },
            createInvestmentFail: (state, action) => {
                state.loading = false;
                state.error = action.payload;
            },
            getInvestmentRequest: (state) => {
                state.loading = true;
            },
            getInvestmentSuccess: (state, action) => {
                state.loading = false;
                state.allInvestmentData = action.payload;
                state.error = null;
            },
            getInvestmentFail: (state, action) => {
                state.loading = false;
                state.allInvestmentData = null;
                state.error = action.payload;
            },
            updateInvestmentRequest: (state, action) => {
                state.loading = true;
            },
            updateInvestmentSuccess: (state, action) => {
                state.loading = false;
                state.investmentData = action.payload;
                state.error = null;
            },
            updateInvestmentFail: (state, action) => {
                state.loading = false;
                state.investmentData = action.payload;
                state.error = null;
            },
            deleteInvestmentRequest: (state, action) => {
                state.loading = true;
            },
            deleteInvestmentSuccess: (state, action) => {
                state.loading = false;
                state.investmentData = action.payload;
                state.error = null;
            },
            deleteInvestmentFail: (state, action) => {
                state.loading = false;
                state.investmentData = action.payload;
                state.error = null;
            }
    
        }
    });


    export const {
        createInvestmentRequest, createInvestmentSuccess, createInvestmentFail, getInvestmentRequest, getInvestmentSuccess, getInvestmentFail, updateInvestmentRequest, updateInvestmentSuccess, updateInvestmentFail, deleteInvestmentRequest, deleteInvestmentSuccess, deleteInvestmentFail
    } = InvestmentSlice.actions;
    
    export default InvestmentSlice.reducer