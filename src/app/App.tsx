import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './Layout';
import './common/Normalize.scss';
import ToolColorsPage from '../pages/ToolColorsPage/ToolColorsPage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
import CreateButtonPage from '../pages/CreateButtonPage/CreateButtonPage';
import ButtonStyles from '../widgets/toolButton/buttonStyles/ButtonStyles';
import StyleBtn from '../features/Create__button/buttonOperation/styleBtn/StyleBtn';
import StyleHoverBtn from '../features/Create__button/buttonOperation/styleHoverBtn/StyleHoverBtn';


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Navigate to='/toolColors'/>}/>
      <Route path='favorites' element={<FavoritesPage />}/>
      <Route path='toolColors' element={<ToolColorsPage />}/>

      <Route path='createButton' element={<CreateButtonPage />}>
          <Route path='/createButton' element={<Navigate to='stylesBtn'/>}/>
          <Route path='stylesBtn' element={<ButtonStyles />}>
            <Route path='/createButton/stylesBtn' element={<Navigate to='styleBtn'/>}/>
            <Route path='styleBtn' element={<StyleBtn />}/>
            <Route path='styleHover' element={<StyleHoverBtn />}/>
          </Route>
      </Route>

    </Route>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;