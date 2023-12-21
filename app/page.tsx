import Image from "next/image";

export default async function Page() {
  return (
    <main>
      <section id="landing" className="h-screen">
        <Image
          src="/placeholder-23-1.jpeg"
          alt="Jean Carlo Cardozo"
          fill
          sizes="100vw"
          objectFit="contain"
        />
      </section>
    </main>
  );
}
