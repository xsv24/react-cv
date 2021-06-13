
import React, { Component } from 'react';
import Portal from '../utils/Portal';
import { Transition } from 'react-transition-group';

import './modal.scss';

export default class Modal extends Component{

	constructor(props){
		super(props);
		
		this.ref = null;

		this.state = {
			isOpen: this.props.isOpen,
			closing: false
		}
	}

	componentDidUpdate(prevProps, prevState){
		if(this.props.isOpen !== prevProps.isOpen){
			this.setState({isOpen: this.props.isOpen});
		}
	}
	
	toggle = () => {
		(this.props.toggle && this.props.toggle()) 
		|| this.setState({isOpen: !this.state.isOpen});
	}

	render(){

		return (
			<Portal>
				<Transition 
					in={this.state.isOpen}
					timeout={200}
					unmountOnExit 
				>
					{state => (
						<div className={`backdrop backdrop-${state}`} onClick={this.toggle} >
							<div ref={ref => this.ref = ref} 
								className={`modal modal-${state}`} 
								onClick={e => e.stopPropagation()}
								onKeyDown={e => console.log(e.keyCode)}>
								{this.props.children}
							</div>
						</div>
					)}
				</Transition>
			</Portal>
		);	
	}
}