const 
const users = [
  {
    id: 1,
    name: "john",
    email: "john@gmail.com",
    password: "john123",
    confirmPassword: "john123",
    role: "user",
  },
  {
    id: 2,
    name: "brock",
    email: "brock@gmail.com",
    password: "brock123",
    confirmPassword: "brock123",
    role: "admin",
  },
];

const signToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECURITY,{
        expiresIn:process.env.JWT_EXPIRES)
    }


exports.getAllUsers = (req, res) => {
  exports.login = () => {};
  exports.signup = () => {};

  
};
