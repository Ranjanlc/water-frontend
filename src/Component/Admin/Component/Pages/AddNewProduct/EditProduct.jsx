import React, { useCallback, useEffect, useState } from "react";
import "./AddNewProduct.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleNewProduct,
  updateNewProduct,
} from "../../../../../Redux/Features/Products/AddNewProductSlice";
import { useSnackbar } from "notistack";
import { getAllProductType } from "../../../../../Redux/Features/Products/AddProductTypeSlice";

function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { allProductData } = useSelector((state) => state.newProduct);
  const { enqueueSnackbar } = useSnackbar();
  const data = allProductData && allProductData?.find((e) => e?._id === id);
  const navigate = useNavigate();
  const [productName, setProductName] = useState(data?.productName);
  const [price, setPrice] = useState(data?.price);
  const [type, setType] = useState(data?.quantityType);
  const [productNameError, setProductNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [typeError, setTypeError] = useState("");
  const { allProductTypeData } = useSelector((state) => state.productType);

  useEffect(() => {
    dispatch(getAllProductType(() => {}));
  }, [dispatch]);

  const fetchAllSingleProduct = useCallback(() => {
    dispatch(
      getSingleNewProduct({
        id: id,
        callback: (message) => {
          console.log(message);
        },
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    fetchAllSingleProduct();
  }, [fetchAllSingleProduct]);

  const HandleEditProduct = () => {
    setProductNameError("");
    setPriceError("");
    setTypeError("");

    if (!productName) {
      setProductNameError("Product Name is Required!!");
      return;
    }
    if (!price) {
      setPriceError("Price is Required!!");
      return;
    }
    if (!type) {
      setTypeError("Type is Required!!");
      return;
    }

    let payload = {
      productName: productName,
      price: price,
      quantityType: type,
    };

    dispatch(
      updateNewProduct({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/addnewproduct");
          setProductNameError("");
          setPriceError("");
          setTypeError("");
          setProductName("");
          setPrice("");
          setType("");
        },
      })
    );
  };

  return (
    <main id="main" className="main">
      <section className="section">
        <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
          <h5 className="d-inline">
            <b>Edit Product</b>
          </h5>
          <hr style={{ backgroundColor: "black" }} />
          <div className="row mt-3">
            <div className="row mx-1">
              <div className="col-md-4">
                <div className="form-group mx-1">
                  <label>Product Name</label>
                  <input
                    type="text"
                    className="form-control c2 mt-1"
                    placeholder="Enter Product Name"
                    value={productName}
                    onChange={(e) => {
                      setProductName(e.target.value);
                      setProductNameError("");
                    }}
                  />
                </div>
                {productNameError && (
                  <div
                    className="d-flex gap-2 align-items-center"
                    style={{ color: "red" }}
                  >
                    <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                    {productNameError}
                  </div>
                )}
              </div>
              <div className="col-md-4 ">
                <label>Price</label>
                <input
                  type="number"
                  className="form-control c2 mt-1 "
                  placeholder="Price"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                    setPriceError("");
                  }}
                />
                {priceError && (
                  <div
                    className="d-flex gap-2 align-items-center"
                    style={{ color: "red" }}
                  >
                    <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                    {priceError}
                  </div>
                )}
                <div class="form-check form-check-inline mt-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Price USD
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2">
                    Price SHS
                  </label>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group mx-1">
                  <label htmlFor="usr">Select Type</label>
                  <select
                    className="form-select c2 mt-1 "
                    aria-label="Default select example"
                    onChange={(e) => {
                      setType(e.target.value);
                      setTypeError("");
                    }}
                  >
                    <option selected="">Select category</option>
                    {allProductTypeData &&
                      allProductTypeData.map((type, i) => (
                        <option value={type.productType} key={i}>
                          {type.productType}
                        </option>
                      ))}
                  </select>
                  {typeError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {typeError}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 d-flex justify-content-center my-4">
              <button
                className="button"
                style={{ verticalAlign: "middle" }}
                onClick={HandleEditProduct}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EditProduct;
