import { useState } from "react";

export default function Education() {
  const [educationList, setEducationList] = useState([
    {
      id: "1",
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  ]);

  function addNewEducation() {
    const newEntry = {
      id: Date.now().toString,
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    }; 
    setEducationList([...educationList, newEntry]);
  }
  function handleChange(id, field, value) {
    const updateEducationList = educationList.map(function (entry) {
      if (entry.id === id) {
        return { ...entry, [field]: value };
      } else {
        return entry;
      }
    });
    setEducationList(updateEducationList);
  }

  return (
    <>
      <h2>Education</h2>
      {educationList.map(function (entry) {
        return (
          <div className="education" key={entry.id}>
            <div className="school">
              <label htmlFor="">School Name</label>
              <input
                type="text"
                value={entry.school}
                onChange={function (e) {
                  handleChange(entry.id, "school", e.target.value);
                }}
                placeholder="Zaian Achour"
              />
            </div>

            <div className="degree">
              <label htmlFor="">Degree</label>
              <input
                type="text"
                value={entry.degree}
                onChange={function (e) {
                  handleChange(entry.id, "degree", e.target.value);
                }}
                placeholder="Bachelor of cs"
              />
            </div>

            <div className="start-date">
              <label htmlFor="">Start date</label>
              <input
                type="text"
                value={entry.startDate}
                onChange={function (e) {
                  handleChange(entry.id, "startDate", e.target.value);
                }}
                placeholder="2019"
              />
            </div>

            <div className="End-date">
              <label htmlFor="">End date</label>
              <input
                type="text"
                value={entry.endDate}
                onChange={function (e) {
                  handleChange(entry.id, "endDate", e.target.value);
                }}
                placeholder="2024"
              />
            </div>
          </div>
        );
      })}
      <button onClick={addNewEducation}>Add Education</button>
    </>
  );
}
