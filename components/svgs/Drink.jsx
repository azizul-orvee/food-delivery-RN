import React from 'react';
import { SvgXml } from 'react-native-svg';

const DrinkSVG = ({ size, fill }) => {
  const svg =`<svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 11A5 5 0 116 1a5 5 0 010 10z"/><path d="M6 2a.5.5 0 00-.5.5v3H4a.5.5 0 100 1h2a.5.5 0 00.5-.5V2.5A.5.5 0 006 2z"/></svg>`
  const SvgComponent = () => (
    <SvgXml xml={svg} width={size} height={size} fill={fill} />
  );
  return <SvgComponent />;
};

export default DrinkSVG;


