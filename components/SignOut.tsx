'use client'
import { signOut } from "next-auth/react"
import Link from "next/link"

export default function SignOut () {

    return (
        <button onClick={() => signOut()}>Logout</button>
    )
}
