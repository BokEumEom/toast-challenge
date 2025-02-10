// src/components/Modal.jsx
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import '../styles/Modal.css';

const Modal = ({
  isOpen,
  onClose,
  title = "축하합니다!",
  message = "10회 목표 달성 보상으로 특별한 토스트 레시피가 해금되었습니다!"
}) => {
  const [animationData, setAnimationData] = useState(null);
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // public 디렉토리에서 badge.json 로드 (절대 경로 사용)
  useEffect(() => {
    fetch('/assets/lottie/badge.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading badge animation:", error));
  }, []);

  // 레시피 목록
  const recipes = [
    { label: "아보카도 에그 토스트 🥑", src: "/assets/images/avocado_egg_toast.webp" },
    { label: "허니 리코타 치즈 토스트 🍯", src: "/assets/images/honey_ricotta_toast.webp" },
    { label: "초코 바나나 크림 토스트 🍫", src: "/assets/images/choco_banana_cream_toast.webp" },
  ];

  // "레시피 보기" 버튼을 누르면 무작위로 한 레시피 선택
  const toggleRecipe = () => {
    if (!showRecipe) {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      setSelectedRecipe(recipes[randomIndex]);
    } else {
      setSelectedRecipe(null);
    }
    setShowRecipe(prev => !prev);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {animationData && !showRecipe && (
          <Lottie animationData={animationData} loop={false} className="modal-lottie" />
        )}
        <h2 className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>
        <button 
          className="modal-view-recipe-button" 
          onClick={toggleRecipe}
        >
          {showRecipe ? "레시피 숨기기" : "레시피 보기"}
        </button>
        {showRecipe && selectedRecipe && (
          <div className="modal-recipe-container">
            <img 
              src={selectedRecipe.src} 
              alt={selectedRecipe.label} 
              className="modal-recipe-image" 
            />
            <p className="modal-recipe-label">{selectedRecipe.label}</p>
          </div>
        )}
        <button className="modal-close-button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
