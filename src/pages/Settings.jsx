// src/pages/Settings.jsx
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { GoalContext } from '../contexts/GoalContext';
import '../styles/Settings.css';

const Settings = () => {
  const { goal, setGoal } = useContext(GoalContext);
  const navigate = useNavigate();

  // 목표 초기화 함수 (확인 모달 포함)
  const handleResetGoal = () => {
    if (window.confirm("정말 목표를 초기화 하시겠습니까? 이 작업은 복구할 수 없습니다.")) {
      setGoal('');
      localStorage.removeItem('goal');
      alert("목표가 초기화되었습니다.");
    }
  };

  return (
    <div className="settings-container">
      <Header title="설정" />

      {/* 현재 목표 카드 */}
      <div className="settings-card">
        <h2 className="settings-title">현재 목표</h2>
        <p className="settings-goal-text">
          {goal ? goal : "설정된 목표가 없습니다."}
        </p>
        <div className="settings-button-group">
          <button
            className="settings-change-button"
            onClick={() => navigate('/goal')}
          >
            목표 수정
          </button>
          <button
            className="settings-reset-button"
            onClick={handleResetGoal}
          >
            목표 초기화
          </button>
        </div>
      </div>

      {/* 앱 정보 카드 */}
      <div className="settings-card">
        <h2 className="settings-info-title">앱 정보</h2>
        <p>토스트 챌린지 앱</p>
        <p>버전 1.0.0</p>
        <p>© 2025 Your Company Name</p>
      </div>

      {/* 내비게이션 버튼 */}
      <button
        className="settings-back-button"
        onClick={() => navigate('/')}
      >
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default Settings;
