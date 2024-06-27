import BookingForm from "@/components/BookingForm";

export default function Book() {
    return (
        <div className="p-5 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">Book an Appointment</h1>
            <BookingForm />
        </div>
    )
}