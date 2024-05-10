import React from "react";

function Page3({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality..."
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Adderss"
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, address: e.target.value });
        }}
      />
       <input
        type="text"
        placeholder="pincode"
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, pincode: e.target.value });
        }}
      />
    </div>
  );
}

export default Page3;
