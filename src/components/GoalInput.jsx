import React, { useState } from 'react';
import '../styles/GoalInput.css';

const GoalInput = ({ onSave, initialGoal = '' }) => {
  const [goal, setGoal] = useState(initialGoal);

  const handleSave = () => {
    if (goal.trim() !== '') {
      onSave(goal);
      setGoal('');
    }
  };

  return (
    <div className="goal-input-container">
      <input
        type="text"
        placeholder="오늘의 목표를 입력하세요"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="goal-input-field"
      />
      <button onClick={handleSave} className="goal-input-button">
        저장
      </button>
    </div>
  );
};

export default GoalInput;
