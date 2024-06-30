import prisma from "@/utils/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const service = await prisma.services.findUnique({
        where: {
            id: parseInt(params.id),
        },
    });

    if (!service) {
        return new Response("Service not found", { status: 404 });
    }

    const duration = service.duration;

    const branch = await prisma.branches.findUnique({
        where: {
            id: service?.branchId,
        },
    });

    if (!branch) {
        return new Response("Branch not found", { status: 404 });
    }

    const branchOpeningTime = parseInt(branch.openingtime.slice(0, 2));
    const branchClosingTime = parseInt(branch.closingtime.slice(0, 2));
    
    //return timelist based on duration, branchopeningtime, and branchclosingtime
    const timeList = []
    for (let time = branchOpeningTime; time + duration <= branchClosingTime; time += duration) {
        timeList.push(time.toString().padStart(2, '0') + ":00");
    }

    return new Response(JSON.stringify(timeList), { status: 200 });
}