import { useState, useEffect } from 'react';
import '../styles/GoalInput.css';

const GoalInput = ({ onSave, initialGoal = '' }) => {
  const [goal, setGoal] = useState(initialGoal);

  // 초기값이 바뀔 경우 반영 (GoalSetting 페이지에서 prop으로 전달된 값 동기화)
  useEffect(() => {
    setGoal(initialGoal);
  }, [initialGoal]);

  const handleSave = () => {
    if (goal.trim() !== '') {
      onSave(goal);
    } else {
      alert('유효한 목표를 입력하세요.');
    }
  };

  return (
    <div className="goal-input-container">
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="예: 아침 7시 기상, 10분 독서 등"
        className="goal-input-field"
      />
      <button onClick={handleSave} className="goal-input-save-button">
        저장
      </button>
    </div>
  );
};

export default GoalInput;
