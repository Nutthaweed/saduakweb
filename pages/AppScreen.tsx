import React from 'react';
import Image from "next/image";
import { TileWrapper, TileBackground, TileContent, Tile } from "../components/Tile";
import {
  WorkContainer,
  WorkBackground,
  WorkLeft,
  WorkRight,
  WorkLink,
} from "../components/EachScreen";

// Import your images
import Watchamove from "../Images/work-3.png";
import Design from "../Images/work-4.png";
import Phoneapp from "../Images/work-5.png";
import Ktpop from "../Images/work-6.png";
import Website from "../Images/work-1.png";
import Blitzong from "../Images/work-2.png";

const AppScreen: React.FC= () => (
  <TileWrapper numOfpages={6}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile page={0}>
        {({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We built</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                Website more prettier
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image src={Website} alt="Website" width={840} height={1620} />
            </WorkRight>
          </WorkContainer>
        )}
      </Tile>

      <Tile page={1}>
        {({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We made</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://blitzong-nutthaweed.vercel.app/">
                  Blitzong
                </WorkLink>{" "}
                for song
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image src={Blitzong} alt="Website" width={840} height={1620} />
            </WorkRight>
          </WorkContainer>
        )}
      </Tile>

      <Tile page={2}>
        {({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We created</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://watchamove-lpdps3wr6-nutthaweed.vercel.app/">
                  Watchamove
                </WorkLink>{" "}
                for movie
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image src={Watchamove} alt="Watchamove" width={840} height={1620} />
            </WorkRight>
          </WorkContainer>
        )}
      </Tile>

      <Tile page={3}>
        {({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We designed</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://krungtepian-nutthaweed.vercel.app/">
                  Website
                </WorkLink>{" "}
                modern
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image src={Design} alt="Design" width={840} height={1620} />
            </WorkRight>
          </WorkContainer>
        )}
      </Tile>

      <Tile page={4}>
        {({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We made</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                Application too
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image src={Phoneapp} alt="Phone app" width={840} height={1620} />
            </WorkRight>
          </WorkContainer>
        )}
      </Tile>

      <Tile page={5}>
        {({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We also made</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://www.youtube.com/channel/UCCva9l5GAPlTBpPhLTPcifA">
                  KTPOP
                </WorkLink>{" "}
                too
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image src={Ktpop} alt="KTPOP" width={840} height={1620} />
            </WorkRight>
          </WorkContainer>
        )}
      </Tile>
    </TileContent>
  </TileWrapper>
);

export default AppScreen;
