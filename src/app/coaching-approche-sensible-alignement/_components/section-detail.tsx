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
    <div className="mx-auto md:grid max-w-6xl md:grid-cols-5 grid-rows-1 md:gap-2">
      <div className=" rounded-2xl bg-gradient-to-br p-4 invisible md:visible  ">
        <Image
          className="h-0 w-0 md:h-60 md:w-34 m-auto rounded-lg object-scale-down invisible md:visible  shadow-lg"
          src={img}
          alt={alt}
          width={2268}
          height={4032}
          objectFit="contain"
        />
      </div>
      <div className=" md:col-span-4">
        <h2 className="font-montserrat text-primary mb-8 text-3xl font-bold">
          {title}
        </h2>

        {children}
      </div>
    </div>
  );
}
