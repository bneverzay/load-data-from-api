import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({ date: new Date() })
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <img style={{ height: 100 }} className="mt-1" src="/images/logo/logo.png" alt="logo" />
                    </div>
                    <div className="col-md-4 text-right">
                        <h5 className="text-danger mt-3">{this.state.date.toLocaleTimeString()}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;