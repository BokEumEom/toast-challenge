import { createContext, useState, useEffect } from 'react';

// Context 생성
export const GoalContext = createContext();

// Provider 컴포넌트 정의
export const GoalProvider = ({ children }) => {
  const [goal, setGoal] = useState('');
  const [streak, setStreak] = useState(0);
  const [toastState, setToastState] = useState('default');

  // 초기 로컬 스토리지 값 불러오기
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

  // 스트릭에 따른 토스트 상태 업데이트 함수
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

  // 목표 완료 시 처리 로직
  const handleGoalComplete = () => {
    const newStreak = streak + 1;
    setStreak(newStreak);
    localStorage.setItem('streak', newStreak);
    updateToastState(newStreak);
  };

  // 리셋 버튼 처리
  const handleReset = () => {
    setStreak(0);
    localStorage.setItem('streak', 0);
    updateToastState(0);
  };

  return (
    <GoalContext.Provider
      value={{
        goal,
        setGoal,
        streak,
        toastState,
        handleGoalComplete,
        handleReset,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
};
