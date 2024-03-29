import PhotoDetails from "@/components/PhotoDetails";

export default async function page({ params: { id, lang } }) {
  return <PhotoDetails id={id} lang={lang} />;
}
