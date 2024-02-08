import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SalesOrderReducer from "./Customer/SalesOrderSlice";
import AddNewProductReducer from "./Products/AddNewProductSlice";
import AddCustomerPaymentReducer from "./Customer/AddCustomerPaymentSlice";
import AddNewFillingStockReducer from "./Products/AddNewFillingStockSlice";
import AddProductTypeReducer from "./Products/AddProductTypeSlice";
import CustomerSecurityAmountReducer from "./Customer/CustomerSecurityAmountSlice";
import CustomerLedgerReducer from "./Customer/CustomerLedgerSlice";
import StockInOutReducer from "./Products/StockInOutSlice";

const rootReducer = combineReducers({
    newProduct: AddNewProductReducer,
    salesOrder: SalesOrderReducer,
    addCustomerPayment: AddCustomerPaymentReducer,
    addFillingStock: AddNewFillingStockReducer,
    productType: AddProductTypeReducer,
    stockInOut: StockInOutReducer,
    customerSecurityAmount: CustomerSecurityAmountReducer,
    customerLedger: CustomerLedgerReducer
})
const store = configureStore({
    reducer: rootReducer,
});

export default store;