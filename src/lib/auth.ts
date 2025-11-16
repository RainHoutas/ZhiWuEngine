import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

/** 生成 Token */
export function signToken(payload: object) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

/** 验证 Token */
export function verifyToken(token: string) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch {
        return null;
    }
}
