// src/pages/Home.jsx
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoalContext } from '../contexts/GoalContext';
import Header from '../components/Header';
import ToastDisplay from '../components/ToastDisplay';
import CheckButton from '../components/CheckButton';
import { PlusIcon, CogIcon, ShareIcon, ClipboardIcon } from '@heroicons/react/24/solid';
import '../styles/Home.css';

const Home = () => {
  const { goal, streak, toastState, handleGoalComplete, handleReset } = useContext(GoalContext);
  const navigate = useNavigate();
  const [fabOpen, setFabOpen] = useState(false);

  const progressPercent = Math.min((streak / 7) * 100, 100);
  const motivationalMessage =
    streak === 0
      ? "새로운 시작을 응원합니다!"
      : streak < 3
      ? "조금만 더 힘내세요!"
      : streak < 7
      ? "좋아요! 계속 달려봐요!"
      : "대단해요! 완벽한 브런치가 기다립니다!";

  const handleShare = () => {
    alert(`오늘의 목표: ${goal}\n연속 성공: ${streak}일`);
    setFabOpen(false);
  };

  const handleSettings = () => {
    navigate('/settings');
    setFabOpen(false);
  };

  const toggleFab = () => {
    setFabOpen((prev) => !prev);
  };

  return (
    <div className="home-container">
      <Header title="🍞 토스트 챌린지" />

      {/* 기존 콘텐츠 */}
      <div className="card goal-card">
        <h2 className="card-title">
          <ClipboardIcon className="card-icon" />
          오늘의 목표
        </h2>
        <p>{goal || '목표가 설정되지 않았습니다.'}</p>
        <button className="home-button" onClick={() => navigate('/goal')}>
          목표 수정
        </button>
      </div>

      <div className="card toast-card">
        <ToastDisplay toastState={toastState} />
        <div className="toast-actions">
          <CheckButton onClick={handleGoalComplete} />
          <button className="home-reset-button" onClick={handleReset}>
            리셋
          </button>
        </div>
      </div>

      <div className="card streak-card">
        <h2>연속 성공</h2>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <p>{streak}일</p>
        <p className="motivational-message">{motivationalMessage}</p>
      </div>

      {/* 플로팅 FAB 메뉴 */}
      <div className="fab-container">
        {fabOpen && (
          <div className="fab-actions">
            <button className="fab-action-button" onClick={handleShare} aria-label="공유하기">
              <ShareIcon className="fab-action-icon" />
              <span className="fab-action-label">공유</span>
            </button>
            <button className="fab-action-button" onClick={handleSettings} aria-label="설정">
              <CogIcon className="fab-action-icon" />
              <span className="fab-action-label">설정</span>
            </button>
          </div>
        )}
        <button className="fab-main-button" onClick={toggleFab} aria-label="메뉴">
          <PlusIcon className={`fab-main-icon ${fabOpen ? 'open' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default Home;
