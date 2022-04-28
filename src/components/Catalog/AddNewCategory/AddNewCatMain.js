import React, { useEffect, useState } from 'react';
import ReactMultiselectCheckboxes from 'react-multiselect-checkboxes/lib/ReactMultiselectCheckboxes';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getBranches } from '../../../store/actionCreators/Branch/BranchAction';
import { getAllProducts } from '../../../store/actionCreators/Catalog/getProductsAction';
import AddCategoryToBranches from './AddCategoryToBranches';
import AddNewCategory from './AddNewCategory';
import "../../../css/catalog/common.css"
const AddNewCatMain = (props) => {
    // step1 vars
    const branch = useSelector(state => state.branch)
    const [options, setOptions] = useState([])
    const dispatch = useDispatch();
    const [selectedBranches, setSelected] = useState([]);
    const [uploadedImage, setUploadedIM] = useState(null);
    const [preview, setPreview] = useState()
    const [step, setStep] = useState(1)
    const [catName, setCatname] = useState({
        name: "",
        description: ""
    })

    useEffect(() => {
        dispatch(getBranches());
        dispatch(getAllProducts());
    }, [])
    // getting branches in a particular format
    useEffect(() => {
        let array = []
        if (branch.data) {
            branch.data.data.map((item, index) => {
                array.push({ label: item.branch_name, value: item.branch_id })
            })
        }
        setOptions(array)
        console.log(array)
    }, [branch])
    // HELPER FUNCTIONS branches  FOR CHECKBOXDROPDOWN
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
    // HELPER FUNCTIONS FOR branches CHECKBOXDROPDOWN ENDS
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
    // Fucntionality for upload and preview of image ENDS
    // OnClick for first form 
    const onClickCat = (e) => {
        if (selectedBranches.length > 0) {
            let SelectedB = []
            selectedBranches.map((item, index) => {
                SelectedB.push(item.value)
            })
            setStep(step + 1)
            e.preventDefault();

            console.log(step, catName, SelectedB)
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


    }
    const handleChange = (input) => (e) => {
        setCatname({ ...catName, [input]: e.target.value })
    }
    // OnClick for first form Ends 
    // STEP 1 ENDS
    // STEP 2 VARS
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
            return <div id="catDropdown" className='categorySelect' style={{paddingBottom:"400px"}}><ReactMultiselectCheckboxes
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
    //    STEP2 ENDS

    // logic for multipart form
    const main = () => {
        if (step === 1) {
            return (
                <><AddNewCategory
                
                    sideToggle={props.sideToggle}
                    catName={catName}
                    handleChange={handleChange}
                    imageUpload={imageUpload}
                    uploadedImage={uploadedImage}
                    preview={preview}
                    displayBranch={displayBranch}
                    onClickCat={onClickCat}
                />

                </>)
        }
        else {
            return <><AddCategoryToBranches
                sideToggle={props.sideToggle}
                displayCategory={displayCategory}
                setStep={setStep}
            />

            </>
        }
    }
    return (
        <div>{main()}
        </div>
    );
};

export default AddNewCatMain;