import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './styles/main.scss';

import {Provider} from 'react-redux';
import store from './store';

import HomePage from './components/GeneralComponents/HomePage';

import { loadUser } from './actions/authActions';

// Pages
import DoctorSearch from './components/PatientComponents/DoctorSearch';
import DoctorsList from './components/PatientComponents/DoctorsList';
import DoctorDetail from './components/GeneralComponents/DoctorDetail';
import  EmailVerify from './components/GeneralComponents/EmailVerify';


import DoctorBooking from './components/PatientComponents/DoctorBooking';
import BookingForm from './components/PatientComponents/BookingForm';
import BookingConfirm from './components/PatientComponents/BookingConfirm';
import PatientBookings from './components/PatientComponents/PatientBookings';
import PatientProfile from './components/PatientComponents/PatientProfile';


import PatientPrivateRoute from './components/GeneralComponents/routing/PatientPrivateRoute';
import DoctorPrivateRoute from './components/GeneralComponents/routing/DoctorPrivateRoute';
import { Switch, BrowserRouter, Route } from 'react-router-dom';


import Video from './components/GeneralComponents/pages/Video';
import CombinedRoute from './components/GeneralComponents/routing/CombinedRoute'
import Dashboard  from './components/DoctorComponent/Dashboard/Dashboard';
import DoctorAppointmentHistory  from './components/DoctorComponent/DoctorAppointment/DoctorAppointmentHistory';
import DoctorAppointment  from './components/DoctorComponent/DoctorAppointment/DoctorAppointment';
import Patients  from './components/DoctorComponent/Patients/Patients';
import ResetPasswordScreen from './components/GeneralComponents/Auth/ResetPasswordScreen';

import LoginForgot from './components/GeneralComponents/Auth/LoginForgot';
import TheLayout from './components/AdminComponents/containers/TheLayout';
import AdminUsers from './components/AdminComponents/AdminUsers';
import AdminPrivateRoute from './components/GeneralComponents/routing/AdminPrivateRoute';
//const AdminDashboard = React.lazy(() => import('./components/AdminComponents/AdminDashboard'));
import spinner from './images/icon/spinner_1.gif'

class App extends Component {
  componentDidMount() {
      store.dispatch(loadUser());  
  }


  render() {
    return (
      <Provider store={store}>
      <div className="App">
       <BrowserRouter>
       <Switch>
          {/* <Route               exact path="/" component={HomePage} />
          <Route exact path="/forgot" component={LoginForgot} />
          <PatientPrivateRoute exact path="/hi" component={DoctorSearch} />
          <PatientPrivateRoute exact path="/doctors" component={DoctorsList} />
          
          <PatientPrivateRoute exact path="/doctors/:id/book" component={DoctorBooking} />
          <PatientPrivateRoute exact path="/confirm-booking" component={BookingForm} />
          <PatientPrivateRoute exact path="/confirmed" component={BookingConfirm} />
          <PatientPrivateRoute exact path="/bookings" component={PatientBookings} />
          <PatientPrivateRoute exact path="/userProfile" component={PatientProfile} />
          <DoctorPrivateRoute  exact path="/doctorDashboard" component={Dashboard} />
          <DoctorPrivateRoute  exact path="/doctorAppointments" component={DoctorAppointment} />
          <DoctorPrivateRoute  exact path="/doctorPatients" component={Patients} />
          <DoctorPrivateRoute  exact path="/doctorAppointmentsHistory" component={DoctorAppointmentHistory} />
          <AdminPrivateRoute               exact path="/admin" component={TheLayout} />
          <AdminPrivateRoute               exact path="/admin/users" component={AdminUsers} />
          <CombinedRoute  path="/doctors/:id" component={DoctorDetail} />        
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
          <CombinedRoute             path="/:url" component={Video} />  */}
         
            {/* <Route path="/reset/:id" component={ResetPassword} /> */}
            <Route               exact path="/" component={HomePage} />
          <Route exact path="/forgot" component={LoginForgot} />
          <Route exact path="/verifyemail/:verifyToken" component={EmailVerify} />
          <PatientPrivateRoute exact path="/hi" component={DoctorSearch} />
          <PatientPrivateRoute exact path="/doctors" component={DoctorsList} />
          
          <PatientPrivateRoute exact path="/doctors/:id/book" component={DoctorBooking} />
          <PatientPrivateRoute exact path="/confirm-booking" component={BookingForm} />
          <PatientPrivateRoute exact path="/confirmed" component={BookingConfirm} />
          <PatientPrivateRoute exact path="/bookings" component={PatientBookings} />
          <CombinedRoute exact path="/userProfile" component={PatientProfile} />
          <DoctorPrivateRoute  exact path="/doctorDashboard" component={Dashboard} />
          <DoctorPrivateRoute  exact path="/doctorAppointments" component={DoctorAppointment} />
          <DoctorPrivateRoute  exact path="/doctorPatients" component={Patients} />
          <DoctorPrivateRoute  exact path="/doctorAppointmentsHistory" component={DoctorAppointmentHistory} />

          <AdminPrivateRoute               exact path="/admin" component={TheLayout} />
          <AdminPrivateRoute               exact path="/admin/users" component={AdminUsers} />
          <CombinedRoute  exact path="/doctors/:id" component={DoctorDetail} />        
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
          <CombinedRoute             path="/:url" component={Video} /> 
       </Switch>
       </BrowserRouter>
       
      </div>
      </Provider>
    );
  }
  
}

export default App;
