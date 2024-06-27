import RatingSystem from "@/components/RatingSystem";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-[10vw]">
        <Image style={{objectFit:"cover"}} src="/bg.png" alt="bg" fill={true}/>
      </div>
      <div className="p-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-black text-3xl font-bold">
            Services Offered:
          </h1>
          <div className="flex flex-row gap-20 p-5">
            <div className="flex flex-col">
              <Image src="/haircut.jpeg" alt="haircut" width={200} height={200}/>
              <h3 className="text-center font-bold">Haircuts and Styling</h3>
            </div>
            <div className="flex flex-col">
              <Image src="/manicure.jpeg" alt="manicure" width={200} height={200}/>
              <h3 className="text-center font-bold">Manicure and Pedicure</h3>
            </div>
            <div className="flex flex-col">
              <Image src="/facial.jpeg" alt="facial" width={200} height={200}/>
              <h3 className="text-center font-bold">Facial Treatments</h3>
            </div>
          </div>
          <a href="/book" className="btn btn-blue my-2">Book Now</a>

          <div className="flex gap-40">
            <div>
              <h1 className="text-black text-3xl font-bold">
                  Leave a review
              </h1>
              <RatingSystem />
            </div>
            <div>
              <h1 className="text-black text-3xl font-bold">
                  Contact Us at:
              </h1>
              <ul className="list-disc">
                <li className="text-xl my-3">Thomas
                  <div className="flex gap-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <a className="text-blue-700" href="tel:08123456789">08123456789</a>
                  </div>
                </li>
                <li className="text-xl">Sekar
                  <div className="flex gap-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  <a className="text-blue-700" href="tel:08164829372">08164829372</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}