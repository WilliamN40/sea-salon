'use client'

import prisma from "@/utils/prisma"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function BookingForm() {
    const router = useRouter()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [branchId, setBranchId] = useState(0)
    const [serviceId, setServiceId] = useState(0)
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/reservation/new', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    phone,
                    branchId,
                    serviceId,
                    date,
                    time
                })
            })
            
            if (response.ok) {
                alert('Reservation created successfully')
                router.push("/dashboard")
            } else {
                alert('Failed to create reservation')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const [booked, setBooked]: any = useState([])

    const [listServices, setListServices]:any = useState([])
    const [listBranches, setListBranches]:any = useState([])
    
    const [timeList, setTimeList]:any = useState([])
    
    useEffect(() => {
        const fetchListBranches = async () => {
            try {
                const response = await fetch('/api/branches')
                const data = await response.json()
                setListBranches(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchListBranches()
    }, [])
    
    useEffect(() => {
        const fetchListServices = async () => {
            try {
                const response = await fetch(`/api/branches/${branchId}/services`)
                const data = await response.json()
                setListServices(data)
            } catch (error) {
                console.log(error)
            }
        }
        if (branchId) {
            fetchListServices()
        }
    }, [branchId])
    
    useEffect(() => {
        const checkBooked = async (serviceId: number, date: string) => {
            try {
                const response = await fetch(`/api/reservation/booked/${serviceId}/${date}`)
                const data = await response.json()
                setBooked(data)
            } catch (error) {
                console.log(error)
            }
        }

        if (branchId && serviceId && date) {
            checkBooked(serviceId, date)
        }

    }, [serviceId, date])

    useEffect(() => {
        const fetchTimeList = async () => {
            setTimeList([])
            try {
                const response = await fetch(`/api/services/${serviceId}/time`)
                const data = await response.json()
                setTimeList(data)
            } catch (error) {
                console.log(error)
            }
        }
        if (serviceId) {
            fetchTimeList()
        }
    }, [serviceId])



    return (
        <form onSubmit={handleSubmit} className="w-1/3 mt-10">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Johnny Orangeseed" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Active Phone Number</label>
                <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="081211212212" required />
            </div>

            <div className="mb-5">
                <div className="grid grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Branch</label>
                        { listBranches.map((branchval: any) => (
                            <div key={branchval.id} className="radio flex items-center">
                                <input type="radio" value={branchval.id} checked={branchId === branchval.id} onChange={e => setBranchId(parseInt(e.target.value))} />
                                <label className="ms-2">
                                    {branchval.name}
                                </label>
                            </div>
                        ))}    
                    </div>
                    { branchId !== 0 && (
                    <div className="border border-gray-300 p-3 rounded-lg">
                        <h1 className="text-xl font-weight-extrabold">{listBranches.find((branchval: any) => branchval.id === branchId)?.name}</h1>
                        <p>Opening Time: {listBranches.find((branchval: any) => branchval.id === branchId)?.openingtime}</p>
                        <p>Closing Time: {listBranches.find((branchval: any) => branchval.id === branchId)?.closingtime}</p>
                    </div>
                    )}
                </div>
            </div>


            { branchId !== 0 && (            
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Type of Service</label>
                    { listServices.map((serviceval: any) => (
                        <div key={serviceval.id} className="radio flex items-center">
                            <input type="radio" value={serviceval.id} checked={serviceId === serviceval.id} onChange={e => setServiceId(parseInt(e.target.value))} />
                            <label className="ms-2">
                                {serviceval.name}
                            </label>
                        </div>
                    ))}    
                </div>
            )
            }
                

            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Date and Time</label>
                <div className="">
                    <input type="date" value={date} onChange={e => setDate(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"/>
                    {
                        date && 
                        <ul id="timetable" className="grid w-full grid-cols-2 gap-2 mt-5">
                            {timeList.map((timeval: any) => {
                                return (
                                    <li key={timeval}>
                                        <input type="radio" disabled={booked.includes(timeval)} checked={time === timeval} onChange={e => setTime(e.target.value)} id={timeval} value={timeval} className="hidden peer" name="timetable" />
                                        <label htmlFor={timeval}
                                        className="peer-disabled:bg-gray-50 peer-disabled:border-gray-200 peer-disabled:cursor-not-allowed inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600  peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500">
                                            {timeval}
                                        </label>
                                    </li>
                                )
                            })}
                        </ul>
                    }
                </div>

            </div>

            <button type="submit" className="btn btn-blue text-white w-full">Book Now</button>
        </form>
    )
}