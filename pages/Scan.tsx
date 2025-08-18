import React from 'react';
import QRCODE from '../components/QRCode';
import Typing from '../components/Typing';

const Scan: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen py-20 text-2xl md:text-3xl bg-[#344F71] text-white">
            <div className='container mx-auto px-11 '>
                <Typing text="We share the idea throughout community, You can inspect with Our QRCODE for More Information About Saduak Application by Scanning to all of these information" speed={50} deleteSpeed={25}
                    pause={2000} />
            </div>
            <div className='container mx-auto px-11 text-center mt-28'>
                <h2>&ldquo;QR CODE&rdquo;</h2>
                <div className='mt=2'>For more Info</div>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20'>
                    <QRCODE id={1} name="Presentation" />
                </div>
            </div>
        </div>
    )
}

export default Scan