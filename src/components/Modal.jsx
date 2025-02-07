// src/components/Modal.jsx
import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import '../styles/Modal.css';

const Modal = ({
  isOpen,
  onClose,
  title = "축하합니다!",
  message = "10회 목표 달성 보상으로 특별한 토스트 레시피가 해금되었습니다!"
}) => {
  const [animationData, setAnimationData] = useState(null);

  // public 디렉토리에서 badge.json 로드 (절대 경로 사용)
  useEffect(() => {
    fetch('/assets/lottie/badge.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading badge animation:", error));
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {animationData && (
          <Lottie animationData={animationData} loop={false} className="modal-lottie" />
        )}
        <h2 className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>
        <button className="modal-close-button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
