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
      ? "오늘부터 새롭게 시작해보세요!"
      : streak === 1
      ? "첫 걸음을 내디뎠어요! 조금만 더 힘내세요!"
      : streak === 2
      ? "조금 노릇해진 빵 🍞, 계속 진행하세요!"
      : streak === 3
      ? "더 맛있게 노릇해졌어요 🔥, 멋진 발전입니다!"
      : streak === 4
      ? "달기물이 추가되었어요 🍯, 달콤해지는 중!"
      : streak === 5
      ? "생크림이 얹혔어요 🍦, 훌륭한 토스트!"
      : streak === 6
      ? "우유 한 잔과 함께 아침 식탁 완성 🥛!"
      : streak >= 7
      ? "스페셜 보상 해금! 대단해요! 🤩"
      : "";

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
