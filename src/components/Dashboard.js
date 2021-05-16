import React from 'react'
import '../App';
import DashboardContent from './DashboardContent';
import Login  from './Login.js'
import Nav from './Nav';
import Sidebar from './Sidebar';


const Dashboard = () => {
    return (
        <div className="landing-screen3">
            <Nav/>
            <div className="dashhome">
            <Sidebar/>
            <DashboardContent/>
            </div>
        </div>
    )
}

export default Dashboard
