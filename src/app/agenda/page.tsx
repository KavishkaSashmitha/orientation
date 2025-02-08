import EventCard from "@/components/EventCard";
//import HeaderAnimation from "@/components/HeaderAnimation/HeaderAnimation";
import { AgendaData } from "@/data/AgendaData";
import { CalendarFold, MapPin } from "lucide-react";
import { Chakra_Petch, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

const chakra = Chakra_Petch({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="relative bg-white">
      {/* <HeaderAnimation /> */}

      <div className="max-w-[500px] mx-auto pb-20 px-4">
        <div className={`${plusJakartaSans.className} text-center mt-10`}>
          <h1 className="text-[46px] leading-0 text-black mb-4">Agenda</h1>
          <div className={`${chakra.className}`}>
            <p className="text-black font-semibold leading-0 text-[25px] uppercase">
              SE Orientation
            </p>
            <p className="text-black leading-0 text-[25px]">SESC - 2024/25</p>
          </div>
        </div>

        <div
          className={`${chakra.className} flex flex-row justify-center mt-6 mb-6`}>
          <div className="inline-flex text-black items-center">
            <CalendarFold size={36} />
            <span className="ml-2 uppercase text-[19px] leading-none">
              17th July 2024
              <br />
              1:30 PM
            </span>
          </div>

          <div className="w-[0.5px] h-10 bg-white mx-[35px]"></div>

          <div className="inline-flex text-black items-center">
            <MapPin size={36} />
            <span className="ml-2 uppercase text-[19px] leading-none">
              Main
              <br />
              Auditorium
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          {AgendaData.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              time={event.time}
              imageURL={event.imageURL}
              name={event.name}
              position={event.position}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* <div className="relative bg-[#13131391]"></div> */}
      <div className=" bg-white">
        <div className="max-w-[500px] py-5 mx-auto flex flex-row items-center justify-center px-[150px] ">
          <Image
            src={"/logo/fcsc-logo.svg"}
            width={150}
            height={150}
            alt=""
            className="mr-4"
          />
          <div className="w-[0.5px] h-10 bg-black"></div>
          <Image src={"/logo/sesc-logo.svg"} width={150} height={150} alt="" />
        </div>
      </div>
    </main>
  );
}
