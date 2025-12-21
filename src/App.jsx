import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import HomeView from './components/HomeView';
import NoHelloView from './components/NoHelloView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route index element={<HomeView />} />
        <Route path="no-hello" element={<NoHelloView />} />
      </Route>
    </Routes>
  );
}

export default App;