import Image from "next/image";
import Link from "next/link";

export default function PhotoList({ photo }) {
  return (
    <>
      {/* image item */}
      <Link href={`/photos/${photo.id}`} className="group">
        <Image src={photo.url} alt={photo} width={400} height={500} />
        {/* title */}
        <div className="title-container">
          <h4 className="title">{photo.title} </h4>
        </div>
      </Link>
    </>
  );
}
