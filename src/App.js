import './App.css';
import Header from './layouts/Header';
import Home from './pages/Home';
import ModalMembers from './components/ModalMembers';
import Sidebar from './layouts/Sidebar';
import { useContext } from 'react';
import { useAuthContext } from './features/authentification/hooks/useAuthContext';


import { Link, Navigate, Redirect } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from "react-router-dom";

import Navbar from './layouts/Navbar';
import MainBanner from './components/MainBanner';
//import Partner from './components/eLearningSchool/Partner';
//import Features from './components/eLearningSchool/Features';
import AboutUs from './components/AboutUs';
//import PopularCourses from './components/eLearningSchool/PopularCourses';
//import FeedbackSliderWithFunFacts from './components/eLearningSchool/FeedbackSliderWithFunFacts';
//import GetInstantCourses from './components/eLearningSchool/GetInstantCourses';
import ViewAllCourses from './components/ViewAllCourses';
//import AffordableCertification from './components/eLearningSchool/AffordableCertification';
import Footer from './layouts/Footer';
//import LatestNews from './components/Common/LatestNews';
import LoginForm from './pages/LoginForm';
import SubscribeForm from './pages/SubscribeForm';
import Welcome from './pages/Welcome';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import LearnerProfile from './pages/LearnerProfile';
import SubscriberProfile from './pages/SubscriberProfile';
import Groups from './pages/Groups';
import Users from './pages/Users';
import Features from './components/Features';
import Offers from './components/Offers';
import PublicCourse from './components/PublicCourse';
import PasswordReset from './pages/password-reset';
import Learners from './pages/Learners';
import Purchase from './pages/Purchase';
import FirstGroupPage from './pages/FirstGroupPage';
import LearnModeGame from './pages/LearnModeGame';
import MainPageHandler from './components/MainPageHandler';
import TestPage from './pages/TestPage';
import SideNav from './layouts/SideNav';
import CreateGame from './pages/CreateGame';
import GameSettings from './pages/GameSettings';
import GameLearn from './pages/GameLearn';
import LoadGame from './pages/LoadGame';

// authCtx.isLoggedIn
function App() {


	//const authCtx = useContext(AuthContext);
	const { user } = useAuthContext()

	//const isLoggedIn = authCtx.isLoggedIn;

	return (

		< >


			<Routes>
				<Route path='/' exact element={<>

					<Navbar />
					<AboutUs />

					<Offers />
					{/**/}<MainBanner />


					<ViewAllCourses />

					<Footer />
					{/*<Partner />
					<PopularCourses />
					<FeedbackSliderWithFunFacts />
					<GetInstantCourses />
					<LatestNews />
					<Features />
					<AffordableCertification />*/}


				</>}>

				</Route>


				<Route path='*' element={<>

					<Navbar />
					<AboutUs />
					<MainBanner />

					<ViewAllCourses />

					<Footer />
					{/*<Partner />
					<PopularCourses />
					<FeedbackSliderWithFunFacts />
					<GetInstantCourses />
					<LatestNews />
					<Features />
					<AffordableCertification />*/}


				</>}>

				</Route>
				<Route path='/test' exact element={
					<SideNav/>
				}></Route>
				<Route path='/Courses' exact element={
					<div id="elearn-layout" className="theme-purple">

						<Sidebar />
						<div className="main px-lg-4 px-md-4">

							<Header/>
							<Courses/>
							<ModalMembers />

						</div>
					</div>
				}></Route>
				<Route path='/FirstGroupPage' exact element={
					<div id="elearn-layout" className="theme-purple">

						<Sidebar />
						<div className="main px-lg-4 px-md-4">

							<Header />
							<FirstGroupPage />
							<ModalMembers />

						</div>
					</div>
				}></Route>
				<Route path='/Learners' exact element={
					<div id="elearn-layout" className="theme-purple">

						<Sidebar />
						<div className="main px-lg-4 px-md-4">

							<Header />
							<Learners />
							<ModalMembers />

						</div>
					</div>
				}></Route>
				<Route path='/Groups' exact element={
					<div id="elearn-layout" className="theme-purple">

						<Sidebar />
						<div className="main px-lg-4 px-md-4">

							<Header />
							<Groups />
							<ModalMembers />

						</div>
					</div>
				}></Route>
				<Route path='/SubscriberProfile' exact element={
					<div id="elearn-layout" className="theme-purple">

						<Sidebar />
						<div className="main px-lg-4 px-md-4">

							<Header />
							<SubscriberProfile />
							<ModalMembers />


						</div>
					</div>
				}></Route>

				<Route path='/SubscriberProfile/Learners' exact element={
					<div id="elearn-layout" className="theme-purple">

						<Sidebar />
						<div className="main px-lg-4 px-md-4">

							<Header />
							<Learners />



						</div>
					</div>
				}></Route>
				<Route path='/SubscriberProfile/Purchase' exact element={
					<div id="elearn-layout" className="theme-purple">
						<Sidebar />
						<div className="main px-lg-4 px-md-4">
							<Header />
							<Purchase />
						</div>
					</div>
				}></Route>

				<Route path='/LearnModeGame' exact element={
					<div id="elearn-layout" className="theme-purple">
						<Sidebar />
						<div className="main px-lg-4 px-md-4">
							<Header />
							<LearnModeGame />
						</div>
					</div>
				}></Route>

				<Route path='/Groups' exact element={
					<div id="elearn-layout" className="theme-purple">

						<Sidebar />
						<div className="main px-lg-4 px-md-4">

							<Header />
							<Groups />
							<ModalMembers />

						</div>
					</div>
				}></Route>
				<Route path='/CreateGame' exact element={
					<CreateGame/>
				}></Route>
				<Route path='/play' exact element={
					<GameSettings/>
				}></Route>
				<Route path='/load' exact element={
					<LoadGame/>
				}></Route>
				<Route path='/start' exact element={
					<GameLearn/>
				}></Route>
				
				<Route path='/CreateSetofcardGame' exact element={
					<div id="elearn-layout" className="theme-purple">

						<Sidebar />
						<div className="main px-lg-4 px-md-4">

							<Header />
							{/* <LearnerProfile /> */}
							<TestPage/>
							<ModalMembers />

						</div>
					</div>
				}></Route>

				<Route path='/home' exact element={
					<div id="elearn-layout" className="theme-purple">

						<Sidebar />
						<div className="main px-lg-4 px-md-4">

							<Header />
							<MainPageHandler/>
							<ModalMembers />

						</div>
					</div>
				}></Route>



				{user && (<Route path='/Logged' exact element={
					<div id="elearn-layout" className="theme-purple">

						<Sidebar />
						<div className="main px-lg-4 px-md-4">

							<Header />
							<Home />
							<ModalMembers />

						</div>
					</div>
				}>

				</Route>)}

				{!user && (<Route path='/Logged' exact element={
					<LoginForm />
				}>

				</Route>)}

				{/*!authCtx.isLoggedIn && <Navigate from='/Logged' to ='/Login-form'/>*/}

				{/* component: () => <Navigate to="/404" /> */}


				<Route path='/Login-form' exact element={<LoginForm />}></Route>
				<Route path='/Subscribe-form' exact element={<SubscribeForm />}></Route>
				<Route path='/Users' exact element={<Users />}></Route>
				<Route path='/ResetPassword' element={<PasswordReset />}></Route>
				<Route path='/PublicCourses' exact element={
					<>
						<Navbar />
						<PublicCourse />
						<Footer />
					</>
				}></Route>


				<Route path='/Contact' exact element={
					<>
						<Navbar />
						<Contact />
						<Footer />
					</>
				}>

				</Route>
				<Route></Route>
			</Routes>





		</>


	);
}


export default App;
