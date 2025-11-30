import { useState } from "react";

export default function GeneralInformation() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  /*
  console.log(useState([]));
    okay , lets fix this first ! 
    useState( [])
    what wiill this return 
    it returned an empty array , and updater function 
    after we distracte it , we will have this two , 
    if we have multiple values in the array its fine we just intiate the first value of the array to the input and thats all bruh 

   */

  return (
    <div className="general-info">
      <h2>General Information</h2>

      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Email"
        value={emailInput}
        onChange={(event) => {
          setEmailInput(event.target.value);
        }}
      />

      <input
        type="tel"
        placeholder="Phone"
        value={phoneInput}
        onChange={(event) => {
          setPhoneInput(event.target.value);
        }}
      />

      {/* <p>
        Preview: {firstName} {lastName}{" "}
      </p>
      <p>Email: {emailInput} </p>
      <p>phone: {phoneInput} </p> */}
    </div>
  );
}
