import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../Helper/Helper";


export const addNewEmployee = createAsyncThunk("employee/addNewEmployee",
                                            // foldername/FunctionName
    async ({ payload, callback }, { dispatch }) => {
        try {
            dispatch(createNewEmployeeRequest())
            const response = await axios.post(`${API_URL}/employee`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(createNewEmployeeSuccess(response.data.newdata));
                callback("Created Successfully!!")
            } else {
                dispatch(createNewEmployeeFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createNewEmployeeFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const getAllNewEmployee = createAsyncThunk("employee/getAllNewEmployee",
    async ({ callback }, { dispatch }) => {
        try {
            dispatch(getNewEmployeeRequest())
            const response = await axios.get(`${API_URL}/employee`)
            if (response.status === 200) {
                dispatch(getNewEmployeeSuccess(response.data));
                callback("Fetched Successfully!!")
            } else {
                dispatch(getNewEmployeeFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(getNewEmployeeFail(error.response.data.message));
            callback(error.response.data.message)
        }
        console.log(response);
    })    


export const getSingleNewEmployee = createAsyncThunk("employee/getSingleNewEmployee",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(createNewEmployeeRequest())
            const response = await axios.get(`${API_URL}/employee/${id}`)
            if (response.status === 200) {
                dispatch(createNewEmployeeSuccess(response.data.finddata));
                callback("Fetched Successfully!!")
            } else {
                dispatch(createNewEmployeeFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(createNewEmployeeFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const updateNewEmployee = createAsyncThunk("employee/updateNewEmployee",
    async ({ id, payload, callback }, { dispatch }) => {
        try {
            dispatch(updateNewEmployeeRequest())
            const response = await axios.put(`${API_URL}/employee/${id}`, payload);
            if (response.status === 200) {
                console.log(response)
                dispatch(updateNewEmployeeSuccess(response.data.updatedData));
                callback("Updated Successfully!!")
            } else {
                dispatch(updateNewEmployeeFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(updateNewEmployeeFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })

export const deleteNewEmployee = createAsyncThunk("employee/deleteNewEmployee",
    async ({ id, callback }, { dispatch }) => {
        try {
            dispatch(deleteNewEmployeeRequest())
            const response = await axios.delete(`${API_URL}/employee/${id}`);
            if (response.status === 200) {
                console.log(response)
                dispatch(deleteNewEmployeeSuccess(response.data.deletedata));
                callback("Deleted Successfully!!")
            } else {
                dispatch(deleteNewEmployeeFail(response.data.message));
                callback(response.data.message)
            }
        } catch (error) {
            dispatch(deleteNewEmployeeFail(error.response.data.message));
            callback(error.response.data.message)
        }
    })


const initialState = {
    loading: false,
    newEmployeeData: null,
    allNewEmployeeData: null,
    updatedNewEmployeeData: null,
    error: null,
}

const AddNewEmployeeSlice =  createSlice({
    name :"StockInOut",
    initialState,
    reducers:{
        createNewEmployeeRequest: (state) => {
            state.loading = true;
        },
        createNewEmployeeSuccess: (state, action) => {
            state.loading = false;
            state.newEmployeeData = action.payload;
            state.error = null;
        },
        createNewEmployeeFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getNewEmployeeRequest: (state) => {
            state.loading = true;
        },
        getNewEmployeeSuccess: (state, action) => {
            state.loading = false;
            state.allNewEmployeeData = action.payload;
            state.error = null;
        },
        getNewEmployeeFail: (state, action) => {
            state.loading = false;
            state.allNewEmployeeData = null;
            state.error = action.payload;
        },
        updateNewEmployeeRequest: (state, action) => {
            state.loading = true;
        },
        updateNewEmployeeSuccess: (state, action) => {
            state.loading = false;
            state.newEmployeeData = action.payload;
            state.error = null;
        },
        updateNewEmployeeFail: (state, action) => {
            state.loading = false;
            state.newEmployeeData = action.payload;
            state.error = null;
        },
        deleteNewEmployeeRequest: (state, action) => {
            state.loading = true;
        },
        deleteNewEmployeeSuccess: (state, action) => {
            state.loading = false;
            state.newEmployeeData = action.payload;
            state.error = null;
        },
        deleteNewEmployeeFail: (state, action) => {
            state.loading = false;
            state.newEmployeeData = action.payload;
            state.error = null;
        }

    }
});

export const {
    createNewEmployeeRequest, createNewEmployeeSuccess, createNewEmployeeFail, getNewEmployeeRequest, getNewEmployeeSuccess, getNewEmployeeFail, updateNewEmployeeRequest, updateNewEmployeeSuccess, updateNewEmployeeFail, deleteNewEmployeeRequest, deleteNewEmployeeSuccess, deleteNewEmployeeFail
} = AddNewEmployeeSlice.actions;

export default AddNewEmployeeSlice.reducer