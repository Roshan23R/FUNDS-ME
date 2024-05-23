import folderIcon from '../../../public/images/folderIcon.png';
import Image from 'next/image';

const Upload = ({
  docName,
  uploadedAt,
  size
}: {
  docName: string;
  uploadedAt: string;
  size: number;
}) => {
  return (
    <>
      <div className="flex h-28 w-36 flex-col items-center justify-between border rounded-md border-blue-300 px-2 py-2">
        <div className="flex w-full items-center justify-between gap-2">
          <Image src={folderIcon} className="h-8 w-8" alt="folderIcon" />
        </div>
        <div className="flex w-full flex-col items-start justify-between gap-2">
        <div className="text-md text-white text-xs">{docName}</div>
          <div className="flex items-center justify-between w-full">
            <span className="text-[9px] text-[#c0c0c0]">{uploadedAt}</span>
            <span className="text-[9px] text-[#c0c0c0]">{size} MB</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
