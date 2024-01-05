import Footer from "./components/Footer";
import LastWord from "./components/LastWord";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center pt-12">
        {/* changes colors */}
        <div id="top-banner" className="home-badge font-semibold absolute rounded-3xl bg-gray-300 px-4 py-2 max-w-[300px] text-center">
          Over 3 million ready to work with Keegan!
        </div>
        <h1 className="heroHeading px-6 pt-12 text-center">
          Work with the world&apos;s top creative talent.
        </h1>
        <div className="px-4 text-[18px] leading-[32px] font-medium text-center">
          Connect with the top-rated developer in the world.
        </div>
        <button className="bg-black py-4 px-6 rounded-3xl text-sm text-white mt-12">Start hiring today</button>
        <Marquee />
      </section>
      <LastWord />
      <Footer />
    </main>

  )
}
