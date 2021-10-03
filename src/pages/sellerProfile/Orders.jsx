import React from "react";
import { connect } from 'react-redux'
import {loadOrders} from "../../store/order.actions"


class _Orders extends React.Component {
    state = {
        selected: null
    }

    componentDidMount() {
        this.props.loadOrders()
        // this.props.loadUsers()
      }

    toggleSelected = (ev) => {
        console.log('val: ', ev.target.innerHTML);
    }

    render() {
        const { selected } = this.state
        // const { orders } = this.props
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