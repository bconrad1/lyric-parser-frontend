import React from 'react';

const NavigationHeader = ({currentPage}) => {
    return(
      <div className={'navigation-header'}>
        <div className={`${currentPage === 'home' ? 'active': null} header-item`}>Home</div>
      </div>
    )
}

export default NavigationHeader;