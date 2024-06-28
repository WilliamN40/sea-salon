import PastReservations from "@/components/PastReservations";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
    const session = await getServerSession(authOptions)
    return (
        <div className="p-5 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">Past Reservations</h1>
            <PastReservations session={session}/>
        </div>
    );
}