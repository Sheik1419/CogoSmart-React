import React from "react";
import HomeBanner from "./HomeBanner";
import Choose from "./Choose";
import MainFeatures from "./MainFeatures";
import Whoweare from "./Whoweare";
import KeyFeatures from "./KeyFeatures";
import SubFeatures from "./SubFeatures";
import Download from "./Download";

function Home() {
  return (
    <>
      <HomeBanner />
      <Choose />
      <MainFeatures />
      <Whoweare />
      <KeyFeatures />
      <SubFeatures />
      <Download />
    </>
  );
}

export default Home;
