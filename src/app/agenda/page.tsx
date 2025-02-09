import EventCard from "@/components/EventCard";
//import HeaderAnimation from "@/components/HeaderAnimation/HeaderAnimation";
import { AgendaData } from "@/data/AgendaData";
import { CalendarFold, MapPin } from "lucide-react";
import { Chakra_Petch, Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import AgendaIcon from "/public/agenda-title.svg";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

const chakra = Chakra_Petch({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const dm_Sans = DM_Sans({
  weight: ["400", "500","600"],
  subsets: ["latin"],
});

export default function Home() {
  return (
   
    <main className="relative bg-white">
      {/* <HeaderAnimation /> */}

      <div className="max-w-[500px] mx-auto pb-20 px-4 bg-white">
        <div className={`${dm_Sans.className} text-left mt-0 bg-white`}>
        <Image src={AgendaIcon} alt="Agenda" className="w-[300px] h-[300px]" />
          
          <div className={`${dm_Sans.className}`}>
            <p className="flex flex-col items-start space-y-2 pb-4 text-black leading-0 text-[25px] font-[500]">
              Event Outline
            </p>
            
            <div className="flex flex-col items-start space-y-2">
            <div className="flex space-x-2">
              <span className="px-3 py-1 border-2 border-black-background rounded-full bg-white text-black font-[500]">
                1 PM – 4 PM
              </span>
              <span className="px-3 py-1 border-2 border-black-background rounded-full bg-gradient-to-r from-blue-500 to-blue-200 text-black font-[500]">
                13 February
              </span>
            </div>
            <span className="px-3 py-1 border-2 border-black-background rounded-full bg-gradient-to-r from-yellow-500 to-yellow-200 text-black font-[500]">
              Main Auditorium
            </span>
          </div>

          </div>
        </div>

        <div
          className={`${dm_Sans.className} flex flex-row justify-center mt-6 mb-6`}>
          
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
