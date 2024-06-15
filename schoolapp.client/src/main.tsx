import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import {
//    createBrowserRouter,
//    RouterProvider,
//} from "react-router-dom";
import { Grades } from './school/GradesPage';
import { Schedule } from './school/SchedulePage.tsx';
import { Projects } from './school/ProjectsPage';
import { Attendance } from './school/AttendancePage.tsx';
import { Layout } from './layout/Layout';
import { Account } from './school/AccountPage';
import { Mail } from './school/MailPage';
import { Settings } from './school/SettingsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './school/LoginPage.tsx';
import { FinalGrades } from './school/FinalGradesPage.tsx';
import { Message } from './school/MessagePage.tsx';
import { NewMessage } from './school/NewMessagePage.tsx';

//const router = createBrowserRouter([
//    {
//        path: "/",
//        element: <App />,
//    },
//    {
//        path: "/towar",
//        element: <Layout><Towar /></Layout>,

//    },
//    {
//        path: "/towary",
//        element: <Layout><Towary /></Layout>
//    },
//]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement ).render(
    <React.StrictMode>
        {/*<RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                {/*<Route path='/' element={<App />}></Route>*/}
                <Route path='/grades' element={<Layout />}>
                    <Route index element={<Grades />} />
                </Route>
                <Route path='/finalgrades' element={<Layout />}>
                    <Route index element={<FinalGrades />} />
                </Route>
                <Route path='/schedule' element={<Layout />}>
                    <Route index element={<Schedule />} />
                </Route>
                <Route path='/projects' element={<Layout />}>
                    <Route index element={<Projects />} />
                </Route>
                <Route path='/attendance' element={<Layout />}>
                    <Route index element={<Attendance />} />
                </Route>
                <Route path='/account' element={<Layout />}>
                    <Route index element={<Account />} />
                </Route>
                <Route path='/mail' element={<Layout />}>
                    <Route index element={<Mail />} />
                </Route>
                <Route path='/message' element={<Layout />}>
                    <Route index element={<Message />} />
                </Route>
                <Route path='/newmessage' element={<Layout />}>
                    <Route index element={<NewMessage />} />
                </Route>
                <Route path='/settings' element={<Layout />}>
                    <Route index element={<Settings />} />
                </Route>
                <Route path='/login' element={<Layout />}>
                    <Route index element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter >
    </React.StrictMode>,
)