
//import ClassComponent from './pages/ClassComponent';
//import FunctionComponent from './pages/FunctionComponent';
//import SetStatePage from './pages/SetStatePage';
//import ReduxPage from './pages/ReduxPage';
//import ReactReduxPage from './pages/ReactReduxPage';
//import DialogPage from './pages/DialogPage';
//import RouterPage from './pages/RouterPage';
//import HookPage from './pages/HookPage'
//import HocPage from './pages/HocPage'
//import Footer from './component/Footer'
import AntdFromPage from './pages/AntdFromPage'
//import CreateFormAntdPage from './pages/CreateFormAntdPage'
import style from "./index.module.scss";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className={style.app}>
        <h3 className={style.logo}>scss模块应用</h3>
        {/*<RouterPage/>   
        <DialogPage/>
        <HookPage/>  
        <HocPage/>
         <Footer/> */}
        <AntdFromPage/>
       
    </div>
  );
}

export default App;