import Types from "prop-types";

export const UserList = ({ users, onDelete, onSalaryUp }) => {
  const rowStyle = (salary) => {
    return salary > 800000 ? { color: "blueviolet" } : null;
  };
  return (
    <div>
      <h1>UserList</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th> 
            <th>surname</th>
            <th>salary</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((elm) => (
            <tr key={elm.id} style={rowStyle(elm.salary)}>
              <td>{elm.id}</td>
              <td>{elm.name}</td>
              <td>{elm.surname}</td>
              <td>{elm.salary} AMD</td>
              <td>
                <div className="buttonsWrapper">
                  <button onClick={() => onDelete(elm.id)}>Delete</button>
                  <button onClick={() => onSalaryUp(elm.id)}>Salary up</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

UserList.propTypes = {
  users: Types.arrayOf(
    Types.exact({
      id: Types.string,
      name: Types.string,
      surname: Types.string,
      salary: Types.number,
    })
  ),
  onDelete: Types.func,
  onSalaryUp: Types.func,
};
