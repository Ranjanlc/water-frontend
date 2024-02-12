import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SalesOrderReducer from "./Customer/SalesOrderSlice";
import AddNewProductReducer from "./Products/AddNewProductSlice";
import AddCustomerPaymentReducer from "./Customer/AddCustomerPaymentSlice";
import AddNewFillingStockReducer from "./Products/AddNewFillingStockSlice";
import AddProductTypeReducer from "./Products/AddProductTypeSlice";
import CustomerSecurityAmountReducer from "./Customer/CustomerSecurityAmountSlice";
import CustomerLedgerReducer from "./Customer/CustomerLedgerSlice";
import StockInOutReducer from "./Products/StockInOutSlice";
import AddNewCustomerReducer from "./Customer/AddNewCustomerSlice";
import AddVendorPaymentReducer from "./Vendor/AddVendorPaymentSlice";
import CustomerBalanceSheetReducer from "./Customer/CustomerBalanceSheetSlice";
import AddNewEmployeeReducer from "./Employee/AddNewEmployeeSlice";
import SetproductionPriceReducer from "./Customer/SetProductionPriceSlice";
import VendorReducer from "./Vendor/VendorSlice";


const rootReducer = combineReducers({
    newProduct: AddNewProductReducer,
    salesOrder: SalesOrderReducer,
    addCustomerPayment: AddCustomerPaymentReducer,
    addFillingStock: AddNewFillingStockReducer,
    productType: AddProductTypeReducer,
    stockInOut: StockInOutReducer,
    customerSecurityAmount: CustomerSecurityAmountReducer,
    customerLedger: CustomerLedgerReducer,
    newCustomer: AddNewCustomerReducer,
    addVendorPayment: AddVendorPaymentReducer,
    addBalanceSheet: CustomerBalanceSheetReducer,
    addNewEmployee : AddNewEmployeeReducer,
    setproductionPrice: SetproductionPriceReducer,
    vendor : VendorReducer,

})
const store = configureStore({
    reducer: rootReducer,
});

export default store;