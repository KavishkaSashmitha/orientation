import Image from "next/image";

interface Props {
  title: string;
  time: string;
  description?: string;
  imageURL?: string;
  name?: string;
  position?: string;
  index: number;
}

export default function EventCard({
  title,
  description,
  time,
  imageURL,
  name,
  position,
  index,
}: Props) {
  return (
    <div className="text-black border-b-[2px] border-b-black-background w-full flex flex-row p-4">
      <div className="w-[100px] flex-shrink-0 mr-4 font-[500]">{time}</div>
      <div className="flex-1 flex flex-col">
        <div className="mb-4">
          <h2 className="text-xl font-[600]">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex items-center">
          {imageURL && (
            <div
            className="overflow-x-clip relative min-w-[50px] w-[50px] h-[50px] bg-yellow-300 rounded-full"
          >
            <Image
              src={imageURL}
              width={50}
              height={50}
              alt="profile"
              className="object-cover absolute top-0 left-0 min-w-[50px] w-[50px] h-[50px] rounded-full"
            />
          </div>
          )}
          <div className="ml-4 flex flex-col">
            <p className="font-[500]">{name}</p>
            <p className="font-[100]">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
