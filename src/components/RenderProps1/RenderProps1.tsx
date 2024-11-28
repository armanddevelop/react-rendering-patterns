type ChildComponentProps = {
  render: (value: string) => JSX.Element;
};

export const ChildComponent: React.FC<ChildComponentProps> = ({
  render,
}): JSX.Element => {
  return <div>{render("")}</div>;
};

export const ParentComponent = (): JSX.Element => {
  const handleName = (value: string) => <p>Hello, {value}!</p>;
  return (
    <>
      <ChildComponent render={() => handleName("chue yeye")} />
    </>
  );
};
