import { successAlert } from "../components/toastGroup";

export default function Fake() {
  const handelFake = () => {
    successAlert("Successfully minted!");
  };
  return (
    <div className="mt-[200px]">
      <button onClick={() => handelFake()}>click me</button>
    </div>
  );
}
