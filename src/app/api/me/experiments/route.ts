import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function GET(req: Request) {
    try {
        const auth = req.headers.get("authorization");
        if (!auth) {
            return NextResponse.json({ error: "Missing token" }, { status: 401 });
        }

        const token = auth.replace("Bearer ", "");
        const decoded = verifyToken(token) as { id: number } | null;

        if (!decoded) {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        const studentId = decoded.id;

        const logs = await prisma.studentExperimentLog.findMany({
            where: { studentId },
            orderBy: { startTime: "desc" },
            select: {
                id: true,
                startTime: true,
                endTime: true,
                completionStatus: true,
                recordedData: true,
                actionsLog: true,
                experiment: {
                    select: {
                        id: true,
                        name: true,
                        subject: true,
                    },
                },
            },
        });

        return NextResponse.json({ logs }, { status: 200 });

    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "Failed to fetch experiment records" },
            { status: 500 }
        );
    }
}
