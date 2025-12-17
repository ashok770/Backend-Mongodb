const mongoose = require("mongoose");
const validator = require("validator");
const { validate } = require("./User");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: [true, "Email already exist use another"],
    lowercase: true,
    validate: [validator.isEmail, "Please Enter a correct a email"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "users",
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 8,
    select: false,
  },
  passwordCounfirm: {
    type: String,
    required: [true, "Please Enter the Correct Password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password are not same",
    },
  },
  {
    timestamps:true,
  },
);

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,12);
    this.passwordCounfirm = undefined;
    next();

})
