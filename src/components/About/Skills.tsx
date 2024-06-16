import React from "react";

import BallCanvas from "../../assets/canvas/Ball";
import { SectionWrapper } from "../../hoc";
import { skills } from "../../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {skills.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.imageUrl} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");