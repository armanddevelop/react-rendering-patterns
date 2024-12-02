import { useState } from "react";

export const ControlledInput = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div>
      <input
        type="text"
        onChange={({ target: { value } }) => setValue(value)}
        value={value}
        placeholder="Voucher Code"
      />
      <p>
        Voucher Code: <b>{value}</b>
      </p>
    </div>
  );
};
