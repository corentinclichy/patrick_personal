import Image from "next/image";

function GalleryItem({ image }) {
  const buyIconMarkup = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );

  return (
    <div className="w-full h-40 gallery-item">
      <div className="relative object-cover w-full overflow-hidden rounded h-96 image-container">
        <Image src={image.photos[0].src.large} alt="" layout="fill" />
      </div>

      <div className="flex items-center mt-3 paint-infos">
        <div className="flex-1 left">
          <h3 className="mb-1 text-1xl">Instant volé</h3>
          <p className="text-sm font-light ">
            <span>200x400</span> / <span>Peinture à l'huile au couteau</span>
          </p>
          <p className="text-sm italic font-extralight">01/01/2021</p>
        </div>
        <div className="flex flex-col justify-between h-full gap-1 item right">
          <p className="flex-1 font-light">500 €</p>
          <button className="flex flex-1 items-center justify-center text-[#F07047]">
            <span>Buy</span>
            {buyIconMarkup}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
