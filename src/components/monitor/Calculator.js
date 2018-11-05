import React from 'react';

class Calculator extends React.Component {


    showOrders(orders) {
        if (!orders || orders.length === 0) {
            return <li className="text-right text-dark">ไม่มีสินค้า</li>
        } else {
            return orders.map(order => {
                return (
                    <li key={order.product.productId} className="text-right text-success">{order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <button className="btn btn-light btn-sm" onClick={() => this.props.onDelOrder(order.product)}>X</button>
                    </li>
                )
            })
        }
    }

    render() {
        const { totalPrice, orders } = this.props
        return (
            <div>
                <h2 className="text-right">{totalPrice}</h2>
                <hr />
                <ul className="list-unstyled ">
                    {this.showOrders(orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-success" onClick={() => this.props.onConfirnOrder()}>ยืนยัน</button>
                <button className="btn btn-block btn-danger" onClick={() => this.props.onCancelOrder()}>ยกเลิก</button>
            </div>
        )
    }
}

export default Calculator;