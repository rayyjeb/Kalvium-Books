import React, { useState } from "react";
// using useforms
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Forms = () => {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();
// form submission
  const formSubmitHandler = (data) => {
    toast.success("Registration Successful", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    // Getting the existing credentials from local storage
    const StoreData =
      JSON.parse(localStorage.getItem("credentials")) || [];
    StoreData.push(data);
        // Saving the updated credentials to local storage
    localStorage.setItem("credentials", JSON.stringify(StoreData));

    console.log("data:", data);
  };
    // Getting the value of the password field using watch function
  const passwordValue = watch("password", "");
  // State to store whether the password is visible or not
  const [showPassword, setShowPassword] = useState(false);
 // Function to toggle the visibility of the password field
  const passwordShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="RegisterComponent">
      <ToastContainer />
      <div className="FormsParentDiv">
        <Link to="/">
          <div className="logoDivForms">
            {/* navbar */}
            <img src="../assets/kalvibookslogo.png"></img>
          </div>
        </Link>
        <div className="FormMainDiv">
          <form className="FormDiv" onSubmit={handleSubmit(formSubmitHandler)}>
            {/* header */}
            <h1>WELCOME ABOARD</h1>
            <br></br>
            {/* firstname input bar */}
            <input
              placeholder="First Name"
              className="formInputs"
              type="text"
              name="firstName"
              {...register("firstName", {
                required: "Please enter First Name",
                minLength: { value: 2, message: "Minimum 2 char required" },
              })}
            />

            {<p className="err">{errors.firstName?.message}</p>}

            <br></br>
            {/* email id input bar */}
            <input
              placeholder="Email Id"
              className="formInputs"
              type="text"
              name="email"
              {...register("email", {
                required: "Please enter email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter valid email",
                },
              })}
            />
            {<p className="err">{errors.email?.message}</p>}

            <br></br>
            {/* password input bar */}
            <input
              className="formInputs"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "Please enter Password",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters required",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  message: "Please enter a valid password",
                },
              })}
            />

            {<p className="err">{errors.password?.message}</p>}

            <br></br>
            {/* retype pasword input bar */}
            <input
              className="formInputs"
              type={showPassword ? "text" : "password"}
              name="retypePassword"
              placeholder="Re-Type Password"
              {...register("retypePassword", {
                validate: (value) =>
                  value === passwordValue || "Passwords do not match",
              })}
            />

            {<p className="err">{errors.retypePassword?.message}</p>}

            <label>
              {/* checkbox show password */}
              <input type="checkbox" onChange={passwordShow} /> Show Password
            </label>
            <br></br>
            <div className="FormParentButton flexButton">
              {/* submit button */}
              <input type="submit" value="Submit" className="Formbutton" />
             {/* reset button */}
              <button
                onClick={() => {
                  reset();
                }}
                className="Formbutton"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forms;
