import React from 'react';
import arrow from '../../images/arrow.png'
import IconButton from '../IconButton';

const Pagination = () => (
  <div className="pagination">
    <IconButton
      border={true}
      className="pagination--btn-previous"
      iconSize="primary"
      icon={arrow}
      alt="Arrow"
      disabled
    />
    <p className="pagination--number active-pagination--number">1</p>
    <p className="pagination--number">2</p>
    <p className="pagination--number">3</p>
    <p className="pagination--number points">...</p>
    <p className="pagination--number">62893</p>
    <IconButton
      border={true}
      className="pagination--btn-next pagination--btn"
      iconSize="primary"
      icon={arrow}
      alt="Arrow"
    />
  </div>
);

export default Pagination;
