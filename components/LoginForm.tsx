'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export default function LoginForm() {

    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await signIn('credentials', {
                userId,
                password,
                redirect: false
            });

            if (response?.ok) { 
                router.push('/dashboard')
                router.refresh();
            } else {
                alert('Failed to login. Check your username and password!')
            }
        } catch (error) {
            console.log(error)  
        }
    }
    

    return (
        <form onSubmit={handleSubmit} className="w-1/3 mt-10">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">User ID</label>
                <input type="text" id="userId" value={userId} onChange={e => setUserId(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="johnnyorange" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="••••••••" required />
            </div>
            <button type="submit" className="btn btn-blue text-white w-full disabled:bg-gray-500">Login</button>

        </form>
    )
}