/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from '@mui/material';
import { Avatar } from '@mui/material';
import { socketService } from "../../services/socket.service";
import { userService } from "../../services/user.service";
import { Component, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {loadUsers, addNotification, updateNotifications} from '../../store/user.actions'

// import NotificationsIcon from '@mui/icons-material/Notifications';
export const HeaderSeller = (props) => {

  const { notifications, users } = useSelector(state => state.userModule)
  const dispatch = useDispatch()
  const [user, setUser] = useState({})
  const [isChack, setIsChack] = useState(false)

  useEffect(() => {
    const user = userService.getLoginUser();
    setUser(user)
    dispatch(updateNotifications()) 
    dispatch(loadUsers())
    socketService.on('new order', order => {
      dispatch(addNotification(order)) 
      dispatch(updateNotifications()) 
      return () => {
        socketService.off("new order");
      }
    })
    
  }, [])

  const onToggleMode = () => {
    user.isSeller = !user.isSeller
  }

  const toogle = () => {
    setIsChack(!isChack);
  };



  return (
    <>
      <div className={isChack ? "screen header-seller-container" : "header-seller-container"}>
        {/* <div className="hamburger" onClick={toogle}> <i class="fas fa-th-large" ></i></div> */}
        <div>
          <Link to={"/sellerProfile"} className="navbar-logo">
            Cinco
          </Link>
        </div>
        <nav className="seller-navbar-links">
          <ul className="flex">
            <li>
              <a className="clean-link" href="/sellerProfile/dashboard">
                Dashboard
              </a>
            </li>
            <li>
              <a className="clean-link" href="/sellerProfile/messages">
                Messages
              </a>
            </li>
            <li>
              <a className="clean-link" href="/sellerProfile/orders">
                Orders
              </a>
            </li>
            <li>
              <a className="clean-link" href="/sellerProfile/gigs">
                Gigs
              </a>
            </li>
            <li>
              <a className="clean-link" href="/sellerProfile/analytics">
                Analytics
              </a>
            </li>
            <li>
              <a className="clean-link" href="/sellerProfile/earnings">
                Earnings
              </a>
            </li>
            <li>
              <a className="clean-link" href="/sellerProfile/community">
                Community
              </a>
            </li>
          </ul>
        </nav>
        <div className="prof-pic-nav">
          <nav>
            <ul>
              <li><a className="pointer" onClick={onToggleMode()}>Switch to Buying</a></li>
              <div className="badge-notify pointer">
                <Badge badgeContent={notifications.length} color="error">
                  <a className="clean-link" href="/sellerProfile/orders"><i className="far fa-bell"></i></a>
                </Badge>
              </div>
              <li>
                <a className="pointer">
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar alt="Shaul Battzon" src={user.imgUrl} />
                  </Badge>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={isChack ? 'blackScreen' : ''}></div>
    </>
  );
}
