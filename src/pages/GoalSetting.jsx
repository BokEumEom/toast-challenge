// src/pages/GoalSetting.jsx
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import GoalInput from '../components/GoalInput';
import GoalHistory from '../components/GoalHistory';
import { GoalContext } from '../contexts/GoalContext';
import '../styles/GoalSetting.css';

const GoalSetting = () => {
  const { goal, setGoal } = useContext(GoalContext);
  const [localGoal, setLocalGoal] = useState(goal);
  const [goalHistory, setGoalHistory] = useState([]);
  const navigate = useNavigate();

  // Context의 goal 값과 히스토리 초기화
  useEffect(() => {
    setLocalGoal(goal);
    const storedHistory = localStorage.getItem('goalHistory');
    if (storedHistory) {
      try {
        setGoalHistory(JSON.parse(storedHistory));
      } catch (error) {
        console.error("Error parsing goal history", error);
        setGoalHistory([]);
      }
    }
  }, [goal]);

  // 목표 저장 시, 히스토리에 중복 없이 모두 추가 (제한 없음)
  const handleSaveGoal = (newGoal) => {
    setGoal(newGoal);
    localStorage.setItem('goal', newGoal);
    setGoalHistory((prevHistory) => {
      let updatedHistory = prevHistory.filter((item) => item !== newGoal);
      updatedHistory.unshift(newGoal);
      // 제한을 제거하여 모든 항목 저장
      localStorage.setItem('goalHistory', JSON.stringify(updatedHistory));
      return updatedHistory;
    });
    alert('목표가 저장되었습니다.');
    navigate('/');
  };

  // 히스토리 항목 클릭 시 입력 필드에 반영
  const handleHistorySelect = (historyGoal) => {
    setLocalGoal(historyGoal);
  };

  return (
    <div className="goal-setting-container">
      <Header title="목표 설정" />
      
      {/* 목표 입력 카드 */}
      <div className="goal-setting-card">
        <h2 className="goal-setting-title">내 목표 설정</h2>
        <GoalInput onSave={handleSaveGoal} initialGoal={localGoal} />
        <p className="goal-setting-tip">명확하고 달성 가능한 목표를 작성해보세요.</p>
      </div>
      
      {/* 홈으로 돌아가기 버튼 */}
      <button className="goal-setting-back-button" onClick={() => navigate('/')}>
        홈으로 돌아가기
      </button>
      
      {/* GoalHistory 영역은 별도의 래퍼로 배치하여, 홈 버튼 아래쪽에 왼쪽 정렬 */}
      <div className="goal-history-wrapper">
        <GoalHistory history={goalHistory} onSelect={handleHistorySelect} initialDisplayCount={5} />
      </div>
    </div>
  );
};

export default GoalSetting;
