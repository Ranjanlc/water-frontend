import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AddNewProductReducer from "./AddNewProductSlice";
import StockInOutReducer from "./StockInOutSlice";
import CustomerSecurityAmountReducer from "../Customer/CustomerSecurityAmountSlice";
import CustomerLedgerReducer from "../Customer/CustomerLedgerSlice"

const rootReducer = combineReducers({
    newProduct: AddNewProductReducer,
    stockInOut : StockInOutReducer,
    customerSecurityAmount : CustomerSecurityAmountReducer,
    customerLedger : CustomerLedgerReducer

})
const store = configureStore({
    reducer: rootReducer,
});

export default store;