import { useState } from "react";

interface IParentComponentProps {
  render: (data: Array<string>) => React.ReactNode;
}

const ParentComponent: React.FC<IParentComponentProps> = ({
  render,
}): JSX.Element => {
  const [data] = useState<Array<string>>([
    "apple",
    "banana",
    "lemon",
    "orange",
    "pineaple",
  ]);
  return <ul>{render(data)}</ul>;
};

export default ParentComponent;
