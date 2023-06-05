import './App.css';
import ListStudent from './Component/listStudent';
import { Provider } from 'react-redux';
import store from './store/store'
import FooterPart from './Component/footer'
import HeaderPart from './Component/header'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import NewStudent from './Component/createNewStudent';

function App() {
  return (
    <Provider store={store}>
      <div>
        <HeaderPart />
        <div className="container">
            <BrowserRouter>
              <Routes>
                <Route path='/' exact element={<ListStudent/>}/>
                <Route path='/students' element={<ListStudent/>}/>
                <Route path='/new_student/:id' element={<NewStudent/>}/>
              </Routes>
            </BrowserRouter>
        </div>
        <FooterPart />
      </div>
    </Provider>
  );
}

export default App;
