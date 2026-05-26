import { memo } from 'react';

type Props = {
  firstname: string;
  lastname: string;
};

const Profile = ({ firstname, lastname }: Props) => {

  console.log("Rendered Profile Component");

  return (
    <div>
      <h2>Profile Component</h2>

      <p>First Name: {firstname}</p>
      <p>Last Name: {lastname}</p>
    </div>
  );
};

export default memo(Profile);