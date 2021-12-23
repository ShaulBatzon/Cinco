/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from 'react-redux'
import { loadOrders, acceptOrder } from "../../store/order.actions"
// import { userService } from "../../services/user.service"
// import { gigService } from "../../services/gig.service"
import { Loader } from "../../cmps/Loader.jsx";

class _Orders extends React.Component {
    state = {
        selected: 'active',
        btnTxt: 'Accept'
    }

    async componentDidMount() {
        await this.props.loadOrders()
    }

    async componentDidUpdate() {
        await this.props.loadOrders()
    }

    toggleSelected = (ev) => {
        const val = ev.target.innerHTML
        this.setState({ selected: val })
    }

    workProccesBtn = (order) => {
        if (order.status === 'active') this.setState({btnTxt: 'Ready'}) 
        if (order.status === 'pending') this.setState({btnTxt: 'Accept'}) 
    }

    async acceptOrder(acceptedOrder) {
        if (acceptedOrder.status === 'active') return
        this.props.acceptOrder(acceptedOrder)
    }

    render() {
        const { selected, btnTxt } = this.state
        const { orders } = this.props
        if (!orders) return <Loader />
        return (
            <section className="main-container-orders">
                <header className="header-row flex-between">
                    <h1>Manage Orders</h1>
                </header>
                <div className="orders-tabs">
                    <ul className="tabs flex">
                        <li className="selected"><a onClick={this.toggleSelected}>All</a></li>
                        <li className="selected"><a onClick={this.toggleSelected}>Active</a></li>
                        <li className="selected"><a onClick={this.toggleSelected}>Delivered</a></li>
                        <li className="selected"><a onClick={this.toggleSelected}>Completed</a></li>
                        <li className="selected"><a onClick={this.toggleSelected}>Cancelled</a></li>
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
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, idx) => {
                                return (
                                    <tr key={idx}>
                                        {/* <div> */}
                                        <td>
                                            {order.buyer}
                                        </td>
                                        <td>
                                            {order.gigName}
                                        </td>
                                        <td>
                                            {order.dueOn}
                                        </td>
                                        <td>
                                            {order.price}
                                        </td>
                                        <td>
                                            {order.status}
                                        </td>
                                        <td>
                                            {(order.status === 'pending') &&  <button onClick={() => this.acceptOrder(order)}>Accept</button>}
                                        </td>
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
}


const mapStateToProps = state => {
    return {
        orders: state.orderModule.orders,
        // users: state.userModule.users,
        // loggedInUser: state.userModule.user
    }
}
const mapDispatchToProps = {
    loadOrders,
    acceptOrder
    // removeOrder
}

export const Orders = connect(mapStateToProps, mapDispatchToProps)(_Orders)