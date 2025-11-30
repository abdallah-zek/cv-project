export default function GeneralInformation({ personalInfo, setPersonalInfo }) {
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
        value={personalInfo.firstName}
        onChange={(event) => {
          setPersonalInfo({ ...personalInfo, firstName: event.target.value });
        }}
      />

      <input
        type="text"
        placeholder="Last name"
        value={personalInfo.lastName}
        onChange={(event) => {
          setPersonalInfo({ ...personalInfo, lastName: event.target.value });
        }}
      />
      <input
        type="email"
        placeholder="Email"
        value={personalInfo.emailInput}
        onChange={(event) => {
          setPersonalInfo({ ...personalInfo, emailInput: event.target.value });
        }}
      />

      <input
        type="tel"
        placeholder="Phone"
        value={personalInfo.phoneInput}
        onChange={(event) => {
          setPersonalInfo({ ...personalInfo, phoneInput: event.target.value });
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
