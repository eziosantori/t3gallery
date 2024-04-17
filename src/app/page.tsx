import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/636d6704-22b3-475b-bf07-98a049ffeda8-hijabt.gaming.01.png",
  "https://utfs.io/f/62660111-ba5c-4fe8-b805-8e1c621fb839-hijabt.uefatv.01.png",
  "https://utfs.io/f/ae9336a3-d0e1-4310-ad54-a26e3f4d55ef-hijabt.gaming.03.png",
  "https://utfs.io/f/db84c975-1783-49c3-9fd6-94cf8fec688d-hijabt.gaming.02.png",
];

const mockImages = mockUrls.map((url,i) =>({
  id: i+1,
  url
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4">
        {
          mockImages.map((image) => (
            <div className="w-full md:w-1/2 lg:w-1/3" key={image.id}>
              <img src={image.url} className="w-full h-full object-cover" alt='una foto' />
            </div>
          ))
        }
      </div>
        Hello new gallery project
    </main>
  );
}
