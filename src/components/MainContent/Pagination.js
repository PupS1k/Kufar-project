import React from 'react';
import arrow from '../../images/arrow.png'
import IconButton from '../IconButton';

const Pagination = () => (
  <div className="pagination">
    <IconButton
      border={true}
      className="pagination__btn pagination__btn_previous"
      iconSize="primary"
      icon={arrow}
      alt="Arrow"
      disabled
    />
    <p className="pagination__page pagination_page_active">1</p>
    <p className="pagination__page">2</p>
    <p className="pagination__page">3</p>
    <p className="pagination__page points">...</p>
    <p className="pagination__page">62893</p>
    <IconButton
      border={true}
      className="pagination__btn pagination__btn_next"
      iconSize="primary"
      icon={arrow}
      alt="Arrow"
    />
  </div>
);

export default Pagination;
