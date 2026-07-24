import React, { createContext, useContext, useState } from 'react';

const LightboxContext = createContext();

export function LightboxProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({ src: '', title: '', desc: '' });

  const openLightbox = (src, title, desc) => {
    setData({ src, title, desc });
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    const handleGlobalClick = (e) => {
      const card = e.target.closest('.showcase-card, .cert-card, .btn-view-photo');
      if (card) {
        // If it's a link or button (but not the view-photo button), don't trigger lightbox
        if (e.target.closest('a') && !e.target.closest('.btn-view-photo')) return;

        let targetCard = card;
        if (card.classList.contains('btn-view-photo')) {
          targetCard = card.closest('.gal-item');
        }
        if (!targetCard) return;

        const img = targetCard.querySelector('img');
        if (!img) return;

        const title = targetCard.querySelector('h4, h3, .card-title, .gal-caption')?.textContent || img.alt || 'TechnoKraft Showcase';
        const desc = targetCard.querySelector('p')?.textContent || '';
        
        openLightbox(img.getAttribute('src'), title, desc);
        e.preventDefault();
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      <div 
        className={`global-image-modal-backdrop ${isOpen ? 'open' : ''}`} 
        id="globalImageModal"
        onClick={(e) => {
          if (e.target.id === 'globalImageModal') closeLightbox();
        }}
      >
        <div className="global-image-modal">
          <button 
            className="global-modal-close-btn" 
            id="closeGlobalImageModal"
            onClick={closeLightbox}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <div className="global-modal-image-container">
            {data.src && <img id="globalModalImg" src={data.src} alt={data.title || "Showcase Preview"} />}
          </div>
          <div className="global-modal-body">
            <h3 className="global-modal-title" id="globalModalTitle">{data.title}</h3>
            <p className="global-modal-desc" id="globalModalDesc">{data.desc}</p>
          </div>
        </div>
      </div>
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  return useContext(LightboxContext);
}
