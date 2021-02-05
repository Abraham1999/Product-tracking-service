import React from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/actions/product";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const DeleteTable = ({ products, deleteProduct }) => {
  const productTable = products.map((product) => {
    return (
      <tr key={product._id}>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <Link
            to={`/edit/${product._id}`}
            className="text-indigo-600 hover:text-indigo-900"
          >
            {product.name}
          </Link>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {product.description}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {product.location}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {product.trackingId}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {product.arrivalDate}
        </td>
        <td>
          <div className="text-center">
            <span
              onClick={(e) => deleteProduct(product._id)}
              style={{ cursor: "pointer" }}
              role="img"
              aria-label="close"
            >
              ❌
            </span>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="py-6 container  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <br />
          <br />
          <br />
          <h1 className="text-center text-4xl font-bold leading-7 text-gray-900 sm:leading-9">
            Products
          </h1>
          <br />
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Location
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Tracking ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Arrival Date
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>{productTable}</tbody>
                  </table>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <br /> <br /> <br />
    </>
  );
};

DeleteTable.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};
 
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { deleteProduct })(DeleteTable);
