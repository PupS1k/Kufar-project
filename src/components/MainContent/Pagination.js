import React from 'react';
import Button from '../Button';

const Pagination = () => (
  <div className="pagination">
    <Button  className="pagination--btn pagination--btn-previous" disabled />
    <p className="pagination--number active-pagination--number">1</p>
    <p className="pagination--number">2</p>
    <p className="pagination--number">3</p>
    <p className="pagination--number points">...</p>
    <p className="pagination--number">62893</p>
    <Button className="pagination--btn pagination--btn-next" />
  </div>
);

export default Pagination;
