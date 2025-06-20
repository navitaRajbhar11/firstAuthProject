const userModel = require("../model/user");

async function handleUserSignUp(req, res) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.render("signup", { err: "All fields are required." });
  }
  await userModel.create({
    username,
    email,
    password,
  });
  return res.render("home.ejs");
}
async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.render("login", { err: "Email and password are required." });
  }
  const users = await userModel.findOne({
    email,
  });
  console.log("user :", users);
  if (!users)
    return res.render("login", { err: "invalid username and password" });
  return res.render("success.ejs");
}

module.exports = {
  handleUserSignUp,
  handleUserLogin,
};
