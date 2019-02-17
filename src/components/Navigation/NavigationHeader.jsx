import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const NavigationHeader = ({currentPage, currentPages, setCurrentPage}) => {
  return (
    <div className={'navigation-header'}>
      <div className={'navigation-name'}>{'Lyric Parser'}</div>
      <div className={'page-container'}>
        {_.map(currentPages, (page, index) => {
          return (
            <Fragment key={index}>
              {index > 0 ? <span className={'navigation-break'}>{'-'}</span> : null}
              <div className={`${currentPage === page
                ? 'active'
                : null} header-item`}
              onClick={() => setCurrentPage(page)}>{page}
              </div>
            </Fragment>
          );
        })
        }
      </div>
    </div>
  );
};
NavigationHeader.propTypes = {
  currentPage: PropTypes.string,
  currentPages: PropTypes.array,
  setCurrentPage: PropTypes.func
};
export default NavigationHeader;