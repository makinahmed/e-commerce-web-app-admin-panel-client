import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../Components/Hooks/useAuth";
import Loader from "../../Components/Loader/Loader";

function AddProducts() {
  const [loader, setLoader] = useState(false);
  const { user } = useAuth();
  const [productDetails, setProductDetails] = useState();
  const [error, setError] = useState();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newPoroducts = { ...productDetails };
    newPoroducts[field] = value;
    setProductDetails(newPoroducts);
  };

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const onSubmitHandler = () => {
    setLoader(true);
    axios
      .post(
        `https://e-commerce-web-app-admin-panel-server-r9gv.vercel.app/addproduct?email=${user?.email}`,
        productDetails,
        config
      )
      .then((res) => {
        console.log(res, "response add product");
      })
      .catch((e) => {
        if (e.response.status === 401) {
          setError("Error! Try later.");
        }
      });
    window.location.reload();
    setLoader(false);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title </span>
              </label>
              <input
                onBlur={handleOnBlur}
                type="text"
                name="title"
                placeholder="product title..."
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Link </span>
              </label>
              <input
                onBlur={handleOnBlur}
                type="text"
                name="img"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="w-full flex justify-between	">
              <div className="form-control  w-20">
                <label className="label">
                  <span className="label-text">Stock </span>
                </label>
                <input
                  onBlur={handleOnBlur}
                  type="text"
                  name="stock"
                  placeholder="stock"
                  className="input input-bordered inline"
                />
              </div>
              <div className="form-control  w-20">
                <label className="label">
                  <span className="label-text">price </span>
                </label>
                <input
                  onBlur={handleOnBlur}
                  type="text"
                  name="price"
                  placeholder="price"
                  className="input input-bordered  inline"
                />
              </div>
              <div className="form-control w-20">
                <label className="label">
                  <span className="label-text">Rating </span>
                </label>
                <input
                  onBlur={handleOnBlur}
                  type="text"
                  name="rating"
                  placeholder="rating"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description </span>
              </label>
              <textarea
                id="message"
                rows="4"
                onBlur={handleOnBlur}
                type="text"
                name="description"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="product description..."
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button onClick={onSubmitHandler} className="btn btn-primary">
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
      {loader && <Loader />}
    </div>
  );
}

export default AddProducts;
