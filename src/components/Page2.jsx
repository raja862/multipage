import React from "react";

function Page2({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="Username"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, userName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Department"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, department: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="PhoneNumber"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, phoneNumber: e.target.value });
        }}
      />
    </div>
  );
}

export default Page2;
