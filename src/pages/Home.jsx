// src/pages/Home.jsx
import { useContext, useState, useEffect } from 'react';
import Header from '../components/Header';
import GoalCard from '../components/GoalCard';
import ToastCard from '../components/ToastCard';
import StreakCard from '../components/StreakCard';
import FabMenu from '../components/FabMenu';
import Modal from '../components/Modal'; // Modal.jsx 사용
import { GoalContext } from '../contexts/GoalContext';
import '../styles/Home.css';

const Home = () => {
  const { goal, streak, toastState, handleGoalComplete, handleReset } = useContext(GoalContext); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onGoalComplete = () => {
    handleGoalComplete();
  };

  const onReset = () => {
    handleReset();
  };

  // streak가 10회가 되면 모달 띄우기
  useEffect(() => {
    if (streak === 10) {
      setIsModalOpen(true);
    }
  }, [streak]);

  // 모달 닫기 시 streak 초기화
  const closeModal = () => {
    setIsModalOpen(false);
    handleReset();
  };

  const handleShare = () => {
    alert(`오늘의 목표: ${goal}\n연속 성공: ${streak}회`);
  };

  const progressPercent = Math.min((streak / 10) * 100, 100);
  const motivationalMessage =
    streak === 0
      ? "새로운 시작을 응원합니다!"
      : streak < 5
      ? "조금만 더 힘내세요!"
      : streak < 10
      ? "좋아요! 계속 달려봐요!"
      : "대단해요! 보상이 기다립니다!";

  return (
    <div className="home-container">
      <Header title="🍞 토스트 챌린지" />
      
      <GoalCard goal={goal} />
      <ToastCard 
        toastState={toastState} 
        onGoalComplete={onGoalComplete} 
        onReset={onReset} 
      />
      <StreakCard 
        streak={streak} 
        progressPercent={progressPercent} 
        motivationalMessage={motivationalMessage} 
      />
      <FabMenu onShare={handleShare} />

      {/* Modal 컴포넌트 사용 */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Home;
