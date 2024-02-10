import React, { useCallback, useEffect, useState } from 'react'
import './SetProductionPrice.css'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from "notistack";
import { getSingleProductPrice, updateProductPrice } from '../../../../../Redux/Features/Customer/SetProductionPriceSlice';



const EditSetProductionPrice = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { allProductPriceData } = useSelector((state) => state.setproductionPrice);
  const { enqueueSnackbar } = useSnackbar();
  const data = allProductPriceData && allProductPriceData?.find((e) => e?._id === id);
  console.log(data)
  const navigate = useNavigate();
  const [productName, setProductName] = useState(data?.product);
  const [price, setPrice] = useState(data?.price);
  const [selectProduct, setSelectProduct] = useState(data?.selectproduct);
  const [customerName, setCustomerName] = useState(data?.custumername);
  const [address , setAddress] = useState(data?.address)
  const [productNameError, setProductNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [selectProductError, setSelectProductError] = useState("");
  const [customerNameError, setCustomerNameError] = useState("");
  const [addressError , setAddressError] = useState("")   



  const fetchAllSingleProductPrice = useCallback(() => {
    dispatch(
     getSingleProductPrice({
        id: id,
        callback: (message) => {
          console.log(message);
        },
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    fetchAllSingleProductPrice();
  }, [fetchAllSingleProductPrice]);

  const HandleEditProduct = () => {
    setProductNameError("");
    setSelectProductError("");
    setPriceError("");
    setCustomerNameError("")
    setAddressError("")

    if (!productName) {
      setProductNameError("Product Name is Required!!");
      return;
    }
    if (!price) {
      setPriceError("Price is Required!!");
      return;
    }
    if (!selectProduct) {
      setSelectProductError("Select Product is Required!!");
      return;
    }
    if (!customerName) {
      setCustomerNameError("Customer Name is Required!!");
      return;
    }
    if (!address) {
      setAddressError("Address is Required!!");
      return;
    }
    let payload = {
      product: productName,
      price: price,
      selectproduct: selectProduct,
      custumername: customerName,
      address: address
     
    };

    dispatch(
      updateProductPrice({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/set_production_price");
          setProductNameError("");
          setPriceError("");
          setSelectProductError("");
          setCustomerNameError("");
          setAddressError("");
          setProductName("");
          setPrice("");
          setSelectProduct("");
          setCustomerName("");
          setAddress("");
        },
      })
    );
  };

  return (
    <>
    <main id="main" className="main">
  <section className="section">

    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
      <h5 className="d-inline">
        <b>Edit Product Price</b>
      </h5>
      <hr className="m-0 mb-3 mt-3"
              style={{
                background: 'black',
              }} />
        <div className='row mt-3'>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Select Product</label>
                  <select
                    className="form-select c2"
                    aria-label="Default select example"
                    value={productName}
                    onChange={(e) => {
                      setProductName(e.target.value);
                      setProductNameError("");
                    }}
                  >
                    <option selected="">1.9 LTR</option>
                    <option selected="">1.8 LTR</option>
                    <option selected="">500 ML</option>
                    <option selected="">2 LTR</option>
                  </select>
                  {selectProductError && (
                  <div
                    className="d-flex gap-2 align-items-center"
                    style={{ color: "red" }}
                  >
                    <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                    {selectProductError}
                  </div>
                )}
                </div>
              </div>
          <div className='col-md-4'>
          <label>Price</label>
                <input
                  type="number"
                  className="form-control c2"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                    setPriceError("");
                  }}
                />
                <div class="form-check form-check-inline mt-1">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">Price USD</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Price SHS</label>
                </div>
                {priceError && (
                  <div
                    className="d-flex gap-2 align-items-center"
                    style={{ color: "red" }}
                  >
                    <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                    {priceError}
                  </div>
                )}
          </div>
          <div className="col-md-4">
                  <div className="form-group">
                    <label>Select Product</label>
                    <input type="text" className="form-control c2"
                     value={selectProduct}
                     onChange={(e) => {
                      setSelectProduct(e.target.value);
                       setSelectProductError("");
                     }} />
                       {selectProductError && (
                  <div
                    className="d-flex gap-2 align-items-center"
                    style={{ color: "red" }}
                  >
                    <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                    {selectProductError}
                  </div>
                )}
                  </div>
                </div>
              </div>
              <div className='row mt-2'>
         
         <div className="col-md-4">
           <div className="form-group">
             <label>Customer Name</label>
             <input type="text" className="form-control c2"
              value={customerName}
              onChange={(e) => {
               setCustomerName(e.target.value);
                setCustomerNameError("");
              }} 
               />
                 {customerNameError && (
                  <div
                    className="d-flex gap-2 align-items-center"
                    style={{ color: "red" }}
                  >
                    <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                    {customerNameError}
                  </div>
                )}
           </div>
         </div>
         <div className="col-md-4">
           <div className="form-group">
             <label>Address</label>
             <input type="text" className="form-control c2" 
              value={address}
              onChange={(e) => {
               setAddress(e.target.value);
                setAddressError("");
              }} />
                {addressError&& (
                  <div
                    className="d-flex gap-2 align-items-center"
                    style={{ color: "red" }}
                  >
                    <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                    {addressError}
                  </div>
                )}
           </div>
         </div>
      </div>
              <div className="d-grid gap-2 d-flex justify-content-center my-4">
              <button className="button" style={{ verticalAlign: "middle" }} onClick={ HandleEditProduct}>
            Save
              </button>
            </div>
              
    </div>
  </section>
</main>

    </>
  )
}

export default EditSetProductionPrice