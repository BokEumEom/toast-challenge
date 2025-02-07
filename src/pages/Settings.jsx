import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Settings.css';  // Settings 페이지 전용 스타일 import

const Settings = () => {
  const [goal, setGoal] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedGoal = localStorage.getItem('goal');
    if (savedGoal) {
      setGoal(savedGoal);
    }
  }, []);

  const handleResetGoal = () => {
    localStorage.removeItem('goal');
    setGoal('');
    alert('목표가 초기화되었습니다.');
  };

  return (
    <div className="settings-container">
      <Header title="설정" />
      <div style={{ margin: '1rem 0' }}>
        <p>현재 설정된 목표: {goal || '설정된 목표가 없습니다.'}</p>
        <button className="settings-reset-button" onClick={handleResetGoal}>
          목표 초기화
        </button>
      </div>
      <button
        className="settings-back-button"
        onClick={() => navigate('/')}
      >
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default Settings;
