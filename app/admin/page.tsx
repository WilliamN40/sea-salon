import { getServerSession } from "next-auth/next"
import { authOptions } from "@/utils/auth";
import { redirect } from "next/navigation";
import AdminDashboard from "@/components/AdminDashboard";

export default async function Dashboard() {
    const session = await getServerSession(authOptions)
    if (!session || session.user?.role !== "Admin") {
        redirect("/login")
    }
    return (
        <div className="p-5 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">Admin Dashboard</h1>
            <AdminDashboard />
        </div>
    );
}