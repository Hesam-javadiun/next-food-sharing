import Image from "next/image";

type CommunityContentProps = {
  paragraph: string;
  imageSource: any;
  alt: string;
};

const CommunityContent = function ({
  paragraph,
  imageSource,
  alt,
}: CommunityContentProps) {
  return (
    <>
      <Image
        src={imageSource.src}
        width={imageSource.width}
        height={imageSource.height}
        alt={alt}
      />
      <p>{paragraph}</p>
    </>
  );
};
export default CommunityContent;
