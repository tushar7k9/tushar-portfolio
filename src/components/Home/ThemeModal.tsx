import React, { useEffect, Dispatch, SetStateAction } from 'react';
import './ThemeModal.scss'; // Make sure to create a CSS file for the styles
import Island from '../../assets/themeImage/island.png';
import Island2 from '../../assets/themeImage/island2.png';

interface IThemeModalProps {
  isThemeOpen: boolean;
  setIsThemeOpen: Dispatch<SetStateAction<boolean>>;
  selectedTheme: number;
  setSelectedTheme: Dispatch<SetStateAction<number>>;
}

const ThemeModal: React.FC<IThemeModalProps> = ({ isThemeOpen, setIsThemeOpen, selectedTheme,  setSelectedTheme}) => {

  const toggleModal = () => {
    setIsThemeOpen(!isThemeOpen);
  };

  const handleWindowClick = (event: MouseEvent) => {
    if (event.target === document.querySelector('.modal')) {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

    // const handleImageClick = (index: number) => {
    //     setSelectedTheme(index);
    // };

  return (
    <>
      {isThemeOpen && (
        <div className={`modal ${isThemeOpen ? 'show-modal' : ''}`}>
          <div className="modal-content">
            <span className="close-button" onClick={toggleModal}>
              &times;
            </span>
            <div className="modal-header">
              Choose Your Adventure Theme
            </div>
            {/* <div className="image-container">
              <img
                src={Island}
                className={selectedTheme === 0 ? 'selected' : ''}
                onClick={() => handleImageClick(0)}
              />
              <img
                src={Island2}
                className={selectedTheme === 1 ? 'selected' : ''}
                onClick={() => handleImageClick(1)}
              />
            </div> */}
            <div className="modal-body">
              <div className={`theme-option`} onClick={() => setSelectedTheme(0)}>
                <img src={Island} alt="Island Theme" className={selectedTheme === 0 ? 'selected' : ''} />
                <div className="theme-label">Island Paradise</div>
              </div>
              <div className={`theme-option`} onClick={() => setSelectedTheme(1)}>
                <img src={Island2} alt="Island2 Theme" className={selectedTheme === 1 ? 'selected' : ''}/>
                <div className="theme-label">Mountain Retreat</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThemeModal
