interface IChildComponentProps {
  data: Array<string>;
}

const ChildComponent: React.FC<IChildComponentProps> = ({
  data = [],
}): React.ReactNode => {
  return data.map((item) => <li key={item}>{item}</li>);
};

export default ChildComponent;
