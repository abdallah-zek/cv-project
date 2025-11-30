import Education from "./Education";
import Experience from "./Experience";
import GeneralInformation from "./GeneralInformatoin";
import { useState } from "react";

export default function Form() {
  // GenralInformation state
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    emailInput: "",
    phoneInput: "",
  });

  // Education component state
  const [educationList, setEducationList] = useState([
    {
      id: "1",
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  ]);
  //  Experience component state
  const [experienceList, setExperienceList] = useState({
    company: "",
    startYear: "",
    endYear: "",
    position: "",
  });
  function handleSubmit(e) {
    e.preventDefault();

    const cvData = {
      generalInformation: personalInfo,
      education: educationList,
      experience: experienceList,
    };

    console.log(cvData);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Education
          educationList={educationList}
          setEducationList={setEducationList}
        />
        <Experience
          experienceList={experienceList}
          setExperienceList={setExperienceList}
        />
        <GeneralInformation
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
