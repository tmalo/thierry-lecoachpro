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
    <div className="mx-auto max-w-6xl grid-rows-1 md:grid md:grid-cols-5 md:gap-2">
      <div className="invisible rounded-2xl bg-gradient-to-br p-4 md:visible">
        <Image
          className="invisible m-auto h-0 w-0 rounded-lg object-contain shadow-lg md:visible md:h-60 md:w-34"
          src={img}
          alt={alt}
          width={2268}
          height={4032}
        />
      </div>
      <div className="md:col-span-4">
        <h2 className="font-montserrat text-primary mb-8 text-3xl font-bold">
          {title}
        </h2>

        {children}
      </div>
    </div>
  );
}
