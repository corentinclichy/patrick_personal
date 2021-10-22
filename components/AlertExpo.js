import Link from "next/link";

function AlertExpo() {
  return (
    <div className=" bg-[#f071474b] p-3 py-8">
      <p className="text-[#F07047] font-medium">Live expo</p>
      <div className="py-4 expo-header">
        <h1 className="text-lg font-bold">Instant volée</h1>
        <p className="text-sm italic">04/05/2021 -31/07/2022</p>
        <p className="mt-2 text-sm italic font-extralight">
          The MET - 1000 5th Ave, New York, NY 10028, United States{" "}
        </p>
      </div>
      <p className="hidden mb-10 md:block md:">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum eum
        reprehenderit ipsam impedit quam? Placeat cupiditate incidunt rem non
        porro dolor ipsum quod eos assumenda voluptatum ex, blanditiis iste
        ipsa?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Voluptatum eum reprehenderit ipsam impedit quam? Placeat cupiditate
        incidunt rem non porro dolor ipsum quod eos assumenda voluptatum ex,
        blanditiis iste ipsa?
      </p>

      <Link href="/home" className="">
        <a className="text-[#F07047] hover:text-[#ff5015] hover:underline">
          Discover
        </a>
      </Link>
    </div>
  );
}

export default AlertExpo;
