// ConfirmButton.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: block;
  position: relative;
  width: 200px;
  height: 80px;
  transition: width 0.8s cubic-bezier(0.230, 1.000, 0.320, 1.000),
              height 0.8s cubic-bezier(0.230, 1.000, 0.320, 1.000),
              transform 0.8s cubic-bezier(0.175, 0.885, 0.320, 1.275);
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  text-align: center;

  &.is-open {
    width: 400px;
    height: 160px;
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
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  line-height: 80px;
  background-color: #F44336;
  color: #fff;
  cursor: pointer;
  backface-visibility: hidden;
  transition: background 0.15s ease,
              line-height 0.8s cubic-bezier(0.230, 1.000, 0.320, 1.000);

  &:hover {
    background-color: #e53935;
  }

  &.is-open {
    pointer-events: none;
    line-height: 160px;
  }
`;

const ButtonBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #eee;
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

// Component
const ConfirmButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState('');

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

  const handleYesClick = () => setIsOpen(false);
  const handleNoClick = () => setIsOpen(false);

  const distance = (x1: number, y1: number, x2: number, y2: number): number => {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <ButtonWrapper className={`btn ${isOpen ? 'is-open' : ''}`} data-direction={direction}>
      <ButtonFront className="btn-front" onClick={handleFrontClick}>
        Delete
      </ButtonFront>
      <ButtonBack className="btn-back">
        <p>Are you sure you want to do that?</p>
        <button className="yes" onClick={handleYesClick}>Yes</button>
        <button className="no" onClick={handleNoClick}>No</button>
      </ButtonBack>
    </ButtonWrapper>
  );
};

export default ConfirmButton;