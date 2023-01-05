export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  //   const user = result ? JSON.parse(result) :null;
  //   let user = (result) => {
  //     if (result) {
  //       JSON.parse(result);
  //     } else user = null;
  //     return user;
  //   };
  let user;
  if (result) {
    user = JSON.parse(result);
  } else user = null;
  return user;
};
