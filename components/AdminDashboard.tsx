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

export default function AdminDashboard() {
    
    const [selectedBranchId, setSelectedBranchId] = useState(0);
    const [listServices, setListServices] = useState([]);
    const [listBranches, setListBranches] = useState([]);

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

    const handleDelete = async (service: any) => {

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


    return (
        <div className="flex flex-col w-1/2 items-center p-5">
            <div className="w-1/2">
                <label className="block mb-2 text-lg font-medium text-gray-900 text-center">Branch</label>
                <select value={selectedBranchId} onChange={e => setSelectedBranchId(parseInt(e.target.value))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option disabled={true} key={0} value={0}>Pick a branch</option>
                    {listBranches.map((branch: any) => (
                        <option key={branch.id} value={branch.id}>{branch.name}</option>
                    ))}
                </select>
            </div>

            { selectedBranchId !== 0  && (
                <div className="p-10 flex justify-around w-full">
                    <div>
                        <h2 className="text-3xl text-center">Services available</h2>
                        <ul className="list-disc">
                            {listServices.map((service: any) => (
                                <div key={service.id} className="flex justify-between gap-10 border border-gray-300 my-3 bg-white shadow overflow-hidden sm:rounded-lg p-3 text-xl">
                                    {service.name}
                                    <button onClick={() => handleDelete(service)} className="text-red-500">Delete</button>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-3xl text-center">Add new service</h2>
                        <AddService selectedBranchId={selectedBranchId} listServices={listServices} setListServices={setListServices}/>
                    </div>
                </div>
            )}
        </div>
    )
}