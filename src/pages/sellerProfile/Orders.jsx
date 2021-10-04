import React from "react";
import { connect } from 'react-redux'
import { loadOrders } from "../../store/order.actions"
import { userService } from "../../services/user.service"
import { gigService } from "../../services/gig.service"
import { Loader } from "../../cmps/Loader.jsx";

class _Orders extends React.Component {
    state = {
        orders: [],
        selected: null
    }

    componentDidMount() {
        this.getUserOrders()
    }
    
    
    getUserOrders = async () => {
        await this.props.loadOrders()
        const { orders } = this.props
        await console.log('userOrders: ', orders);
        // this.setState({ orders: userOrders })
    }
    
    
    
    toggleSelected = (ev) => {
        console.log('val: ', ev.target.innerHTML);
    }
    
    render() {
        console.log('updated cmp')
        const { selected } = this.state
        // const { orders } = this.state
        // if (!orders) return <Loader />
        return (
            <section>
                <header className="header-row flex-between">
                    <h1>Manage Orders</h1>
                </header>
                <div className="orders-tabs">
                    <ul className="tabs flex">
                        <li className="selected"><a className="clean-link" href="/orders/active" onClick={this.toggleSelected}>Active</a></li>
                        <li className="selected"><a className="clean-link" href="/orders/delivered">Delivered</a></li>
                        <li className="selected"><a className="clean-link" href="/orders/completed">Completed</a></li>
                        <li className="selected"><a className="clean-link" href="/orders/cancelled">Cancelled</a></li>
                    </ul>
                </div>
                <div className="orders-table">
                    <div>{selected}</div>
                    <table>
                        <thead>
                            <tr>
                                <th>Buyer</th>
                                <th>Gig</th>
                                <th>Due On</th>
                                <th>Total</th>
                                <th>Note</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {orders.map(order => {
                                <tr>
                                    <td>
                                        {order.buyer}
                                    </td>
                                    <td>
                                        {order.gig}
                                    </td>
                                    <td>
                                        {order.dueOn}
                                    </td>
                                    <td>
                                        {order.price}
                                    </td>
                                    <td>
                                        {order.note}
                                    </td>
                                    <td>
                                        {order.status}
                                    </td>
                                </tr>
                            })} */}
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
    // removeOrder
}

export const Orders = connect(mapStateToProps, mapDispatchToProps)(_Orders)