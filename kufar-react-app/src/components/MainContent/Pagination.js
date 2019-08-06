import React from 'react';

const Pagination = () => (
    <div className="pagination">
      <button className="pagination--btn pagination--btn-previous" disabled/>
      <p className="pagination--number active-pagination--number">1</p>
      <p className="pagination--number">2</p>
      <p className="pagination--number">3</p>
      <p className="pagination--number points">...</p>
      <p className="pagination--number">62893</p>
      <button className="pagination--btn pagination--btn-next"/>
    </div>
);

export default Pagination;