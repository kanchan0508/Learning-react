import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import ChatBox from './Components/ChatBox';

function App() {
  return (
    <Provider store={store}>
      <Head />
      <Body />
      <ChatBox />
    
    </Provider>
  );
}

export default App;
