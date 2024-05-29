import Image from "next/image";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://api.thecatapi.com/v1/breeds");
  return response.json();
}

export default async function CatPage() {
  let linkImage = "https://cdn2.thecatapi.com/images";
  const cats = await getData();

  return (
    <section className="flex flex-row flex-wrap gap-4">
      {cats.map((item: any) => (
        <div className="w-52 border-2 border-gray-900" key={item.id}>
          <Link href={`/cat/${item.id}`}>
            <Image
              src={`${linkImage}/${item.reference_image_id}.jpg`}
              alt={item.name}
              width={800}
              height={100}
              className="h-40 object-cover"
            />
            <h2 className="text-center text-xl font-bold">{item.name}</h2>
          </Link>
        </div>
      ))}
    </section>
  );
}