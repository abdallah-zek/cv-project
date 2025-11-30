export default function Experience({ experienceList, setExperienceList }) {
  return (
    <>
      <br />
      <h2>Experience section </h2>
      <br />
      <div className="company-name">
        <label htmlFor="">Company Name</label>
        <input
          type="text"
          placeholder="Yassir"
          value={experienceList.company}
          onChange={function (e) {
            setExperienceList({ ...experienceList, company: e.target.value });
          }}
        />
      </div>

      <div className="start-year">
        <label htmlFor="">Start Year</label>
        <input
          type="text"
          placeholder="2023"
          value={experienceList.startYear}
          onChange={function (e) {
            setExperienceList({ ...experienceList, startYear: e.target.value });
          }}
        />
      </div>

      <div className="end-year">
        <label htmlFor="">End Year</label>
        <input
          type="text"
          placeholder="2027"
          value={experienceList.endYear}
          onChange={function (e) {
            setExperienceList({ ...experienceList, endYear: e.target.value });
          }}
        />
      </div>

      <div className="position">
        <label htmlFor="">Position</label>
        <input
          type="text"
          placeholder="software engineer"
          value={experienceList.position}
          onChange={function (e) {
            setExperienceList({ ...experienceList, position: e.target.value });
          }}
        />
      </div>
    </>
  );
}
