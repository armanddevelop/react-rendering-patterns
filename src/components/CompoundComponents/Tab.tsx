import React from "react";

interface ITabProps extends React.PropsWithChildren {
  label: string;
}

const Tab: React.FC<ITabProps> = ({ label, children }): JSX.Element => {
  return (
    <>
      <em>{label}</em>
      <span>{children}</span>
    </>
  );
};

export default Tab;
