"use client"
import { useEffect, useState } from "react";


function AddService({ selectedBranchId, listServices, setListServices}: any) {

    const [serviceName, setServiceName] = useState('')
    const [duration, setDuration] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/services/new', {
                method: 'POST',
                body: JSON.stringify({
                    branchId: selectedBranchId,
                    name: serviceName,
                    duration: parseInt(duration)
                })
            })

            if (response.ok) {
                const data = await response.json()
                setListServices([...listServices, data])
            } else {
                throw new Error('Failed to add service')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col border border-gray-300 my-3 bg-white shadow overflow-hidden rounded-lg p-3 text-xl">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Service Name</label>
                <input type="text" id="name" value={serviceName} onChange={e => setServiceName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Facial" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Duration (hours)</label>
                <input type="number" id="duration" value={duration} onChange={e => setDuration(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1" required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add Service</button>
        </form>
    )
}

function AddBranch({ setSelectedBranchId, listBranches, setListBranches}: any) {

    const [branchName, setBranchName] = useState('')
    const [branchLocation, setBranchLocation] = useState('')
    const [branchOpenTime, setBranchOpenTime] = useState('')
    const [branchCloseTime, setBranchCloseTime] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/branches/new', {
                method: 'POST',
                body: JSON.stringify({
                    name: branchName,
                    location: branchLocation,
                    openingtime: branchOpenTime,
                    closingtime: branchCloseTime
                })
            })

            if (response.ok) {
                const data = await response.json()
                setListBranches([...listBranches, data])
                alert('Branch added successfully')
                setBranchName('')
                setBranchLocation('')
                setBranchOpenTime('')
                setBranchCloseTime('')
                setSelectedBranchId(data.id)
            } else {
                throw new Error('Failed to add branch')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col border border-gray-300 my-3 bg-white shadow overflow-hidden rounded-lg p-3 text-xl">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Branch Name</label>
                <input type="text" id="name" value={branchName} onChange={e => setBranchName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Branch 2" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Branch Location</label>
                <input type="text" id="location" value={branchLocation} onChange={e => setBranchLocation(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Singapore" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Branch Opening Time</label>
                <select id="open" value={branchOpenTime} onChange={e => setBranchOpenTime(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                    <option value="00:00">00:00</option>
                    <option value="01:00">01:00</option>
                    <option value="02:00">02:00</option>
                    <option value="03:00">03:00</option>
                    <option value="04:00">04:00</option>
                    <option value="05:00">05:00</option>
                    <option value="06:00">06:00</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                    <option value="23:00">23:00</option>
                </select>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Branch Closing Time</label>
                <select id="close" value={branchCloseTime} onChange={e => setBranchCloseTime(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                    <option value="00:00">00:00</option>
                    <option value="01:00">01:00</option>
                    <option value="02:00">02:00</option>
                    <option value="03:00">03:00</option>
                    <option value="04:00">04:00</option>
                    <option value="05:00">05:00</option>
                    <option value="06:00">06:00</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                    <option value="23:00">23:00</option>
                </select>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add Branch</button>
        </form>
    )
}

export default function AdminDashboard() {
    
    const [selectedBranchId, setSelectedBranchId] = useState(0);
    const [listServices, setListServices] = useState([]);
    const [listBranches, setListBranches]: any = useState([]);

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
                const response = await fetch(`/api/branches/${selectedBranchId}/services`)
                const data = await response.json()
                setListServices(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchListServices()
    }, [selectedBranchId])

    const handleDeleteService = async (service: any) => {

        try {
            const response = await fetch(`/api/services/${service.id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setListServices(listServices.filter((s: any) => s.id !== service.id));
            } else {
                throw new Error('Failed to delete service');
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleDeleteBranch = async (branch: any) => {
        const confirmation = confirm("Deleting this branch will delete all of its services and reservations. Are you sure you want to delete this branch?")
        
        if (confirmation) {
            try {
                const response = await fetch(`/api/branches/${branch.id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    setListBranches(listBranches.filter((b: any) => b.id !== branch.id));
                    setSelectedBranchId(0);
                } else {
                    throw new Error('Failed to delete branch');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="flex flex-col w-1/2 items-center p-5">

            <div className="flex justify-around w-full">
                <div className="w-1/2">
                    <label className="block mb-2 text-lg font-medium text-gray-900 text-center">Branch</label>
                    <select value={selectedBranchId} onChange={e => setSelectedBranchId(parseInt(e.target.value))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option disabled={true} key={0} value={0}>Pick a branch</option>
                        {listBranches.map((branch: any) => (
                            <option key={branch.id} value={branch.id}>{branch.name}</option>
                        ))}
                        <option key={-1} value={-1}>-- Create new branch --</option>
                    </select>
                </div>
            </div>

            { selectedBranchId === -1 && (
                <div className="w-1/2 my-4">
                    <h2 className="text-3xl text-center">Add new branch</h2>
                    <AddBranch setSelectedBranchId={setSelectedBranchId} listBranches={listBranches} setListBranches={setListBranches}/>
                </div>
            )}       
            

            { selectedBranchId > 0  && (
            <div className="flex flex-col w-full items-center">
                <button onClick={() => handleDeleteBranch({id: selectedBranchId})} className="btn btn-red my-3 w-1/2">Delete branch</button>
                <div className="flex w-1/2 justify-around">
                    <p>Opening Time: {listBranches.find((branch: any) => branch.id === selectedBranchId)?.openingtime}</p>
                    <p>Closing Time: {listBranches.find((branch: any) => branch.id === selectedBranchId)?.closingtime}</p>
                </div>
                <div className="my-2 flex justify-around w-full">
                    <div>
                        <h2 className="text-3xl text-center">Services available</h2>
                        <ul className="list-disc">
                            {listServices.map((service: any) => (
                                <div key={service.id} className="flex justify-between gap-10 border border-gray-300 my-3 bg-white shadow overflow-hidden sm:rounded-lg p-3 text-xl">
                                    {service.name}
                                    <button onClick={() => handleDeleteService(service)} className="text-red-500">Delete</button>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-3xl text-center">Add new service</h2>
                        <AddService selectedBranchId={selectedBranchId} listServices={listServices} setListServices={setListServices}/>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}