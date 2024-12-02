import { useRef } from "react";

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSumbit = () => {
    if (inputRef.current) {
      alert(`Value Ref ${inputRef.current.value}`);
    }
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Voucher Code UncontrolledInput"
      />
      <button onClick={handleSumbit}>Submit</button>
    </div>
  );
};
