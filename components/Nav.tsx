import Link from "next/link";
import Image from "next/image"

const Nav = () => {
    return (
        <nav className="w-full bg-gray-200">
            <div className="mx-auto max-w-7xl flex h-16 items-center">
                <div className="px-5 flex justify-between w-full md:w-auto flex-shrink-0">
                <Link href = '/'>
                    <div className="flex items-center gap-2">
                            <Image src="/logo2.png" alt="AWAS" width={40} height={40} />
                            <h1 className='text-black text-xl'><b>SEA Salon</b></h1>
                    </div>
                </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;