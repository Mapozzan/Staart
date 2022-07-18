import{ BrowserRouter,Link} from 'react-router-dom'

import AppRoutes from './Routes'
import './styles/App.css';


function App() {


  return (
    <div className="wrapper">
      <BrowserRouter>
        <nav>
          <Link to='/'>Meu Feed</ Link>
          <Link to='/Most-Viewed'>Mais Visto</ Link>
        </nav>

        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
