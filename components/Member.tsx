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
        <div>
            <Image src={`/images/member_${id}.png`} alt={name} width={800} height={800} className='flex justify-center items-center' />
            <div className='text-2xxl xl:text-3xl'>{name}</div>
            <div className='text-xl'>
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    {instagramid}
                </Link>
            </div>
        </div>
    )
}

export default Members