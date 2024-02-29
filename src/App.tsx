import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Instructions from './components/Instructions';
import Activity from './components/Activity';
import { store } from './store/store';
import { Provider } from 'react-redux';
import Result from './components/Result';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Intro1 />, 
    },
    {
      path: '/intro2',
      element: <Intro2 />, 
    },
    {
      path: '/intro3',
      element: <Intro3 />, 
    },
    {
      path: '/instructions',
      element: <Instructions />, 
    },
    {
      path: '/activity',
      element: <Activity />, 
    },
    {
      path: '/result',
      element: <Result />,
    },
  ]);

  return (
    <Provider store={store}>
      <div className="App">
        <img className="backgroundImg" src="/bg1.png" alt="" />
        <RouterProvider router={routes} />
      </div>
    </Provider>
  );
}

export default App;
