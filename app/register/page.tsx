import RegisterForm from "@/components/RegisterForm";

export default function Register() {
    return (
        <div className="p-5 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">Register an Account</h1>
            <RegisterForm />
        </div>
    );
}