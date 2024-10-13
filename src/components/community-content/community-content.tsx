import Image from "next/image";

type CommunityContentProps = {
  paragraph: string;
  imageSource: any;
  alt: string;
};
//ToDo
//this component must be removed or add to community page 
// add tailwind add test 
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
