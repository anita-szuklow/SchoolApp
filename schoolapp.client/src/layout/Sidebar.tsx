import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Grades } from '../school/GradesPage.jsx';
import { Timetable } from '../school/SchedulePage.js';
import { Outlet, Link } from 'react-router-dom';


export const Sidebar = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        Sidebar
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/grades" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Grades</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/timetable" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Timetable</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/projects" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Projects</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/attendance" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">Attendance</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        Sidebar Footer
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};