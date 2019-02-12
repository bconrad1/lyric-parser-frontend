import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const NavigationHeader = ({currentPage, currentPages}) => {
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
                : null} header-item`}>{page}
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
};
export default NavigationHeader;