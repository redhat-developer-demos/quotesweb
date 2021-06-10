import React, { Component } from 'react'

class Quotes extends Component {

    intervalID;

    state = {
        quote: {},
    }

    componentDidMount() {
        this.getData();
    }

    componentWillUnmount() {
        /*
          stop getData() from continuing to run even
          after unmounting this component. Notice we are calling
          'clearTimeout()` here rather than `clearInterval()` as
          in the previous example.
        */
        clearTimeout(this.intervalID);
    }

    getData = () => {
        fetch('http://quotes-rhn-engineering-dschenck-dev.apps.sandbox.x8i5.p1.openshiftapps.com/quotes/random')
        .then(response => response.json())
            .then(data => {
                this.setState({quote:data});
                // call getData() again in N seconds
                this.intervalID = setTimeout(this.getData.bind(this), 2000);
            });
    }

    render() {
        return (
            <div>
                <div>Id: {this.state.quote.id}</div>
                <div>Hostname: <strong>{this.state.quote.hostname}</strong></div>
                <h3>"{this.state.quote.quotation}"</h3> -- {this.state.quote.author}
            </div>
        );
    }
}
export default Quotes;