// let x: number = 8;
// const x: number = 8;
// x = "ok"

import { useState } from "react";
import { UserList } from "./UserList";
import type { IUser } from "./types";

// console.log(x);

//enum
// enum profession {
//   frontend,
//   backend = 9,
//   fullstack
// }

// console.log(profession.frontend);
// console.log(profession.backend);
// console.log(profession.fullstack);

// function rand (items:number[]):number{
//   let index:number = Math.floor(Math.random()* items.length)
//   return items[index]
// }

//Generic

// function rand<T>(items: T[]): T {
//   let index: number = Math.floor(Math.random() * items.length);
//   return items[index];
// }

// let x: number = rand<number>([1, 2, 3, 4]);
// let y: string = rand<string>(["aa", "ss"]);

const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([
    { id: 101, name: "Ann" },
    { id: 102, name: "Hayk" },
    { id: 103, name: "Ani" },
  ]);

  const handleDelete = (id: number) => {
    setUsers(users.filter((x) => x.id !== id));
  };

  return (
    <>
      <UserList users={users}  onDelete= {handleDelete}/>
    </>
  );
};
export default App;
