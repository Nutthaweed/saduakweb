import React from 'react';
import Image from 'next/image';

interface QRCODEProps {
    id: number;
    name: string;
}

const QRCODE: React.FC<QRCODEProps> = ({ id, name }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="transition-transform duration-300 ease-in-out hover:scale-110">
                <Image
                    src={`/images/qrcode_${id}.png`}
                    alt={name}
                    width={200}
                    height={200}
                />
            </div>
            <div className="text-2xl xl:text-3xl font-bold mt-4">{name}</div>
        </div>
    );
};

export default QRCODE;