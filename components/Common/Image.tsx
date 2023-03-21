import { getStrapiMedia } from "../../lib/media";
import Image from "next/image";

const NextImage = ({ image }) => {
  const { alternativeText, width, height } = image.data.attributes;

  return (
    <Image
      width={width}
      height={height}
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
};

export default NextImage;