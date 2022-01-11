/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect, useDispatch, useSelector } from 'react-redux'
import { loadOrders, acceptOrder } from "../../store/order.actions"
// import { userService } from "../../services/user.service"
// import { gigService } from "../../services/gig.service"
import { Loader } from "../../cmps/Loader.jsx";
import { Alert } from '@mui/material';
import { fontSize } from "@mui/system";
import { useState, useEffect } from "react";
import { updateNotifications } from "../../store/user.actions";



export const Orders = (props) => {

    const { orders } = useSelector(state => state.orderModule)
    const dispatch = useDispatch()
    const [selected, setSelected] = useState('active')
    const [btnTxt, setBtnTxt] = useState('Accept')

    useEffect(() => {
        dispatch(loadOrders())
    }, [orders])

    const toggleSelected = (ev) => {
        const val = ev.target.innerHTML
        setSelected({ selected: val })
    }

    const workProccesBtn = (order) => {
        if (order.status === 'active') setBtnTxt({ btnTxt: 'Ready' })
        if (order.status === 'pending') setBtnTxt({ btnTxt: 'Accept' })
    }

    const onAcceptOrder = (acceptedOrder) => {
        if (acceptedOrder.status === 'active') return
        dispatch(acceptOrder(acceptedOrder));
        dispatch(updateNotifications(acceptedOrder))
    }

    if (!orders) return <Loader />
    return (
        <section className="main-container-orders">
            <header className="header-row flex-between">
                <h1>Manage Orders</h1>
            </header>
            <div className="orders-tabs">
                <ul className="tabs flex">
                    <li className="selected"><a onClick={toggleSelected}>All</a></li>
                    <li className="selected"><a onClick={toggleSelected}>Active</a></li>
                    <li className="selected"><a onClick={toggleSelected}>Delivered</a></li>
                    <li className="selected"><a onClick={toggleSelected}>Completed</a></li>
                    <li className="selected"><a onClick={toggleSelected}>Cancelled</a></li>
                </ul>
            </div>
            <div className="orders-table">
                <div className="order-filter-title">{selected}</div>
                <table>
                    <thead>
                        <tr>
                            <th>Buyer</th>
                            <th>Gig</th>
                            <th>Due On</th>
                            <th>Pack Name</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, idx) => {
                            return (
                                <tr key={idx}>
                                    {/* <div> */}
                                    <td data-th="Buyer">
                                        {order.buyer}
                                    </td>
                                    <td data-th="Gig">
                                        {order.gigName}
                                    </td>
                                    <td data-th="Due On">
                                        {order.dueOn}
                                    </td>
                                    <td data-th="Pack Name">
                                        {order.packName}
                                    </td>
                                    <td data-th="Total">
                                        {order.price}
                                    </td>
                                    <td data-th="Status">
                                        <Alert
                                            iconMapping={{
                                                info: 'new',
                                                warning: ' ',
                                                success: ' '

                                            }}
                                            color={order.status === 'pending' ? "warning" : order.status === 'Active' ? 'info' : "success"}
                                            severity={order.status === 'pending' ? "info" : order.status === 'Active' ? 'warning' : "success"}>
                                            {order.status}</Alert>


                                    </td>
                                    {order.status === 'pending' &&
                                        <td className="accpet">
                                            <button onClick={() => onAcceptOrder(order)}>Accept</button>
                                        </td>
                                    }
                                    {/* </div> */}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}


