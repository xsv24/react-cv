import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Anim({children, props}){
    return (
        <CSSTransition {...props}>
            {state => children}
        </CSSTransition>
    );
}