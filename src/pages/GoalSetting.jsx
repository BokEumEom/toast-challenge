import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import GoalInput from '../components/GoalInput';
import { GoalContext } from '../contexts/GoalContext';
import '../styles/GoalSetting.css';

const GoalSetting = () => {
  const { goal, setGoal } = useContext(GoalContext);
  const [localGoal, setLocalGoal] = useState(goal);
  const navigate = useNavigate();

  // Context의 goal 값과 동기화
  useEffect(() => {
    setLocalGoal(goal);
  }, [goal]);

  const handleSaveGoal = (newGoal) => {
    setGoal(newGoal);
    localStorage.setItem('goal', newGoal);
    alert('목표가 저장되었습니다.');
    navigate('/');
  };

  return (
    <div className="goal-setting-container">
      <Header title="목표 설정" />
      <div className="goal-setting-card">
        <h2 className="goal-setting-title">내 목표 설정</h2>
        {/* GoalInput 컴포넌트를 사용하여 목표 입력 UI 구현 */}
        <GoalInput onSave={handleSaveGoal} initialGoal={localGoal} />
        <p className="goal-setting-tip">명확하고 달성 가능한 목표를 작성해보세요.</p>
      </div>
      <button className="goal-setting-back-button" onClick={() => navigate('/')}>
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default GoalSetting;
