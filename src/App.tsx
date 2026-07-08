import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IntersectObserver from '@/components/common/IntersectObserver';
import { Toaster } from '@/components/ui/sonner';

import { routes } from './routes';

const App = () => {
  return (
    <Router>
      <IntersectObserver />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster position="bottom-right" richColors closeButton />
    </Router>
  );
};

export default App;
