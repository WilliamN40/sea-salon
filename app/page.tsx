import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Image style={{objectFit:"cover"}} src="/bg.png" alt="bg" fill={true}/>
      <p>services</p>
    </div>
  );
}