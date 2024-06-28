import BookingForm from "@/components/BookingForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Book() {
    const session = await getServerSession();
    
    if (!session) {
        redirect("/login");
    }

    return (
        <div className="p-5 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">Book an Appointment</h1>
            <BookingForm />
        </div>
    )
}