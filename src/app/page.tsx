import Image from "next/image";
import Header from "./components/Header";
import partyImg from "../../public/assets/party.jpg";
import heroLady from "../../public/assets/heroLady.png";

export default function Home() {
  return (
    <section className="font-dmsans">
      <Header />
      <section className="lg:w-5/6  overflow-hidden  lg:min-h-[600px] mx-auto grid lg:grid-cols-2">
        <div className="pt-20">
          <h3 className="text-6xl font-semibold">Event Ticketing </h3>
          <h3 className="text-6xl font-semibold mb-6">Made Simple For You</h3>

          <p className="text-slate-800 mb-8" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloremque necessitatibus nihil?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium!
          </p>

          <div className="flex items-center space-x-4">
            <button className="bg-violet-600 text-center border-2 border-transparent text-white px-4 py-2 rounded-md">Create An Event</button>
            <button className="border-2 border-violet-600 text-center text-violet-600 px-4 py-2 rounded-md">Buy Ticket</button>
          </div>
        </div>
        <div className="relative ">
          <div className="grid relative z-10 grid-cols-2 border-white border  bg-gray-100/30   backdrop-blur-3xl  px-8 gap-8 py-10 ">
            <EventHeroCard />
            <EventHeroCard />
            <div className="col-span-2 flex items-center justify-center">
              <Image src={heroLady} alt="hero lady" className="w-[200px] " />
            </div>
          </div>

          <div className="absolute zigzag-reverse bottom-0 right-0 w-[220px] h-[180px] rounded-3xl  bg-emerald-400" />
          <div className="absolute zigzag  inset-0 w-[220px] h-[180px] rounded-3xl  bg-rose-500" />
          <div className="absolute astronaut  right-1/2 w-[220px] h-[180px] rounded-3xl  bg-violet-500" />


        </div>

      </section>
    </section>
  );
}

const EventHeroCard = () => {
  return <div className="rounded-3xl border border-white shadow-sm w-[280px] bg-white/60 backdrop-blur-md h-fit  overflow-hidden ">
    <div className="row-span-3">
      <Image src={partyImg} alt="Party Event" className="w-full h-[140px] object-cover" />
    </div>
    <div className="px-4 pt-3 pb-6  ">

      <h3 className="font-semibold ">Event Name</h3>
      <p className="text-sm text-slate-700 mb-2">
        Lorem ipsum dolor sit amet consectet.
      </p>

      <div className="flex text-sm items-center space-x-4 text-center">
        <button className="bg-violet-600 rounded-md text-white px-2 py-[2px] ">buy ticket -&gt;</button>
      </div>

    </div>
  </div>
}


