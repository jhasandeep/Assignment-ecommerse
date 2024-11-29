import { Modal } from "antd";
import React, { useState } from "react";

const Product = ({ productDetails }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };

  const handleCart = () => {
    alert(`${productDetails?.title} is added into cart`);
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick={showModal} className="text-center  ">
        <div className="flex justify-center items-center m-6">
          <img
            src={productDetails?.image}
            alt={productDetails?.title || "Product"}
            width={100}
            height={100}
          />
        </div>
        <p>{productDetails?.title}</p>
        <p>${productDetails?.price}</p>
      </div>

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="text-center"
      >
        <p>
          {productDetails?.title} is Selected. Do you want to add it to the
          cart?
        </p>
        <button
          onClick={handleCart}
          className="px-6 py-2 bg-red-500 text-white rounded-lg my-6"
        >
          Add to Cart
        </button>
      </Modal>
    </>
  );
};

export default Product;
