import GalleryFilter from "./GalleryFilter";
import GalleryItem from "./GalleryItem";

function Gallery({ image }) {
  return (
    <div className="p-3 pt-10 paints-container">
      <div className="gallery-header">
        <h2 className="font-medium uppercase text-1xl">
          Découvrez mes réalisations...
        </h2>
        <p className="mt-4 text-sm font-extralight">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quo
          fuga assumenda eaque dignissimos! Id, eaque voluptatem voluptate
          corrupti placeat quidem laudantium perspiciatis impedit deleniti quos?
          Dicta consequatur sequi voluptas.
        </p>
        <GalleryFilter />
      </div>
      <div className="gallery-content">
        <GalleryItem image={image} />
      </div>
    </div>
  );
}

export default Gallery;
