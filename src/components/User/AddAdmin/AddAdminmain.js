import React, { useEffect, useState } from 'react';
import ReactMultiselectCheckboxes from 'react-multiselect-checkboxes/lib/ReactMultiselectCheckboxes';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getBranches } from '../../../store/actionCreators/Branch/BranchAction';
import AddAdmin from './AddAdmin';
import AddPermissions from './AddPermissions';

const AddAdminmain = (props) => {
  const dispatch = useDispatch();
  const branch = useSelector(state => state.branch)
  const [selectedBranches, setSelected] = useState([]);
  const [options, setOptions] = useState([])
  const [step, setStep] = useState(1);
  const [validated, setValidated] = useState(false);
  useEffect(() => {
    dispatch(getBranches());
    console.log("Branch", branch)
  }, [])
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
  const onNext = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    else {
      setValidated(true);
      if (selectedBranches.length > 0) {
        let SelectedB = []
        selectedBranches.map((item, index) => {
          SelectedB.push(item.value)
        })
        setStep(step + 1)

        // dispatch(addNewCategory(catName.name,catName.description,preview,SelectedB))
      }
      else {
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

    e.preventDefault();

  }
  const main = () => {
    if (step === 1) {
      return (
        <AddAdmin
          sideToggle={props.sideToggle}
          displayBranch={displayBranch}
          onNext={onNext}
          validated={validated}
        />
      )
    }
    else return (
      <AddPermissions
        sideToggle={props.sideToggle}
        displayBranch={displayBranch}
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

export default AddAdminmain;