import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import NavbarOne from './NavbarOne'
import Registration from './Registtration'
import AdminLogIn from './AdminLogIn'
import Library from './Library'
import InformationTechnology from './InformationTechnology'
import Electronics from './Electronics'
import General from './General'
import Notifications from './Notifications'
import ClassRoom from './ClassRoom'
import ExploreComputer from './ExploreComputer'
import ExploreENTC from './ExploreENTC'
import ExploreIT from './ExploreIT'
import AdminDashboard from './AdminDashboard'
import AdminFeedBack from './AdminFeedBack'
import StudyMaterial from './StudyMaterial'
import CreateClassroom from './CreateClassroom'
import ViewClassroom from './ViewClassroom'
import AddBook from './AddBook'
import SendNotification from './SendNotification'
import ViewNotification from './ViewNotification'
import BookDowlode from './BookDowlode'
import BookDownload from './NoteDownlode'
import ClassRoomForm from './ClassRoomForm'
import Myclasspass from './myclasspass'
import MyClass from './myclass'
import UserDeleted from './Deleted'
import FeedBackDelet from './FeedBackDelet'
import HomePageTwo from './HomePageTwo'
import DeletClassRoom from './DeletClassRoom'
import DeletNotification from './DeletNotification'
import DeletAllNotification from './DeletAllNotification'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <NavbarOne /> */}
        {/* <Route  path='/' element={<Navbar/>}/> */}
        <Routes>
          <Route path='/' element={<HomePageTwo/>} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/register' element={<Registration/>}/>
          <Route path='/admin-login' element={<AdminLogIn/>} />
          <Route path='/library' element={<Library/>}/>
          <Route path='/it' element={<InformationTechnology/>}/>
          <Route path='/entc' element={<Electronics/>}/>
          <Route path='/general' element={<General/>}/>
          <Route path='/notifications' element={<Notifications/>}/>
          <Route path='/classroom' element={<ClassRoom/>}/>
          <Route path='/explore-cse' element={<ExploreComputer/>}/>
          <Route path='/explore-it' element={<ExploreIT/>} />
          <Route path='/explore-entc' element={<ExploreENTC/>} />
          <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
          <Route path='/admin-feedbacks' element={<AdminFeedBack/>}/>
          <Route path='/send-study-material' element={<StudyMaterial/>} />
          <Route path='/create-classroom' element={<CreateClassroom/>} />
          <Route path='/view-classroom' element={<ViewClassroom/>} />
          <Route path='/add-book' element={<AddBook/>} />
          <Route path='/send-notification' element={<SendNotification/>} />
          <Route path='/view-notification' element={<ViewNotification/>}/>
          <Route path='/downloadBook/:id' element={<BookDowlode/>} />
          <Route path='/note-pdf/:id' element={<BookDownload/>} />
          <Route path='/class-form/:id' element={<ClassRoomForm/>} />
          <Route path='/myclasspass/:id' element={<Myclasspass/>} />
          <Route path='/myclass/:id' element={<MyClass/>} />
          <Route path='/remove-user/:id' element={<UserDeleted/>} /> 
          <Route path='/delet-feedback/:id' element={<FeedBackDelet/>} />
          <Route path='/class-remove/:id' element={<DeletClassRoom/>} />
          <Route path='/remove-notification/:id' element={<DeletNotification/>}/>
          <Route path='/remove-all' element={<DeletAllNotification/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
