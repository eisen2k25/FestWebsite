import React, { useState } from 'react';
import '../Styles/Gallery.css';

const images = [
  "https://res.cloudinary.com/dmw5kp4tr/image/upload/v1740626857/lkylr6qqzd4comd2crjs.jpg",
  "https://res.cloudinary.com/dmw5kp4tr/image/upload/v1740626860/qhdbkdcc2ef8uip26wbs.jpg",
  "https://res.cloudinary.com/dmw5kp4tr/image/upload/v1740626870/tzh88js83s2vbyve2mn2.jpg"
];

const videos = [
  "https://res.cloudinary.com/dmw5kp4tr/video/upload/v1740626917/tp1m2tshfcxg4qwmhwbg.mp4",
  "Video.mp4",
  "IMG_8757.MOV"
];

const Gallery = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="gallery-layout">
      <header className="gallery-header">
        <h1>Gallery</h1>
        <p>Explore our amazing moments!</p>
      </header>
      
      <div className="gallery-sections-container">
        <section className="gallery-section">
          <h2>Photos</h2>
          <div className="gallery-grid">
            {images.map((src, index) => (
              <div className="gallery-item" key={index} onClick={() => openModal(<img src={src} alt={`Gallery Item ${index + 1}`} />)}>
                <img src={src} alt={`Gallery Item ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>
        
        <section className="gallery-section">
          <h2>Videos</h2>
          <div className="gallery-grid">
            {videos.map((src, index) => (
              <div className="gallery-item" key={index} onClick={() => openModal(src.includes("youtube") ? <iframe title={`Video ${index + 1}`} width="100%" height="100%" src={src} frameBorder="0" allowFullScreen></iframe> : <video width="100%" height="100%" controls><source src={src} type="video/mp4" /></video>)}>
                {src.includes("youtube") ? (
                  <iframe title={`Video ${index + 1}`} width="100%" height="200" src={src} frameBorder="0" allowFullScreen></iframe>
                ) : (
                  <video width="100%" height="200" controls>
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      
      {modalContent && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content animate-popup" onClick={(e) => e.stopPropagation()}>
            {modalContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
