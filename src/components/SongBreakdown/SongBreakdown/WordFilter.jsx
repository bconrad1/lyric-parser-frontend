import React from 'react';

const WordFilter = ({minWordCount, maxWordCount}) => {
  console.log(minWordCount, maxWordCount);
  return (
    <div className={'filter-container'}>
      <form>
        <div className={'form-input-container'}>
          <label className={'form-input-label'}>Min</label>
          <input type={'text'} min={minWordCount}
                 placeholder={minWordCount}
                 className={'form-input-count'}/>
        </div>
        <div className={'form-input-container'}>
          <label className={'form-input-label'}>Max</label>
          <input type={'text'} max={maxWordCount}
                 placeholder={maxWordCount}
                 className={'form-input-count'}/>
        </div>
      </form>
    </div>
  );
};
export default WordFilter;