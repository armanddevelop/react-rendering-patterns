import { useState } from "react";

interface IUserComponentProps {
  name: string;
}

const useLoading = (initialLoading: boolean = false) => {
  const [isLoading, setIsLoading] = useState<boolean>(initialLoading);

  return { isLoading, setIsLoading };
};

const UserComponent: React.FC<IUserComponentProps> = ({ name }) => {
  const { isLoading, setIsLoading } = useLoading(false);
  if (isLoading)
    return (
      <>
        <p>Loading ...</p>
        <button onClick={() => setIsLoading(!isLoading)}>Load</button>
      </>
    );

  return (
    <div>
      <p>Hello, {name}</p>
      <button onClick={() => setIsLoading(!isLoading)}>Simulate Loading</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name="patches" />;
};
