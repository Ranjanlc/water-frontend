import Dashboard from "../Component/Pages/Dashboard/Dashboard";
import AddNewProduct from "../Component/Pages/AddNewProduct/AddNewProduct";
import NewEditCustomer from "../Component/Pages/New-Edit-Customer/NewEditCustomer";
import NewSaleOrder from "../Component/Pages/New-Sale-Order/NewSaleOrder";
import AddCustomerPayment from "../Component/Pages/Add-Customer-Payment/AddCustomerPayment";
import CustomerLedger from "../Component/Pages/Customer-Ledger/CustomerLedger";
import CustomerSecurityAmount from "../Component/Pages/Customer-Security-Amount/CustomerSecurityAmount";
import CustomerBalanceSheet from "../Component/Pages/Customer-Balance-Sheet/CustomerBalanceSheet";
import SetProductionPrice from "../Component/Pages/Set-Production-Price/SetProductionPrice";
import SetCustomerPinFormGoogleMap from "../Component/Pages/Set-Customer-Pin-Google-Map/SetCustomerPinFormGoogleMap";
import AddNewBank from "../Component/Pages/Add-New-Bank/AddNewBank";
import AddNewTransection from "../Component/Pages/Add-New-Transection/AddNewTransection";
import Transection from "../Component/Pages/Transection/Transection";
import EditCustomer from "../Component/Pages/New-Edit-Customer/EditCustomer";
import EditNewSaleOrder from "../Component/Pages/New-Sale-Order/EditNewSaleOrder";
import EditCustomerPayment from "../Component/Pages/Add-Customer-Payment/EditCustomerPayment";
import EditCustomerLedger from "../Component/Pages/Customer-Ledger/EditCustomerLedger";
import EditCustomerSecurityAmount from "../Component/Pages/Customer-Security-Amount/EditCustomerSecurityAmount";
import EditCustomerBalanceSheet from "../Component/Pages/Customer-Balance-Sheet/EditCustomerBalanceSheet";
import EditSetProductionPrice from "../Component/Pages/Set-Production-Price/EditSetProductionPrice";
import EditCustomerPinFormGoogleMap from "../Component/Pages/Set-Customer-Pin-Google-Map/EditCustomerPinFormGoogleMap";
import EditBank from "../Component/Pages/Add-New-Bank/EditBank";

import AddNewFillingStock from "../Component/Pages/AddNewFillingStock/AddNewFillingStock";
import CheckStockBalance from "../Component/Pages/CheckStockBalance/CheckStockBalance";
import FillingStockHistory from "../Component/Pages/FillingStockHistory/FillingStockHistory";
import StockInOut from "../Component/Pages/StockInOut/StockInOut";
import AddNewEmployee from "../Component/Pages/AddNewEmployee/AddNewEmployee";
import AreaAssignToEmployee from "../Component/Pages/AreaAssignToEmployee/AreaAssignToEmployee";
import SystemSetting from "../Component/Pages/SystemSetting/SystemSetting";
import SoftwareRole from "../Component/Pages/SoftwareRole/SoftwareRole";
import EditProduct from "../Component/Pages/AddNewProduct/EditProduct";
import EditFillingStock from "../Component/Pages/AddNewFillingStock/EditFillingStock";
import EditStockInOut from "../Component/Pages/StockInOut/EditStockInOut";
import EditEmployee from "../Component/Pages/AddNewEmployee/EditEmployee";
import EditAreaAssignToEmployee from "../Component/Pages/AreaAssignToEmployee/EditAreaAssignToEmployee";
import EditSoftwareRole from "../Component/Pages/SoftwareRole/EditSoftwareRole";

import AddVendorPayment from "../Component/Pages/Add-Vendor-Payment/AddVendorPayment";
import PurchaseOrderVendor from "../Component/Pages/Purchase-Order-Vendor/PurchaseOrderVendor";
import Vendor from "../Component/Pages/Vander/Vendor";
import VendorLedger from "../Component/Pages/Vendor-Ledger/VendorLedger";
import VendorBalanceSheet from "../Component/Pages/Vendor-Balance-Sheet/VendorBalanceSheet";
import PrintAreaReportList from "../Component/Pages/Print-Area-Report-List/PrintAreaReportList";
import DailySalesReport from "../Component/Pages/DailySalesReport/DailySalesReport";
import MonthlySalesReport from "../Component/Pages/MonthlySalesReport/MonthlySalesReport";
import ProductSalesReport from "../Component/Pages/ProductSalesReport/ProductSalesReport";
import YearlySalesReport from "../Component/Pages/YearlySalesReport/YearlySalesReport";
import Expenditure from "../Component/Pages/Expenditure/Expenditure";
import Investment from "../Component/Pages/Investment/Investment";
import PurchaseOrderVendorform from "../Component/Pages/Purchase-Order-Vendor/EditPurchaseOrderVendorform";
import EditVendorPaymentForm from "../Component/Pages/Add-Vendor-Payment/EditVendorPaymentForm";
import EditVendorfrom from "../Component/Pages/Vander/EditVendorfrom";
import EditVendorLedger from "../Component/Pages/Vendor-Ledger/EditVendorLedger";
import EditPrintAreaReportListform from "../Component/Pages/Print-Area-Report-List/EditPrintAreaReportListform";
import EditDailySalesReportfrom from "../Component/Pages/DailySalesReport/EditDailySalesReportfrom";
import EditMonthlySalesReportfrom from "../Component/Pages/MonthlySalesReport/EditMonthlySalesReportfrom";
import EditProductSalesReportfrom from "../Component/Pages/ProductSalesReport/EditProductSalesReportfrom";
import EditYearlySalesReportfrom from "../Component/Pages/YearlySalesReport/EditYearlySalesReportfrom";
import EditExpenditurefrom from "../Component/Pages/Expenditure/EditExpenditurefrom";
import EditInvestment from "../Component/Pages/Investment/EditInvestment";
import AddProductType from "../Component/Pages/AddProductType/AddProductType";
import EditProductType from "../Component/Pages/AddProductType/EditProductType";
import Rinky from "../Component/Pages/Rinky";
import Login from "../../Auth/Login";

let AdminRoutes = [
  {
    index: true,
    element: <Dashboard />,
  },

  // product
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "addnewproduct",
    element: <AddNewProduct />,
  },
  {
    path: "addproducttype",
    element: <AddProductType />,
  },

  {
    path: "/admin/editproducttype/:id",
    element: <EditProductType />,
  },

  {
    path: "/admin/editproduct/:id",
    element: <EditProduct />,
  },

  {
    path: "addnewfillingstock",
    element: <AddNewFillingStock />,
  },
  {
    path: "/admin/editfillingstock/:id",
    element: <EditFillingStock />,
  },

  {
    path: "checkstockbalance",
    element: <CheckStockBalance />,
  },

  {
    path: "fillingstockhistory",
    element: <FillingStockHistory />,
  },

  {
    path: "stockinout",
    element: <StockInOut />,
  },
  {
    path: "/admin/editstockinout/:id",
    element: <EditStockInOut />,
  },

  // customers
  {
    path: "new_edit_customer",
    element: <NewEditCustomer />,
  },
  {
    path: "/admin/new_edit_customer/edit_customer/:id",
    element: <EditCustomer />,
  },

  {
    path: "new_sale_order",
    element: <NewSaleOrder />,
  },
  {
    path: "/admin/new_sale_order/edit_sale_order",
    element: <EditNewSaleOrder />,
  },

  {
    path: "add_customer_payment",
    element: <AddCustomerPayment />,
  },
  {
    path: "/admin/edit_customer_payment/:id",
    element: <EditCustomerPayment />,
  },

  {
    path: "customer_ledger",
    element: <CustomerLedger />,
  },
  {
    path: "/admin/edit_customer_ledger/:id",
    element: <EditCustomerLedger />,
  },

  {
    path: "customer_security_amount",
    element: <CustomerSecurityAmount />,
  },
  {
    path: "/admin/edit_customer_security_amount/:id",
    element: <EditCustomerSecurityAmount />,
  },

  {
    path: "customer_balance_sheet",
    element: <CustomerBalanceSheet />,
  },
  {
    path: "/admin/edit_customer_balance_sheet/:id",
    element: <EditCustomerBalanceSheet />,
  },

  {
    path: "set_production_price",
    element: <SetProductionPrice />,
  },
  {
    path: "/admin/edit_production_price/:id",
    element: <EditSetProductionPrice />,
  },

  {
    path: "set_customer_pin_form_google_map",
    element: <SetCustomerPinFormGoogleMap />,
  },
  {
    path: "/admin/edit_customer_pin_form_google_map",
    element: <EditCustomerPinFormGoogleMap />,
  },

  // vendor
  {
    path: "addvendorpayment",
    element: <AddVendorPayment />,
  },
  {
    path: "/admin/editvendorpaymentform",
    element: <EditVendorPaymentForm />,
  },

  {
    path: "purchaseordervendor",
    element: <PurchaseOrderVendor />,
  },
  {
    path: "/admin/purchaseordervendorform",
    element: <PurchaseOrderVendorform />,
  },

  {
    path: "vendor",
    element: <Vendor />,
  },
  {
    path: "/admin/editvendorform/:id",
    element: <EditVendorfrom />,
  },

  {
    path: "vendorledger",
    element: <VendorLedger />,
  },
  {
    path: "/admin/EditVendorLedger",
    element: <EditVendorLedger />,
  },

  {
    path: "vendorbalancesheet",
    element: <VendorBalanceSheet />,
  },

  // employee
  {
    path: "addnewemployee",
    element: <AddNewEmployee />,
  },
  {
    path: "/admin/editemployee/:id",
    element: <EditEmployee />,
  },

  {
    path: "areaassigntoemployee",
    element: <AreaAssignToEmployee />,
  },
  {
    path: "/admin/editarea",
    element: <EditAreaAssignToEmployee />,
  },

  // repots
  {
    path: "printareareportlist",
    element: <PrintAreaReportList />,
  },
  {
    path: "/admin/EditPrintAreaReportListform",
    element: <EditPrintAreaReportListform />,
  },

  {
    path: "dailysalesreport",
    element: <DailySalesReport />,
  },
  {
    path: "/admin/EditDailySalesReportfrom",
    element: <EditDailySalesReportfrom />,
  },

  {
    path: "monthlysalesreport",
    element: <MonthlySalesReport />,
  },
  {
    path: "/admin/EditMonthlySalesReportfrom",
    element: <EditMonthlySalesReportfrom />,
  },

  {
    path: "productsalesreport",
    element: <ProductSalesReport />,
  },
  {
    path: "/admin/EditProductSalesReportfrom",
    element: <EditProductSalesReportfrom />,
  },

  {
    path: "yearlysalesreport",
    element: <YearlySalesReport />,
  },
  {
    path: "/admin/EditYearlySalesReportfrom",
    element: <EditYearlySalesReportfrom />,
  },

  // expenditure
  {
    path: "expenditure",
    element: <Expenditure />,
  },
  {
    path: "/admin/EditExpenditurefrom",
    element: <EditExpenditurefrom />,
  },

  {
    path: "investment",
    element: <Investment />,
  },
  {
    path: "/admin/EditInvestment",
    element: <EditInvestment />,
  },

  // transection
  {
    path: "add_new_bank",
    element: <AddNewBank />,
  },
  {
    path: "/admin/edit_bank",
    element: <EditBank />,
  },

  {
    path: "add_new_transection",
    element: <AddNewTransection />,
  },
  {
    path: "transection",
    element: <Transection />,
  },

  // setting
  {
    path: "systemsetting",
    element: <SystemSetting />,
  },

  {
    path: "softwarerole",
    element: <SoftwareRole />,
  },
  {
    path: "/admin/editsoftwarerole",
    element: <EditSoftwareRole />,
  },

  {
    path: "rinky",
    element: <Rinky />,
  },
];

export default AdminRoutes;
