import jwt from "jsonwebtoken"

export const generateToken = (userID, res) => {
    const token = jwt.sign({userID},process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("token", token, {
        httpOnly: true,  // prevent xss attacks: cross-site scripting
        secure: process.env.NODE_ENV === "development" ? false : true,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        sameSite: "strict" // prevent CSRF attacks
    });
}