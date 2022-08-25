import { Header } from './componentes/Header/index';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { usePersustedState } from './utils/usePersistedState';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

function App() {
  const [theme, setTheme] = usePersustedState('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}></Header>
      </div>
    </ThemeProvider>
  );
}

export default App;
