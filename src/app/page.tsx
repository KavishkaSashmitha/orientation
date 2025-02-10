import HeaderAnimation from "@/components/HeaderAnimation/HeaderAnimation";
import LinkCard from "@/components/Links/LinkCard";
import {
  Calendar,
  CalendarFold,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  QuoteIcon,
  Shirt,
  Vote,
} from "lucide-react";
import { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Links | SESC SLIIT @ SE Inauguration 2025 February",
  description: "All information related to SESC SLIIT",
};

export default function LinksPage() {
  return (
    <main className="relative min-h-screen bg-[#131313ba]">
      <div className="max-w-[500px] mx-auto pb-14 px-4">
        <div className={`text-center mt-10`}>
          <h1
            className={`${plusJakartaSans.className} text-[46px] leading-0 text-white mb-4`}>
            Links
          </h1>
          <div>
            <p className="text-white font-semibold leading-0 text-[25px] uppercase">
              SE Orientation
            </p>
            <p className="text-white leading-0 text-[25px]">SESC - 2024/25</p>
          </div>
        </div>

        <div className="mt-6 mb-6 flex flex-col text-lg text-center text-white">
          <QuoteIcon
            size={24}
            className="rotate-180 -ml-1 green-glow"
            fill="#dbfd51"
            stroke="none"
          />
          <p className="text-left">
            If you have knowledge, let others light their candles at it.
          </p>
          <span className="self-end italic">—Margaret Fuller</span>
          <QuoteIcon
            size={18}
            className="self-end green-glow"
            fill="#dbfd51"
            stroke="none"
          />
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="italic text-white">Featured</div>
          <LinkCard
            title="Event Agenda"
            icon={<Calendar size={28} />}
            url={"/agenda"}
            featured
          />
          <LinkCard
            title="Vote for SE T-shirt"
            icon={<Vote size={28} />}
            url={"https://forms.gle/TENUtBhDS1oDXDR76"}
            featured
          />
          <LinkCard
            title="Volunteer Form"
            icon={<Vote size={28} />}
            url={"https://forms.gle/HcB6auyjjpRAmt428"} //update this
            featured
          />
          <LinkCard
            title="Hacknest"
            icon={<Instagram size={28} />}
            url={"https://instagram.com/hacknest.sesc"}
            featured
          />
          <div className="pt-4 italic text-white">Social Links</div>
          <LinkCard
            title="Instagram"
            icon={<Instagram size={28} />}
            url={"https://www.instagram.com/sliit.sesc"}
          />
          <LinkCard
            title="Facebook"
            icon={<Facebook size={28} />}
            url={"https://www.facebook.com/sliitsecommunity"}
          />
          <LinkCard
            title="LinkedIn"
            icon={<Linkedin size={28} />}
            url={"https://www.linkedin.com/company/sesc-sliit"}
          />
          {/* <div className="pt-4 italic text-white">Other</div> */}
        </div>
      </div>
      <div className="">
        <div className="max-w-[500px] text-white pb-12 px-5 text-center mx-auto flex flex-row items-center justify-center">
          <p>
            Software Engineering Student Community of SLIIT
            <br />
            July, 2024
          </p>
        </div>
      </div>
    </main>
  );
}
