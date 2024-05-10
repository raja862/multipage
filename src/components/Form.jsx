import React, { useState } from "react";
import Page1 from "./Page1.jsx";
import Page2 from "./Page2.jsx";
import Page3 from "./Page3.jsx";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userName: "",
    department: "",
    phoneNumber: "",
    nationality: "",
    address: "",
    pincode:"",
  });

  const FormTitles = ["Page 1", "Page2", "Page3"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Page1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Page2 formData={formData} setFormData={setFormData} />;
    } else {
      return <Page3 formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      {/* <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div> */}
      <h2>ADD YOUR DETAILS</h2>
      <div className="form-container">
        <div className="header">
           <h1>{FormTitles[page]}</h1> 
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
