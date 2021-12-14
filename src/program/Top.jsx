import React from 'react';
import './css/program.css';
import './css/inner.css';
import './css/box.css';
import './css/nav.css';

import ThemeContext from './ThemeContext';

import Box from './Box'
import Nav from './Nav'
import ThemeButton from './ThemeButton'
import AnimateTest from './AnimateTest'
import ToggleMenu from './ToggleMenu';
import Search from './Search';

class Top extends React.Component{
    state = {theme: 'light'};

    changeTheme = () => {
        this.setState(({ theme }) => ({
            theme: theme === "light" ? "dark" : "light"
        }));
      };


    render(){
        const {theme} = this.state;

        return (
            <div className='wrap'>
                <div className='sec_top'>                
                    <div className='header'>
                        <div className='navi_pc'>      
                        </div>                        
                    </div>    
                </div>
                <div className='ctn_wp ct_bg'>
                    <div className='ctn_inner_ty2'>    
                        <Nav/>          
                        <ThemeContext.Provider value={theme}>
                            <ThemeButton changeTheme={this.changeTheme}/>
                        </ThemeContext.Provider>
                        
                        <Search/>
                        

                        <ToggleMenu />

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
}

export default Top;
