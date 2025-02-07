import { useState } from 'react';
import { PlusIcon, XMarkIcon, CogIcon, ShareIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import '../styles/FabMenu.css';

const FabMenu = ({ onShare }) => {
  const [fabOpen, setFabOpen] = useState(false);
  const navigate = useNavigate();

  const toggleFab = () => {
    setFabOpen(prev => !prev);
  };

  const handleSettings = () => {
    navigate('/settings');
    setFabOpen(false);
  };

  const handleShare = () => {
    onShare();
    setFabOpen(false);
  };

  return (
    <div className="fab-container">
      {fabOpen && (
        <div className="fab-actions">
          <button className="fab-action-button" onClick={handleShare} aria-label="공유하기">
            <ShareIcon className="fab-action-icon" />
            <span className="fab-action-label">공유하기</span>
          </button>
          <button className="fab-action-button" onClick={handleSettings} aria-label="설정">
            <CogIcon className="fab-action-icon" />
            <span className="fab-action-label">설정</span>
          </button>
        </div>
      )}
      <button className="fab-main-button" onClick={toggleFab} aria-label="메뉴">
        {fabOpen ? (
          <XMarkIcon className="fab-main-icon" />
        ) : (
          <PlusIcon className="fab-main-icon" />
        )}
      </button>
    </div>
  );
};

export default FabMenu;
