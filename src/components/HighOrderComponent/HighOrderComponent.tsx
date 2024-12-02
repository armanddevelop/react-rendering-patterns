import React from "react";

interface IUserComponentProps {
  name: string;
}

function withLoading<T extends object>(Component: React.ComponentType<T>) {
  return (props: T & { isLoading: boolean }) => {
    const { isLoading, ...rest } = props;
    return isLoading ? <p>Loading....</p> : <Component {...(rest as T)} />;
  };
}

const UserComponent: React.FC<IUserComponentProps> = ({ name }) => (
  <p>Hello, {name} !!!</p>
);

const UserWithLoading = withLoading(UserComponent);

export const ParentComponent = () => {
  return (
    <div>
      <UserWithLoading isLoading={true} name="Chue" />
      <UserWithLoading isLoading={false} name="Chue" />
    </div>
  );
};
