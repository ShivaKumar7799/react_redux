import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import userReducer from "./feautures/user"
import themeReducer from "./feautures/theme"
import CounterReducer from './feautures/Counter'
import ChangeColor from './components/ChangeColor';
import Counter from './components/Counter';
import secondCounterReducer from './feautures/SecondCounter'
import FetchApi from './components/FetchApi';
import apiData from './feautures/apiData';
import apiDataReducer from './feautures/apiData'

const store = configureStore({
  reducer : {
    user : userReducer,
    theme : themeReducer,
    counter : CounterReducer,
    secondCounter : secondCounterReducer,
    apiData : apiDataReducer
  }
})

function App() {
  return (
    <Provider store={store} >
      <Profile />
      <Login />
      <ChangeColor />
      <Counter />
      <FetchApi />
    </Provider>
  );
}

export default App;
