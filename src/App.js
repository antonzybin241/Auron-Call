import { NotificationContainer } from 'react-notifications';
import React from 'react';

import 'react-notifications/lib/notifications.css';

import './App.scss';

import Home from './pages/Home/Home';
import WalletSessionGate from './components/WalletLogin/WalletSessionGate';

function App() {
  return (
    <div className="App">
        <WalletSessionGate>
          <Home />
        </WalletSessionGate>
      <NotificationContainer />
    </div>
  );
}

export default App;
