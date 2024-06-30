"use client"
import { useEffect, useState } from "react";

export default  function PastReservations({ session }: any) {

    const [listReservations, setListReservations] = useState([]);


    
    useEffect(() => {
        const fetchlistReservations = async () => {
            try {
                const response = await fetch(`/api/users/${session?.user?.id}/reservations`);
                const data = await response.json();
                setListReservations(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchlistReservations();
    }, [])

    return (
        <div className="w-2/3 p-5 flex flex-col justify-center items-center">
            { listReservations.map((reservation: any) => (
                <div key={reservation.id} className="w-full border border-gray-300 my-3 bg-white shadow overflow-hidden rounded-lg">
                    <div className="flex justify-between">
                        <div className="px-6 py-5">
                            <div className="flex gap-5 items-center">
                                <h3 className="text-lg font-medium text-gray-900">{reservation.name}</h3>
                                <p className="max-w-2xl text-sm text-gray-500">{reservation.phone}</p>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">{reservation.service.name}</h3>
                            <p>{reservation.branch.name}</p>
                            <p className="max-w-2xl text-sm text-gray-500">{reservation.date} {reservation.time}</p>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}