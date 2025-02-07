import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import GoalInput from '../components/GoalInput';
import '../styles/GoalSetting.css';  // GoalSetting 페이지 전용 스타일 import

const GoalSetting = () => {
  const [goal, setGoal] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedGoal = localStorage.getItem('goal');
    if (savedGoal) {
      setGoal(savedGoal);
    }
  }, []);

  const handleSaveGoal = (newGoal) => {
    setGoal(newGoal);
    localStorage.setItem('goal', newGoal);
    navigate('/');
  };

  return (
    <div className="goal-setting-container">
      <Header title="목표 설정" />
      <GoalInput onSave={handleSaveGoal} initialGoal={goal} />
      <button
        className="goal-setting-back-button"
        onClick={() => navigate('/')}
      >
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default GoalSetting;
