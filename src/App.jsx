import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GoalSetting from './pages/GoalSetting';
import Settings from './pages/Settings';
import { GoalProvider } from './contexts/GoalContext';

const App = () => {
  return (
    <GoalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goal" element={<GoalSetting />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </GoalProvider>
  );
};

export default App;
