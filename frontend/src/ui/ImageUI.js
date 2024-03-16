import Image from "next/image";

function ImageUI({ dimentions, source, alt }) {
  return (
    <Image
      src={source !== "" || source !== null ? source : "+"}
      alt={alt}
      objectFit="cover"
      objectPosition="center"
      className=""
      priority={true}
      loading="eager"
      fill
    />
  );
}

export default ImageUI;
