// src/components/GoalHistory.jsx
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import '../styles/GoalHistory.css';

const GoalHistory = ({ history, onSelect, initialDisplayCount = 5 }) => {
  const [showAll, setShowAll] = useState(false);

  if (!history || history.length === 0) return null;

  // 표시할 항목 결정: showAll 상태에 따라 전체 항목 또는 상위 initialDisplayCount개만 표시
  const displayedHistory = showAll ? history : history.slice(0, initialDisplayCount);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="goal-history-container">
      <h3 className="goal-history-header">이전 목표</h3>
      <div className="goal-history-list">
        {displayedHistory.map((item, index) => (
          <button
            key={index}
            className="goal-history-item"
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {history.length > initialDisplayCount && (
        <button 
          className={`goal-history-toggle-button ${showAll ? 'open' : ''}`} 
          onClick={toggleShowAll}
        >
          <span>{showAll ? "접기" : "더보기"}</span>
          <ChevronDownIcon className="toggle-icon" />
        </button>
      )}
    </div>
  );
};

export default GoalHistory;
