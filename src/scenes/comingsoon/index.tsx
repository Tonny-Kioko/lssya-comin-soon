import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import "_styles/comingsoon.scss"
import logo from '_images/logo-white.png'
import {ReactComponent as Headphone} from '_images/headphone.svg';
import SocialLinks from '@/componenets/atoms/sociallnk';
import ComingSoonBack from '_images/coming-soon-back.svg'

import * as typeformEmbed from '@typeform/embed'
import { createWidget, WidgetOptions } from '@typeform/embed';
import { NULL } from 'sass';

export default function ComingSoon(){
    const ref = useRef(null);
   
    useEffect(()=> {
        // const form = document.getElementById('form');
        // if(ref.current != null)
        //     createWidget('JK9h6bFy', { container: ref.current });
    });
    return (
        <div className='container'>
            
            <div className='header'>
                <img className='logo-image' src={logo} />
            </div>

            <div className = 'body'>
                <h1>COMING SOON!</h1>
                <h2>Online psychotherapy at your convenience</h2>
                <p className='subscription-desc'>Subscribe to our newsletter to get notified as soon as we are active:</p>
                <div className='email-subscribe'>
                    {/* <input type='text' placeholder='Enter Email Address'/> */}
                    {/* <a target='_blank' href='https://form.typeform.com/to/JK9h6bFy'><span>Become a VIP</span></a> */}
                    <a target='_blank' href='https://forms.gle/FozKiB57wYbiyvkG6'><span>Become a VIP</span></a>
                    {/* <div ref={ref} id="form">
                        <div data-tf-widget="JK9h6bFy" data-tf-opacity="100" data-tf-iframe-props="title=LSSYA Newsletter SignUp" data-tf-transitive-search-params data-tf-medium="snippet" style={{width:'500px', height:'300px'}}></div>
                        <script src="https://embed.typeform.com/next/embed.js"></script>
                    </div> */}
                </div>
            </div>

            <div className = 'footer'>
                <SocialLinks/>
                <div className = 'copyright'>
                    <p>© 2023 LSSYA™ - The pioneer online psychotherapy platform in Ethiopia</p>
                </div>
                <div className = 'telegram-wrapper'>
                    <a target='_blank' className='btn-telegram' href='https://t.me/LSSYA'>
                        <Headphone fill='white'/>
                    </a>
                </div>
            </div>
        </div>
    )
}