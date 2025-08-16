import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    id: string,
    name: string,
    instagramid: string,
    link: string
}



const Members = React.FC<Props> = ({id, name, instagramid, link}) => {
    return(
        <div>
            <Image src={`/images/member_team_${id}.png`} alt={name} />
            <div className="" >{name}</div>
        </div>
    )
}

export default Members