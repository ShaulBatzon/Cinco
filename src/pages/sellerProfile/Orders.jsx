import React from "react";
import { connect } from 'react-redux'
import { loadOrders } from "../../store/order.actions"
// import { userService } from "../../services/user.service"
// import { gigService } from "../../services/gig.service"
import { Loader } from "../../cmps/Loader.jsx";

class _Orders extends React.Component {
    state = {
        orders: [],
        selected: 'active',
    }

    async componentDidMount() {
        try {
            this.props.loadOrders()
        }
        catch (_err) {
            console.log(_err)
        }
    }


    toggleSelected = (ev) => {
        const val = ev.target.innerHTML
        this.setState({selected: val})
    }

    render() {
        const { selected } = this.state
        const { orders } = this.props
        console.log('selected: ', selected);
        if (!orders || !orders.length) return <Loader />
        return (
            <section>
                <header className="header-row flex-between">
                    <h1>Manage Orders</h1>
                </header>
                <div className="orders-tabs">
                    <ul className="tabs flex">
                        <li className="selected"><a className="clean-link" onClick={this.toggleSelected}>Active</a></li>
                        <li className="selected"><a className="clean-link" onClick={this.toggleSelected}>Delivered</a></li>
                        <li className="selected"><a className="clean-link" onClick={this.toggleSelected}>Completed</a></li>
                        <li className="selected"><a className="clean-link" onClick={this.toggleSelected}>Cancelled</a></li>
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
                                <th>Note</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr><td>{orders[0]._id}</td></tr> */}
                            {orders.map((order, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>
                                            {order.buyer}
                                        </td>
                                        <td>
                                            {order.gigId}
                                        </td>
                                        <td>
                                            {order.dueOn}
                                        </td>
                                        <td>
                                            {order.price}
                                        </td>
                                        <td>
                                            {order.note && order.note}
                                        </td>
                                        <td>
                                            {order.status}
                                        </td>
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
    // removeOrder
}

export const Orders = connect(mapStateToProps, mapDispatchToProps)(_Orders)