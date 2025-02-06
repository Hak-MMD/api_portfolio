export const loginCheck = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  console.log(authHeader);

  if (authHeader && authHeader.startsWith("Basic ")) {
    const auth = new Buffer.from(authHeader.split(" ")[1], "base64")
      .toString()
      .split(":");
    const user = auth[0];
    const pass = auth[1];

    console.log(user, pass);
    console.log(process.env.ROLE, process.env.PASS);

    if (user == process.env.ROLE && pass == process.env.PASS) {
      next();
    } else {
      return res.status(401).json({ message: "Incorrect credentials!" });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};
