import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './components/MainComponent';
import myStore from './redux/Store';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/error/ErrorBoundary';
import { Error404 } from './components/error/Error404';

function App() {
  // console.log("App.js", myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <ErrorBoundary fallback={<Error404 />}>
            <MainComponent />
          </ErrorBoundary>
        </BrowserRouter>

      </Provider>



    </div>
  );
}

export default App;
