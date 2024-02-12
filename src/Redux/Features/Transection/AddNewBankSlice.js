import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../Helper/Helper";

export const addNewBank = createAsyncThunk("transection/addNewBank",
                                            // foldername/FunctionName
    async ({ payload, callback }, { dispatch }) => {
        try {
            dispatch(createNewBankRequest())
            const response = await axios.post(`${API_URL}/newbank`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(createNewBankSuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createNewBankFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createNewBankFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getAllNewBank = createAsyncThunk("transection/getAllNewBank",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getNewBankRequest())
            const response = await axios.get(`${API_URL}/newbank`)
            if (response.status === 200) {
                dispatch(getNewBankSuccess(response.data));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getNewBankFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getNewBankFail(error.response.data.message));
            callback(error.response.data.message)
        }
    }) ;

export const getSingleNewBank = createAsyncThunk("transection/getSingleNewBank",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createNewBankRequest())
            const response = await axios.get(`${API_URL}/newbank/${id}`)
            if (response.status === 200) {
                dispatch(createNewBankSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createNewBankFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createNewBankFail(error.response.data.message));
            callback(error.response.data.message)
        }
    });

export const updateNewBank = createAsyncThunk("product/updateNewBank",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateNewBankRequest())
            const response = await axios.put(`${API_URL}/newbank/${id}`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(updateNewBankSuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateNewBankFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateNewBankFail(error.response.data.message));
            callback(error.response.data.message)
        }
    });

    export const deleteNewBank = createAsyncThunk("newbank/deleteNewBank",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteNewBankRequest())
            const response = await axios.delete(`${API_URL}/newbank/${id}`);
            if (response.status === 200) {
                console.log(response)
                dispatch(deleteNewBankSuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteNewBankFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deleteNewBankFail(error.response.data.message));
            callback(error.response.data.message)
        }
    });

    const initialState = {
        loading: false,
        addNewBankData: null,
        allNewBankData: null,
        updatedNewBankData: null,
        error: null,
    }

    const AddNewBankSlice =  createSlice({
        name :"NewBank",
        initialState,
        reducers:{
            createNewBankRequest: (state) => {
                state.loading = true;
            },
            createNewBankSuccess: (state, action) => {
                state.loading = false;
                state.addNewBankData = action.payload;
                state.error = null;
            },
            createNewBankFail: (state, action) => {
                state.loading = false;
                state.error = action.payload;
            },
            getNewBankRequest: (state) => {
                state.loading = true;
            },
            getNewBankSuccess: (state, action) => {
                state.loading = false;
                state.allNewBankData = action.payload;
                state.error = null;
            },
            getNewBankFail: (state, action) => {
                state.loading = false;
                state.allNewBankData = null;
                state.error = action.payload;
            },
            updateNewBankRequest: (state, action) => {
                state.loading = true;
            },
            updateNewBankSuccess: (state, action) => {
                state.loading = false;
                state.addNewBankData = action.payload;
                state.error = null;
            },
            updateNewBankFail: (state, action) => {
                state.loading = false;
                state.addNewBankData = action.payload;
                state.error = null;
            },
            deleteNewBankRequest: (state, action) => {
                state.loading = true;
            },
            deleteNewBankSuccess: (state, action) => {
                state.loading = false;
                state.addNewBankData = action.payload;
                state.error = null;
            },
            deleteNewBankFail: (state, action) => {
                state.loading = false;
                state.addNewBankData = action.payload;
                state.error = null;
            }
    
        }
    });


export const {
        createNewBankRequest, createNewBankSuccess, createNewBankFail, getNewBankRequest, getNewBankSuccess, getNewBankFail, updateNewBankRequest, updateNewBankSuccess, updateNewBankFail, deleteNewBankRequest, deleteNewBankSuccess, deleteNewBankFail
    } = AddNewBankSlice.actions;
    
    export default AddNewBankSlice.reducer



