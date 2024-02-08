import React ,{ useEffect, useCallback , useState} from 'react'
import './AddProductType.css'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { getSingleProductType  , updateNewProduct } from '../../../../../Redux/Features/Products/AddProductTypeSlice';


function EditProductType() {
  const { id } = useParams();
  const {allProductTypeData } = useSelector((state) => state.productType);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = allProductTypeData && allProductTypeData?.find((e) => e?._id === id);
  const [productType, setproductType] = useState(data?.productType);
  const [productTypeError, setProductTypeError] = useState("");

  const fetchAllSingleProductType = useCallback(() => {
    dispatch(
      getSingleProductType({
        id: id,
        callback: (message) => {
          console.log(message);
        },
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    fetchAllSingleProductType();
  }, [fetchAllSingleProductType]);

  const HandleEditProductType = () => {
    setProductTypeError("");
    

    if (!productType) {
      setProductTypeError("Name is Required!!");
      return;
    }
   

    let payload = {
      productType: productType,
     
    };
    dispatch(
      updateNewProduct({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/addproductType");
          setProductTypeError("");
          setproductType("");
         
        },
      })
    );
  };

  return (
    <main id="main" className="main">
      <section className="section">
        <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
          <h5 className="d-inline">
            <b>Edit Product Type</b>
          </h5>
          <hr style={{backgroundColor:'black',}} />
          <div className="row mt-3">
            <div className="row mx-1">
              <div className="col-md-4">
                <div className="form-group mx-1">
                  <label> Name</label>
                  <input
                    type="text"
                    className="form-control c2 mt-1"
                    placeholder="Enter Name"
                    value={productType}
                    onChange={(e) => {
                      setproductType(e.target.value);
                      setProductTypeError("");
                    }}

                  />
                </div>
                {productTypeError && (
                  <div
                    className="d-flex gap-2 align-items-center"
                    style={{ color: "red" }}
                  >
                    <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                    {productTypeError}
                  </div>
                )}
              </div>
           
            </div>
            <div className="d-grid gap-2 d-flex justify-content-center my-4">
              <button className="button" style={{ verticalAlign: "middle" }} onClick={HandleEditProductType}>
                <span>Save</span>
              </button>
            </div>
          </div>
         
        </div>
      </section>
    </main>
  )
}


export default EditProductType