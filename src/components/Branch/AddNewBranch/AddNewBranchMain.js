import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactMultiselectCheckboxes from 'react-multiselect-checkboxes/lib/ReactMultiselectCheckboxes';
import AddNewBranch from './AddNewBranch';
import AddCatToBranch from './AddCatToBranch';
import { getAllFranchise } from '../../../store/actionCreators/Franchise/AddNewFranchiseAction';
import { toast } from 'react-toastify';

const AddNewBranchMain = (props) => {
    const dispatch = useDispatch();
    const franchise = useSelector(state => state.franchise)
    const [selectedFranchise, setSelected] = useState([]);
    const [step, setStep] = useState(2);
    const [options, setOptions] = useState([])
    // ADD NEW BRANCH FIRST PAGE
    const [newBranch, setNewBranch] = useState({
        BranchName: "",
        city: "",
        region: "",
        address: ""
    })
 
    useEffect(() => {
        let array = []
        if (franchise.data) {
            franchise.data.data.map((item, index) => {
                array.push({ label: item.franchise_name, value: item.franchise_id })
            })
        }
        setOptions(array)

    }, [franchise])

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

    const displayFranchise = () => {
        if (options) {
            return <div className='categorySelect'><ReactMultiselectCheckboxes
                options={[{ label: "All", value: "*" }, ...options]}
                placeholderButtonLabel="Franchise"
                getDropdownButtonLabel={getDropdownButtonLabel}
                value={selectedFranchise}
                onChange={onChange}
                setState={setSelected}
                required
            /></div>
        }

    }
    const handleNewBranchChange = (value) => (e) => {
        setNewBranch({ ...newBranch, [value]: e.target.value })
    }
    const onClickCat = (e) => {
        if (selectedFranchise.length > 0) {
            let SelectedB = []
            selectedFranchise.map((item, index) => {
                SelectedB.push(item.value)
            })
            setStep(step + 1)
           
            // dispatch(addNewCategory(catName.name,catName.description,preview,SelectedB))
        }
        else {
            toast.error(`please add Franchise`, {
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
    const main = () => {
        if (step === 1) {
            return (
                <AddNewBranch
                    sideToggle={props.sideToggle}
                    newBranch={newBranch}
                    setNewBranch={setNewBranch}
                    displayFranchise={displayFranchise}
                    onChange={handleNewBranchChange}
                    onClickCat={onClickCat}
                />
            )
        }
        else return (
            <AddCatToBranch
                sideToggle={props.sideToggle}
                setStep={setStep}
            />
        )
    }
    return (
        <div>
            {main()}
        </div>
    );
};

export default AddNewBranchMain;