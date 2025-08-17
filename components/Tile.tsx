"use client";
import React, { useRef, useContext } from "react";
import { ScrollContext } from "../utils/scroll-observer";

interface WrapperProps {
  numOfpages: number;
  children: React.ReactNode;
}

interface TileContextValue {
  numOfpages: number;
  currentpage: number;
}

export const TileContext = React.createContext<TileContextValue>({
  numOfpages: 0,
  currentpage: 0,
});

export const TileWrapper: React.FC<WrapperProps> = ({ children, numOfpages }) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  let currentPage = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    currentPage = percentY * numOfpages;
  }

  return (
    <TileContext.Provider value={{ numOfpages, currentpage: currentPage }}>
      <div
        ref={refContainer}
        className="relative bg-black text-white"
        style={{ height: numOfpages * 100 + "vh" }}
      >
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="absolute h-full w-full">{children}</div>
);

export const TileContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
);

interface TileProps {
  page: number;
  children: (props: { progress: number }) => React.ReactNode;
}

export const Tile: React.FC<TileProps> = ({ page, children }) => {
  const { currentpage, numOfpages } = useContext(TileContext);
  const progress = Math.max(0, currentpage - page);
  const refContainer = useRef<HTMLDivElement>(null);

  let opacity = Math.min(1, Math.max(0, progress * 4));
  if (progress > 0.85 && page < numOfpages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }

  return (
    <div
      ref={refContainer}
      className="absolute top-0 w-full"
      style={{
        pointerEvents: progress <= 0 || progress >= 1 ? "none" : undefined,
        opacity,
      }}
    >
      {children({ progress })}
    </div>
  );
};
