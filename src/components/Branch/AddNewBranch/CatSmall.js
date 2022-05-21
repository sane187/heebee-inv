import React, { useState } from 'react';

const CatSmall = ({ item, index, }) => {
    const [product, setProduct] = useState({
        id: item.product_list_id,
        items_available: 100,
        isChecked:false
    })
    return (
        <div key={item.product_list_id} className='w-100 d-flex align-items-start catBig mb-2'>
            <div className=" w-75 form-check " >
                <input
                    className="form-check-input"
                    type="checkbox" value={product.isChecked}
                    id={item.product_list_id}
                    onChange={() => { setProduct({...product,isChecked:!product.isChecked}) }}
                />
                <label className="form-check-label ms-2" for={item.product_list_id}>
                    {item.product_name}
                </label>
            </div>

            <input type="number" placeholder='100' className="form-control w-25" aria-describedby="emailHelp" required />
        </div>
    )
};

export default CatSmall;