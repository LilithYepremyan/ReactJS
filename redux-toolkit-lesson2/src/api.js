export const getUsers = () => {
  return {
    promise: fetch("https://randomuser.me/api?results=8&inc=name,id").then(
      (r) => r.json()
    ),
    success: "users/fullfiled",
    delete:"users/deleteUser"
  };
};
