'use client'

import { useState } from "react"

export default function BookingForm() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [service, setService] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    
    return (
        <form className="w-1/3 mt-10">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Johnny Orangeseed" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Active Phone Number</label>
                <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="081211212212" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Type of Service</label>
                <div className="radio flex items-center">
                    <input type="radio" value="Haircuts and styling" checked={service === "Haircuts and styling"} onChange={e => setService(e.target.value)} />
                    <label className="ms-2">
                        Haircuts and styling
                    </label>
                </div>
                <div className="radio flex items-center">
                    <input type="radio" value="Manicure and pedicure" checked={service === "Manicure and pedicure"} onChange={e => setService(e.target.value)} />
                    <label className="ms-2">
                        Manicure and pedicure
                    </label>
                </div>
                <div className="radio flex items-center">
                    <input type="radio" value="Facial treatments" checked={service === "Facial treatments"} onChange={e => setService(e.target.value)} />
                    <label className="ms-2">
                        Facial treatments
                    </label>
                </div>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Date and Time</label>
                <div className="">
                    <input type="date" value={date} onChange={e => setDate(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"/>
                    {
                        date && 
                        <ul id="timetable" className="grid w-full grid-cols-2 gap-2 mt-5">
                            {["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"].map((timeval) => {
                                return (
                                    <li>
                                        <input type="radio" checked={time === timeval} onChange={e => setTime(e.target.value)} id={timeval} value={timeval} className="hidden peer" name="timetable" />
                                        <label htmlFor={timeval}
                                        className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600  peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500">
                                            {timeval}
                                        </label>
                                    </li>
                                )
                            })}
                        </ul>
                    }
                </div>

            </div>

        </form>
    )
}