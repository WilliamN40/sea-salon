import Link from "next/link";
import Image from "next/image"
import { getServerSession } from "next-auth";
import SignOut from "./SignOut";
import { authOptions } from "@/utils/auth";

const Nav = async () => {

    const session = await getServerSession(authOptions);
    return (
        <nav className="w-full bg-gradient-to-r from-cyan-100 to-blue-100">
            <div className="mx-auto max-w-7xl flex h-16 items-center">
                <div className="px-5 flex justify-between w-full flex-shrink-0 items-center">
                <Link href = '/'>
                    <div className="flex items-center gap-2">
                            <Image src="/logo2.png" alt="SEA Salon" width={40} height={40} />
                            <h1 className='text-black text-xl'><b>SEA Salon</b></h1>
                    </div>
                </Link>
                { !session &&
                <div className="flex gap-5">
                    <Link href="/register">Register</Link>
                    <Link href="/login">Login</Link>
                </div>
                }

                { session &&
                <div className="flex gap-5">
                    {session.user?.name}
                    <Link href="/book">Book an Appointment</Link>
                    <Link href="/dashboard">Dashboard</Link>
                    { session.user?.role === "Admin" && <Link href="/admin">Admin Dashboard</Link> }
                    <SignOut />
                </div>
                }

                </div>
            </div>
        </nav>
    )
}

export default Nav;