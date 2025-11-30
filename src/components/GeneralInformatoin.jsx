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

      <div className="first-name">
        <label>First Name</label>
        <input
          type="text"
          placeholder="Mohamed"
          value={personalInfo.firstName}
          onChange={(event) => {
            setPersonalInfo({ ...personalInfo, firstName: event.target.value });
          }}
        />
      </div>

      <div className="last-name">
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          placeholder="Hachi"
          value={personalInfo.lastName}
          onChange={(event) => {
            setPersonalInfo({ ...personalInfo, lastName: event.target.value });
          }}
        />
      </div>

      <div className="email">
        <label>Email</label>
        <input
          type="email"
          placeholder="chaibon@gmail.com"
          value={personalInfo.emailInput}
          onChange={(event) => {
            setPersonalInfo({
              ...personalInfo,
              emailInput: event.target.value,
            });
          }}
        />
      </div>
      <div className="tel">
        <label>Telephone</label>
        <input
          type="tel"
          placeholder="05 40 80 60 70 "
          value={personalInfo.phoneInput}
          onChange={(event) => {
            setPersonalInfo({
              ...personalInfo,
              phoneInput: event.target.value,
            });
          }}
        />
      </div>

      {/* <p>
        Preview: {firstName} {lastName}{" "}
      </p>
      <p>Email: {emailInput} </p>
      <p>phone: {phoneInput} </p> */}
    </div>
  );
}
