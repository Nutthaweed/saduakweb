import React from 'react';

const AboutUs: React.FC = () => {
    return(
        <section className="flex flex-col min-h-screen  py-20 text-2xl md:text-3xl bg-[#344F71] text-white">
            <div className="container mx-auto px-11"> 
                <p className="leading-tight max-w-5xl mx-auto text-3xl tracking-tight">
                    We're come from <strong>Information of Technology and Digital Innovation(IBIT)</strong> of King Mongkut's University of Technology North Bangkok
                    We findout main problem of delivery app in thailand which is very expensive, That's the reason We made the team with different member to made our delivery application for University
                    <br></br>
                    <strong>Let We introduce our team members</strong>
                </p>
            </div>
            <div className="container mx-auto px-11 text-center mt-28">
                <h2>Our Team</h2>
                <div>&ldquo;Saduak&rdquo; Team</div>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-20">
                    <div>Member</div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs