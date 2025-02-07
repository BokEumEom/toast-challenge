import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ToastDisplay from '../components/ToastDisplay';
import CheckButton from '../components/CheckButton';
import '../styles/Home.css';  // Home 페이지 전용 스타일 import

const Home = () => {
  const [toastState, setToastState] = useState('default');
  const [streak, setStreak] = useState(0);
  const [goal, setGoal] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedGoal = localStorage.getItem('goal');
    if (savedGoal) {
      setGoal(savedGoal);
    }
    const savedStreak = localStorage.getItem('streak');
    if (savedStreak) {
      const streakNumber = Number(savedStreak);
      setStreak(streakNumber);
      updateToastState(streakNumber);
    }
  }, []);

  const updateToastState = (newStreak) => {
    if (newStreak >= 7) {
      setToastState('perfect');
    } else if (newStreak >= 3) {
      setToastState('golden');
    } else if (newStreak > 0) {
      setToastState('light');
    } else {
      setToastState('default');
    }
  };

  const handleGoalComplete = () => {
    const newStreak = streak + 1;
    setStreak(newStreak);
    localStorage.setItem('streak', newStreak);
    updateToastState(newStreak);
  };

  const handleReset = () => {
    setStreak(0);
    localStorage.setItem('streak', 0);
    updateToastState(0);
  };

  return (
    <div className="home-container">
      <Header title="🍞 토스트 챌린지" />
      <div className="home-text">
        <p>오늘의 목표: {goal || '목표가 설정되지 않았습니다.'}</p>
        <button className="home-button" onClick={() => navigate('/goal')}>
          목표 설정
        </button>
        <button className="home-reset-button" onClick={handleReset}>
          리셋
        </button>
      </div>
      <ToastDisplay toastState={toastState} />
      <div className="home-text">
        <CheckButton onClick={handleGoalComplete} />
      </div>
      <div className="home-text">
        <p>연속 성공: {streak}일</p>
      </div>
    </div>
  );
};

export default Home;
