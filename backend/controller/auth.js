import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pclient from "../db/client.js";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
    try {
        const { email, username, password, firstName, lastName, userType } = req.body;

        const existingUser = await pclient.user.findFirst({
            where: { OR: [{ email }, { username }] }
        });

        if (existingUser) {
            return res.status(400).json({ error: "Email or Username already taken" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await pclient.user.create({
            data: {
                email,
                username,
                password: hashedPassword,
                firstName,
                lastName,
                Type: userType, // no type casting needed in JS
            }
        });

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await pclient.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.json({ message: "Login successful", token, userId: user.id, userType: user.Type });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
