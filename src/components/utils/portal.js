import React from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends React.Component {
    constructor(props){
        super(props);
        this.portalRoot = props.element || document.createElement('div');
    }

    componentDidMount(){
        document.body.appendChild(this.portalRoot);
    }

    componentWillUnmount(){
        document.body.removeChild(this.portalRoot);
    }

    render(){
        return ReactDOM.createPortal(
            this.props.children,
            this.portalRoot
        )
    }
}