import React from 'react';
import { formatDate } from '../../utils';
import './experiences.scss';

const ExperienceItem = props =>  ( 
    <div key={props.title} className='exp_descript'>

        <div className='loc_date_exp'>
            <h2> {props.facility} </h2>
            <p> {formatDate(props.fromDate) } - {formatDate(props.toDate || '')} </p>
        </div>

        <div style={{ flex: 1 }}>
            <h3> {props.title} </h3>

            <p> {props.description} </p>

            <a href={props.link} target='_blank' rel='noopener noreferrer'>
                <img 
                    alt='chain'
                    width='18px'
                    height='18px' 
                    src='/images/link.png' 
                />
                
                {props.linkName || props.title} 
            </a>
            <div>
                <button 
                    className='link' 
                    disabled={!props.cords}
                    onClick={() => props.toggleMap(props.cords)} 
                > 
                    <img 
                        alt='location pin'
                        width="16px"
                        height="16px"
                        src='/images/map-marker.svg'
                    /> 
                    
                    {props.location}
                </button>
            </div>
        </div>
    </div>
);

export default ExperienceItem;