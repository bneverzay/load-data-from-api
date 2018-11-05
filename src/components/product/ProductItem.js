import React from 'react';

class ProductItem extends React.Component {

    render() {
        const { productName, unitPrice, thumbnail } = this.props
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} alt="product" />
                <h5 className="mt-2">{productName}</h5>
                <p className="text-right">{unitPrice} THB</p>
                <button className="btn btn-block btn-success" onClick={() => this.props.onAddOrder(this.props.product)}>
                    ซื้อ
                </button>
            </div>
        )
    }
}

export default ProductItem;