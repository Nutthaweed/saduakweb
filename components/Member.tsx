import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MemberProps {
  id: string,
  name: string,
  instagramid: string,
  link: string,
}

const Members: React.FC<MemberProps> = ({ id, name, instagramid, link }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-full max-w-[250px] aspect-square relative">
        <Image
          src={`/images/member_${id}.png`}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>

      <div className="mt-4 text-lg md:text-xl font-semibold">{name}</div>

      <div className="text-sm md:text-base">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          {instagramid}
        </Link>
      </div>
    </div>
  );
};

export default Members;