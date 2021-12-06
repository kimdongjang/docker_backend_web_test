import React from 'react';
import './program.css';
import './inner.css';
import './box.css';

import Box from './Box'

export default function Top() {
    return (
        <div className='wrap'>
            <div className='sec_top'>                
                <div className='header'>
                    <div className='navi_pc'>
                        <nav>
                            <ul>
                                <li className='m1'>
                                    <a href="">행사개요</a>
                                    <ul className="dep1 s1">
                                        <li><a href="greeting.php">초대글</a></li>
                                        <li><a href="schedule.php">행사일정</a></li>
                                        <li><a href="map.php">오시는 길</a></li>
                                </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>    
            </div>
            <div className='ctn_wp ct_bg'>
                <div className='ctn_inner_ty2'>
                    <h2 className='ctn_tl'>
                        프로그램
                    </h2>
                </div>
                
                <Box/>
                
            </div>

        </div>
    )
}