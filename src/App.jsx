import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './redux/store';
import ThemeProvider from './theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './assets/style.css';

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </ReduxProvider>
    </>
  );
}

export default App;
