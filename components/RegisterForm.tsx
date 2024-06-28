'use client'
import { useState } from "react"

export default function RegisterForm() {

    const [userId, setUserId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify({
                    userId,
                    name,
                    email,
                    phone,
                    password
                })
            })

            if (response.ok) {
                alert('User created successfully')
                setUserId('')
                setName('')
                setEmail('')
                setPhone('')
                setPassword('')
            } else {
                alert('Failed to create user')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const [exists, setExists] = useState(false)

    const checkUserExistence = async (userId: string) => {
        try {
            const response = await fetch(`/api/users/${userId}`)
            if (response.ok) {
                setExists(true)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="w-1/3 mt-10">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">User ID</label>
                <input type="text" id="userId" value={userId} onBlur={e => checkUserExistence(e.target.value)} onChange={e => {setUserId(e.target.value); setExists(false)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="johnnyorange" required />
                {exists && <p className="text-red-500">User already exists</p>}
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Johnny Orangeseed" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Johnny Orangeseed" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Active Phone Number</label>
                <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="081211212212" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="••••••••" required />
            </div>
            <button type="submit" disabled={exists} className="btn btn-blue text-white w-full disabled:bg-gray-500">Register</button>

        </form>
    )
}