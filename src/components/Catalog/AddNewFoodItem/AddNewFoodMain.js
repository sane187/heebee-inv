import React, { useEffect, useState } from 'react';
import ReactMultiselectCheckboxes from 'react-multiselect-checkboxes/lib/ReactMultiselectCheckboxes';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getBranches } from '../../../store/actionCreators/Branch/BranchAction';
import AddAddons from './AddAddons';
import AddNewAddons from './AddNewAddons';
import AddNewProduct from './AddNewProduct';
import AddProductToCategories from './AddProductToCategories';

const AddNewFoodMain = (props) => {
    const [step, setStep] = useState(1)
    const dispatch = useDispatch();
    const branch = useSelector(state => state.branch)
    const [selectedBranches, setSelected] = useState([]);
    const [options, setOptions] = useState([])
    const [uploadedImage, setUploadedIM] = useState(null);
    const [preview, setPreview] = useState()
    const [Newproduct, setNewProduct] = useState({
        product_name: "",
        sku: 0,
        items_available: 0,
        description: "",
        product_type: "",
        price: 0.0,
        billing_address: "",
        shipping_address: "",
        image: uploadedImage,
        status: "",
        food_type: ""
    })
    useEffect(() => {
        dispatch(getBranches());
    }, [])
    useEffect(() => {
        let array = []
        if (branch.data) {
            branch.data.data.map((item, index) => {
                array.push({ label: item.branch_name, value: item.branch_id })
            })
        }
        else array = []
        setOptions(array)
        console.log(array)
    }, [branch])
    // Fucntionality for upload and preview of image 
    useEffect(() => {
        if (!uploadedImage) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(uploadedImage)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [uploadedImage])
    const imageUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            setUploadedIM(file)
        }
        else {
            setUploadedIM(null)
        }
    }
    function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
        if (value && value.some((o) => o.value === "*")) {
            return `${placeholderButtonLabel}: All`;
        } else {
            return `${placeholderButtonLabel}: ${value.length} selected`;
        }
    }
    function onChange(value, event) {
        if (event.action === "select-option" && event.option.value === "*") {
            this.setState(this.options);
        } else if (
            event.action === "deselect-option" &&
            event.option.value === "*"
        ) {
            this.setState([]);
        } else if (event.action === "deselect-option") {
            this.setState(value.filter((o) => o.value !== "*"));
        } else if (value.length === this.options.length - 1) {
            this.setState(this.options);
        } else {
            this.setState(value);
        }
    }

    const displayBranch = () => {
        if (options) {
            return <div className='categorySelect'><ReactMultiselectCheckboxes
                options={[{ label: "All", value: "*" }, ...options]}
                placeholderButtonLabel="Branches"
                getDropdownButtonLabel={getDropdownButtonLabel}
                value={selectedBranches}
                onChange={onChange}
                setState={setSelected}
                required
            /></div>
        }

    }
    const handleChange = (entry) => (e) => {
        setNewProduct({ ...Newproduct, [entry]: e.target.value })
    }
    const nextStep = (e) => {
        if (selectedBranches.length > 0) {
            let SelectedB = []
            selectedBranches.map((item, index) => {
                SelectedB.push(item.value)
            })
            setStep(step + 1)


            console.log(step, Newproduct, SelectedB,addon)
            // dispatch(addNewCategory(catName.name,catName.description,preview,SelectedB))
        }
        else {
            console.log("insede insfni")
            toast.error(`please add branches`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined, theme: "colored"
            })
        }
        e.preventDefault();
    }
    //   STEP 2 FORM STARTS
    const products = useSelector(state => state.products)
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [optionsP, setOptionsp] = useState([])

    useEffect(() => {
        let array = []
        if (products.data) {
            products.data.data.map((item, index) => {
                array.push({ label: item.product_list.product_name, value: item.product_id })
            })
        }
        setOptionsp(array)
    }, [products])

    function getDropdownButtonLabel1({ placeholderButtonLabel, value }) {
        if (value && value.some((o) => o.value === "*")) {
            return `${placeholderButtonLabel}: All`;
        } else {
            return `${placeholderButtonLabel}: ${value.length} selected`;
        }
    }
    function onChange1(value, event) {
        if (event.action === "select-option" && event.option.value === "*") {
            this.setState(this.options);
        } else if (
            event.action === "deselect-option" &&
            event.option.value === "*"
        ) {
            this.setState([]);
        } else if (event.action === "deselect-option") {
            this.setState(value.filter((o) => o.value !== "*"));
        } else if (value.length === this.options.length - 1) {
            this.setState(this.options);
        } else {
            this.setState(value);
        }
    }

    const displayCategory = () => {

        if (optionsP) {
            return <div id="catDropdown" className='categorySelect' style={{ paddingBottom: "400px" }}><ReactMultiselectCheckboxes
                options={[{ label: "All", value: "*" }, ...optionsP]}
                placeholderButtonLabel="Products"
                getDropdownButtonLabel={getDropdownButtonLabel1}
                value={selectedProducts}
                onChange={onChange1}
                setState={setSelectedProducts}
                menuIsOpen={true}
                styles={{ dropdownButton: base => ({ ...base, zIndex: 0 }) }}
                required
            /></div>
        }

    }
    // Add adons functions start
    const [addon,setAddon]=useState({
        title:"",
        sku:"",
        order:null,
        price:null
      })
      const handleChangeAddon=(value)=>(event)=>{
        setAddon({...addon,[value]:event.target.value})
      }
    // Add adons functions end
    const main = () => {
        if (step === 1) {
            return (
                <><AddNewProduct
                    sideToggle={props.sideToggle}
                    displayBranch={displayBranch}
                    setStep={setStep}
                    imageUpload={imageUpload}
                    uploadedImage={uploadedImage}
                    preview={preview}
                    Newproduct={Newproduct}
                    handleChange={handleChange}
                    nextStep={nextStep}

                />

                </>)
        }
        else if (step === 2) {
            return (
                <><AddAddons
                    sideToggle={props.sideToggle}
                    setStep={setStep}
                    displayCategory={displayCategory}
                    addon={addon}
                    handleChangeAddon={handleChangeAddon}
                />

                </>)
        }
        else {
            return <><AddProductToCategories
                sideToggle={props.sideToggle}
                setStep={setStep}
                displayCategory={displayCategory}
            />

            </>
        }
    }
    return (
        <div>
            {main()}
        </div>
    );
};

export default AddNewFoodMain;