import Hero from "../components/Hero/page";

export default function Home() {
  return (
    <div className='w-full flex flex-col justify-center items-center content-center'>
      <main className='w-full flex flex-col justify-center items-center'>
        <Hero />
      </main>
    </div>
  );
}
