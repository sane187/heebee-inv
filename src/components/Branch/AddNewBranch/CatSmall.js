import React from "react";

const CatSmall = ({
  item,
  index,
  product_items_available,
  product_checkable,
  category_list_id,
  setProduct,
}) => {
  return (
    <div
      key={item.product_list_id}
      className="w-100 d-flex align-items-start catBig mb-2"
    >
      <div className=" w-75 form-check ">
        <input
          className="form-check-input"
          type="checkbox"
          checked={product_items_available !== undefined && product_checkable}
          id={item.product_list_id}
          disabled={!product_checkable}
          onChange={(e) => {
            setProduct({
              product_list_id: item.product_list_id,
              isChecked: product_items_available > 0 ? false : true,
              items_available:
                product_items_available !== undefined ? undefined : 0,
              category_list_id,
            });
          }}
        />
        <label
          className="form-check-label ms-2" /**for={item.product_list_id} **/
        >
          {item.product_name}
        </label>
      </div>

      <input
        type="number"
        placeholder="100"
        value={product_items_available ? product_items_available : ""}
        className="form-control w-25"
        aria-describedby="emailHelp"
        required
        onChange={(e) => {
          setProduct({
            product_list_id: item.product_list_id,
            isChecked: true,
            items_available: e.target.value,
            category_list_id,
          });
        }}
      />
    </div>
  );
};

export default CatSmall;
