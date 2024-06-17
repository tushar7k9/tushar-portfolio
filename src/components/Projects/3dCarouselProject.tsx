import React, { ReactNode, useEffect, useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import "./3dCarouselProject.scss";
import arrow from "../../assets/icons/arrow.svg";
import { Link } from "react-router-dom";
import styled from 'styled-components';

declare global {
  interface CSSStyleDeclaration {
    "--active"?: string;
    "--offset"?: string;
    "--direction"?: string;
    "--abs-offset"?: string;
  }
}

let MAX_VISIBILITY = 3;

const CardWrapper = styled.div`
  transition: width 0.8s cubic-bezier(0.230, 1.000, 0.320, 1.000),
              height 0.8s cubic-bezier(0.230, 1.000, 0.320, 1.000),
              transform 0.8s cubic-bezier(0.175, 0.885, 0.320, 1.275);
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  text-align: center;

  &.is-open {
    // width: 400px;
    // height: 160px;
  }

  &[data-direction="top"].is-open {
    transform: rotateX(180deg);
  }

  &[data-direction="right"].is-open {
    transform: rotateY(180deg);
  }

  &[data-direction="bottom"].is-open {
    transform: rotateX(-180deg);
  }

  &[data-direction="left"].is-open {
    transform: rotateY(-180deg);
  }
`;

const ButtonFront = styled.div`
  backface-visibility: hidden;
  transition: background 0.15s ease,
              line-height 0.8s cubic-bezier(0.230, 1.000, 0.320, 1.000);
  
  &.is-open {
    pointer-events: none;
    line-height: 160px;
    display: none;
  }
`;

const ButtonBack = styled.div`
  width: 100%;
  height: 100%;
  color: #222;
  transform: translateZ(-2px) rotateX(180deg);
  rotate: 180deg;
  overflow: hidden;
  transition: box-shadow 0.8s ease;
  backface-visibility: hidden;

  p {
    margin-top: 27px;
    margin-bottom: 25px;
  }

  button {
    padding: 12px 20px;
    width: 30%;
    margin: 0 5px;
    background-color: transparent;
    border: 0;
    border-radius: 2px;
    font-size: 1em;
    cursor: pointer;
    transition: background 0.15s ease;
    
    &:focus {
      outline: 0;
    }
    
    &.yes {
      background-color: #2196F3;
      color: #fff;
      
      &:hover {
        background-color: #1976D2;
      }
    }
    
    &.no {
      color: #2196F3;
      
      &:hover {
        background-color: #ddd;
      }
    }
  }

  &.is-open {
    box-shadow: 0 8px 25px rgba(0,0,0,0.4);
  }
`;

// const CustomButton = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: fit-content;
//   padding: 10px;
//   border-radius: 7px;
//   background-color: #C4CEE5;
//   color: #3d588f;
//   cursor: pointer;
//   &:hover {
//     background-color: #4d6fb3;
//     color: #fff;
//   }
// `;

interface ICardProps {
  title: string
  content: string[]
  iconUrl: string
  theme: string
  link: string
  linkType: string
  isExpanded: boolean
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

const Card: React.FC<ICardProps> = ({ title, content, iconUrl, theme, link, linkType, isExpanded, setIsExpanded }) => { 

  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState('');

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const handleFrontClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const mx = event.clientX - event.currentTarget.offsetLeft;
    const my = event.clientY - event.currentTarget.offsetTop;
    const w = event.currentTarget.offsetWidth;
    const h = event.currentTarget.offsetHeight;

    const directions = [
      { id: 'top', x: w / 2, y: 0 },
      { id: 'right', x: w, y: h / 2 },
      { id: 'bottom', x: w / 2, y: h },
      { id: 'left', x: 0, y: h / 2 }
    ];

    directions.sort((a, b) => distance(mx, my, a.x, a.y) - distance(mx, my, b.x, b.y));

    setDirection(directions.shift()!.id);
    setIsOpen(true);
  };

  const distance = (x1: number, y1: number, x2: number, y2: number): number => {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // const handleYesClick = () => setIsOpen(false);
  const handleNoClick = () => {
    setIsExpanded(false);
    setIsOpen(false);

    if(!isExpanded) {
      MAX_VISIBILITY = 2;
    }
    else {
      MAX_VISIBILITY = 3;
    }
  }

  // const boxRef = useRef(null);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
    if(!isExpanded) {
      MAX_VISIBILITY = 2;
    }
    else {
      MAX_VISIBILITY = 3;
    }
  };

  return (
    <CardWrapper className={`card ${isOpen ? 'is-open' : ''}`} data-direction={direction}>
      <ButtonFront className={`lg:w-[100%] w-full btn-front ${isOpen ? 'is-open' : ''}`} key={title}>
          <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                    src={iconUrl}
                    alt='threads'
                    className='w-1/2 h-1/2 object-contain'
                />
              </div>
          </div>

          <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
              {title}
              </h4>
              <div style={{overflow: 'auto', maxHeight: '200px', }}>
                {/* <p className='mt-2 text-slate-500'>{content}</p> */}

                {content.length > 1 ? 
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                      {content.slice(0, 2).map((point, index) => (
                        <li
                          key={`experience-point-${index}`}
                          className='text-black-500/50 font-normal pl-1 text-sm'
                        >
                          {index === 0 ? point : `${point.substring(0, 50)}...`}
                          {index === 1 && <span style={{color: '#FF5E8A', cursor: 'pointer', }} onClick={handleFrontClick}>Read More</span>}
                        </li>
                      ))}
                  </ul> : 
                  <div className='text-black-500/50 font-normal pl-1 text-sm pt-2'>{content[0]}</div>
                }
              </div>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
              <Link
                  to={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
              >
                  {linkType}
              </Link>
              <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
              />

            {/* <CustomButton onClick={handleFrontClick}>
              Live Link
            </CustomButton> */}

          </div>
        </div>
      </ButtonFront>

      <ButtonBack className={`btn-back ${!isOpen ? 'back-hide' : ''}`}>
          {/* <p>Are you sure you want to do that?</p> */}
          <div style={{overflow: 'auto', maxHeight: '20rem', }}>
            <ul className='my-5 list-disc ml-5 space-y-2'>
              {content.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className='text-black-500/50 font-normal pl-1 text-sm'
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
          {/* <button className="yes" onClick={handleYesClick}>Yes</button>
          <button className="no" onClick={handleNoClick}>No</button> */}
          <span style={{color: '#FF5E8A', fontSize: '14px', cursor: 'pointer', }} onClick={handleNoClick}>Show Less</span>
          <button className="plus-button" onClick={handleExpandClick} style={{color: '#FF5E8A', fontSize: '14px', cursor: 'pointer', }}>
            {isExpanded ? '-' : '+'}
          </button>
      </ButtonBack>
    </CardWrapper>
  )
};

type CustomCSSProperties = React.CSSProperties & { [key: string]: string | number };


const Carousel = ({ children, isExpanded }: { children: ReactNode, isExpanded: boolean }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  const handleLeftClick = () => {
    setActive((i) => i - 1);
  };

  const handleRightClick = () => {
    setActive((i) => i + 1);
  };

  const customStyles: (i: number) => CustomCSSProperties = (i: number) => {
    return {
      "--active": i === active ? 1 : 0,
      "--offset": (active - i) / 3,
      "--direction": Math.sign(active - i),
      "--abs-offset": Math.abs(active - i) / 3,
      pointerEvents: active === i ? "auto" : "none",
      opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
      display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
    }
  };

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={handleLeftClick}>
          <TiChevronLeftOutline />
        </button>
      )}

      {React.Children.map(children, (child, i) => (
        <div
          className={`card-container ${isExpanded ? 'expanded' : ''}`}
          style={{ ...customStyles(i) }}
        >
          {child}
        </div>
      ))}

      {active < count - 1 && (
        <button className="nav right" onClick={handleRightClick}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

interface IProject {
    iconUrl: string;
    theme: string;
    name: string;
    description: string[];
    link: string;
    linkType: string;
}

interface ICarouselProjectProps {
  projects: IProject[];
}

const CarouselProject: React.FC<ICarouselProjectProps> = ({ projects }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <Carousel isExpanded={isExpanded}>
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.name}
              content={project.description}
              iconUrl={project.iconUrl}
              theme={project.theme}
              link={project.link}
              linkType={project.linkType}
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselProject;
