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
        const decoded = verifyToken(token) as { id: number; role: string } | null;

        if (!decoded) {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        const url = new URL(req.url);
        const subject = url.searchParams.get("subject") || undefined;
        const keyword = url.searchParams.get("keyword") || undefined;

        const experiments = await prisma.experiment.findMany({
            where: {
                AND: [
                    subject ? { subject: subject as any } : {},
                    keyword
                        ? {
                            name: { contains: keyword },
                        }
                        : {},
                ],
            },
            orderBy: { createdAt: "desc" },
            select: {
                id: true,
                name: true,
                subject: true,
                description: true,
                version: true,
                sceneAssetPath: true,
                createdAt: true,
            },
        });

        return NextResponse.json({ experiments }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "Failed to fetch experiments" },
            { status: 500 }
        );
    }
}
