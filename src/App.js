import logo from './logo.svg';
import './App.css';
import PageHeader from './components/PageHeader';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import BlogPage from './components/BlogPage';
import ContactUsPage from './components/ContactUsPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MemberHome from './components/MemberHome';
import AdminHome from './components/AdminHome';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Verify from './components/Verify';
import ForgotPassword from './components/ForgotPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageHeader />}>
        <Route index element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactuspage" element={<ContactUsPage />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/memberhome" element={<MemberHome />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path='/verify' element={<Verify />} />
        
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
