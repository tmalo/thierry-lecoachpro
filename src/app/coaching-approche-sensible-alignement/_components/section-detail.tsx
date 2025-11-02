import Image from "next/image";

export function SectionDefail({
  title,
  img,
  alt,
  children,
}: {
  title: string;
  img: string;
  alt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-5 grid-rows-1 gap-2">
      <div className=" rounded-2xl bg-gradient-to-br p-4  ">
        <Image
          className="h-60 w-34 m-auto rounded-lg object-scale-down shadow-lg"
          src={img}
          alt={alt}
          width={2268}
          height={4032}
          objectFit="contain"
        />
      </div>
      <div className="col-span-4">
        <h2 className="font-montserrat text-primary mb-8 text-3xl font-bold">
          {title}
        </h2>

        {children}
      </div>
    </div>
  );
}
