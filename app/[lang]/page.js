import PhotoList from "@/components/PhotoList";

export default async function Home() {
  const response = await fetch(`${process.env.BASE_URL}/photos`);
  const photos = await response.json();

  return (
    <div className="img-grid">
      {photos.map((photo) => (
        <PhotoList photo={photo} key={photo.title} />
      ))}
    </div>
  );
}
