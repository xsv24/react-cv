import React from "react";
import PropTypes from 'prop-types';
import useTimer from '../../hooks/useTimer';
import './terminal-styles.scss';

export default function TerminalText({ delay = 150, children = "", ...props }) {
    const count = useTimer(delay, children.length);

    return (
        <span {...props} >
            <span className="visible"> 
                {children.substr(0, count)}
            </span>
            <span className="hidden">
                {children.substr(count + 1, children.length)}
            </span>
        </span>
    );
};

TerminalText.propTypes = {
    delay: PropTypes.number,
    children: PropTypes.string.isRequired
};
