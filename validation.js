module.exports.registerValidation = (username, password) => {
  const errors = [];

  if (username === "")
    errors.push({ message: "Please Fill The Username Area" });

    
  if (password === "")
    errors.push({ message: "Please Fill The Password Area" });


  if (password.length < 6)
    errors.push({ message: "password lenght minimum will 6" });

  return errors;
};
