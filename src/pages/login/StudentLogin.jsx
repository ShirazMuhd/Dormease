import React from "react";
import LoginSection from "../../components/LoginSection";

const StudentLogin = () => {
  return (
    <div
      class="login"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <LoginSection
        label1="Admission number"
        label2="password"
        user="student"
      />
    </div>
  );
};

export default StudentLogin;
