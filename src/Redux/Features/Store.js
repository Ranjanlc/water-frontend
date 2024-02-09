import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SalesOrderReducer from "./Customer/SalesOrderSlice";
import AddNewProductReducer from "./Products/AddNewProductSlice";
import AddCustomerPaymentReducer from "./Customer/AddCustomerPaymentSlice";
import AddNewFillingStockReducer from "./Products/AddNewFillingStockSlice";
import AddProductTypeReducer from "./Products/AddProductTypeSlice";
import CustomerSecurityAmountReducer from "./Customer/CustomerSecurityAmountSlice";
import CustomerLedgerReducer from "./Customer/CustomerLedgerSlice";
import StockInOutReducer from "./Products/StockInOutSlice";
<<<<<<< HEAD
import AddNewEmployeeReducer from "./Employee/AddNewEmployeeSlice";
=======
import AddNewCustomerReducer from "./Customer/AddNewCustomerSlice";
import AddVendorPaymentReducer from "./Vendor/AddVendorPaymentSlice";
import CustomerBalanceSheetReducer from "./Customer/CustomerBalanceSheetSlice";
>>>>>>> 4bbd31660be8dee8f33b320154321bbfbc124d29

const rootReducer = combineReducers({
    newProduct: AddNewProductReducer,
    salesOrder: SalesOrderReducer,
    addCustomerPayment: AddCustomerPaymentReducer,
    addFillingStock: AddNewFillingStockReducer,
    productType: AddProductTypeReducer,
    stockInOut: StockInOutReducer,
    customerSecurityAmount: CustomerSecurityAmountReducer,
    customerLedger: CustomerLedgerReducer,
<<<<<<< HEAD
    addNewEmployee: AddNewEmployeeReducer
=======
    newCustomer: AddNewCustomerReducer,
    addVendorPayment: AddVendorPaymentReducer,
    addBalanceSheet: CustomerBalanceSheetReducer
>>>>>>> 4bbd31660be8dee8f33b320154321bbfbc124d29
})
const store = configureStore({
    reducer: rootReducer,
});

export default store;