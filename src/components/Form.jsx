import Education from "./Education";
import Experience from "./Experience";
import GeneralInformation from "./GeneralInformatoin";

export default function Form() {
  function handleClick() {}
  return (
    <>
      <form action="">
        <GeneralInformation />
        <Education />
        <Experience />
        <button onClick={handleClick}>Submit</button>
      </form>
    </>
  );
}
