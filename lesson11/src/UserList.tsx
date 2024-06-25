import type { IUser } from "./types";

interface IProps {
  users: IUser[];
  onDelete: (id: number) => void;
}

export const UserList: React.FC<IProps> = ({ users, onDelete }) => {
  return (
    <>
      <h1>User List</h1>
      {users.map((elm) => (
        <div key={elm.id}>
          <p>{elm.id}</p>
          <button onClick={() => onDelete(elm.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};
