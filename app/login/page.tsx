import LoginForm from "@/components/LoginForm";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Login() {
    const session = await getServerSession();
    if (session) {
        redirect("/");
    }
    return (
        <div className="p-5 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">Login to your Account</h1>
            <LoginForm />
            <div className="flex gap-2 my-2">
                <p>Don't have an account?</p>
                <Link className="underline" href="/register">Register</Link>
            </div>
        </div>
    );
}