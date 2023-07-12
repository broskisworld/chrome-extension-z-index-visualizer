import React, { useEffect, useState } from 'react';
import type { AnyAction } from '@reduxjs/toolkit';
import type { Store } from 'webext-redux';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import Panel from './Panel';

import type { State } from '@/store/State';
import { createProxyStore } from '@/store';

import { PORT_NAMES } from '@/constants';

const container = document.getElementById('app-container');
const root = createRoot(container!);
root.render(<StoreWrapper />);

function StoreWrapper() {
  const [store, setStore] = useState<Store<State, AnyAction> | null>(null);

  const initProxyStore = async () => {
    const proxyStore = createProxyStore(PORT_NAMES.CONTENT_PORT);
    await proxyStore.ready();
    setStore(proxyStore);
  };

  useEffect(() => {
    initProxyStore();
  }, []);

  return (
    <div>
      {store && (
        <Provider store={store}>
          <Panel initProxyStore={initProxyStore} />
        </Provider>
      )}
    </div>
  );
}
