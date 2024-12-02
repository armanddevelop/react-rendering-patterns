import React from "react";

type IDataItem = {
  id: number;
  name: string;
  description: string;
  img: string;
};

interface IDataPresenterProps {
  data: Array<IDataItem>;
}
export const DataPresenter: React.FC<IDataPresenterProps> = ({ data }) => {
  return (
    <>
      {data.map(({ img, name, description, id }) => (
        <React.Fragment key={id}>
          <img src={img} alt={name} />
          <em>{description}</em>
        </React.Fragment>
      ))}
    </>
  );
};
