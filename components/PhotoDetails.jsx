import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";

export default async function PhotoDetails({ id, lang }) {
  const res = await fetch(`${process.env.BASE_URL}/photos/${id}`);
  const photo = await res.json();
  const dictonary = await getDictionary(lang);

  return (
    <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
      {/* main photo */}
      <div className="col-span-12 lg:col-span-8 border rounded-xl">
        <Image
          className="max-w-full h-full max-h-[70vh] mx-auto"
          src={photo.url}
          alt="image"
          width={900}
          height={500}
        />
      </div>
      {/* main photo ends */}
      {/* details card */}
      <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
        <h2 className="text-lg lg:text-2xl font-bold mb-2">{photo.title}</h2>
        <div className="text-xs lg:text-sm text-black/60 mb-6">
          {photo.tags.map((tag) => `#${tag} `)}
        </div>
        {/* info rows */}
        <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
          {/* item start */}
          <div className="flex justify-between">
            <span>{dictonary.views}</span>
            <span className="font-bold">10M</span>
          </div>
          {/* item ends */}
          {/* item start */}
          <div className="flex justify-between">
            <span>{dictonary.share}</span>
            <span className="font-bold">10M</span>
          </div>
          {/* item ends */}
          {/* item start */}
          <div className="flex justify-between">
            <span>{dictonary.uploadedOn}</span>
            <span className="font-bold">31 January 2024</span>
          </div>
          {/* item ends */}
        </div>
        {/* info rows ends */}
        {/* author info */}
        <div className="mt-6">
          {/* author header */}
          <div className="flex justify-between items-center mb-3">
            {/*  */}
            <div className="flex items-center gap-3">
              <Image
                className="size-12 lg:size-14 rounded-full border"
                src={photo.author.avatar}
                width={20}
                height={20}
                alt="avatar"
              />
              <div className="spacy-y-3">
                <h6 className="lg:text-lg font-bold">{photo.author.name} </h6>
                <p className="text-black/60 text-xs lg:text-sm">
                  420 Followers
                </p>
              </div>
            </div>
            {/* action */}
            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              <Image
                src="/follow.svg"
                className="w-5 h-5"
                width={50}
                height={50}
                alt="logo"
              />
              Follow
            </button>
          </div>
          {/* author bio */}
          <p className="text-xs lg:text-sm text-black/60">{photo.author.bio}</p>
        </div>
        {/* author info ends */}
        {/* actions */}
        <div className="mt-6">
          <div className="flex items-stretch gap-3">
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/heart.svg"
                className="w-5 h-5"
                width={20}
                height={20}
                alt="logo"
              />
              100
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/save.svg"
                className="w-5 h-5"
                width={20}
                height={20}
                alt="logo"
              />
              {dictonary.save}
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/share.svg"
                className="w-5 h-5"
                width={20}
                height={20}
                alt="logo"
              />
              {dictonary.share}
            </button>
          </div>
        </div>
      </div>
      {/* details card ends */}
    </div>
  );
}
