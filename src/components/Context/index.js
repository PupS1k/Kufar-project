import React from 'react';

export const Context = React.createContext();

const ContextProvider = props => (
  <Context.Provider value={props.value}>
    {props.children}
  </Context.Provider>
);

export default ContextProvider;
