import MainTile from 'components/tile';
import data from 'config.json';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <div className="mt-20 w-auto flex flex-col items-center ">
          <div className="flex">
            <Image
              src={data.profile_img}
              alt={data.name}
              objectFit={'cover'}
              width={120}
              height={120}
              className="rounded-xl border border-whitesmoke"
            />
          </div>
          <h1 className="my-4 text-3xl font-bold">{data.name}</h1>
          <h3 className="w-[50%] text-center my-2 text-sm font-semibold">
            {data.about}
          </h3>
        </div>
        <MainTile />
      </main>
    </>
  );
}
