import { useState } from "react";

type ToogleProps = {
  isToggled?: boolean;
  onToggle?: (value: boolean) => void;
};
export const Toggle: React.FC<ToogleProps> = ({
  isToggled = false,
  onToggle,
}): JSX.Element => {
  const [internalToggle, setInternalToggle] = useState<boolean>(isToggled);
  const handleToggle = () => {
    const newToggle = !internalToggle;
    setInternalToggle(newToggle);
    if (onToggle) onToggle(newToggle);
  };
  return (
    <button onClick={handleToggle}>{internalToggle ? "ON" : "OFF"}</button>
  );
};

export const ParentComponent = (): JSX.Element => {
  const [toggleState, setToggleState] = useState<boolean>(false);

  return (
    <div>
      <p>Toggle is {toggleState ? "ON" : "OFF"}</p>
      <Toggle isToggled={toggleState} onToggle={setToggleState} />
    </div>
  );
};
