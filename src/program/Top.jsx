import React from 'react';
import './program.css';
import './inner.css';
import './box.css';

import Box from './Box'
import Nav from './Nav'
import AnimateTest from './AnimateTest'

export default function Top() {

    return (
        <div className='wrap'>
            <div className='sec_top'>                
                <div className='header'>
                    <div className='navi_pc'>
                        <Nav/>
                    </div>
                </div>    
            </div>
            <div className='ctn_wp ct_bg'>
                <div className='ctn_inner_ty2'>
                    <AnimateTest className='ctn_inner_ty2'/>

                    <h2 className='ctn_tl'>
                        프로그램
                    </h2>
                </div>
                <Box/>
            </div>
            <div>
            </div>

        </div>
    )
}
