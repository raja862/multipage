import React from "react";

function Page1({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Name"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="email"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="password"
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
    </div>
  );
}

export default Page1;
