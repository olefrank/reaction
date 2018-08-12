import React from "react";

/**
 * Context with App State
 */
export const AppContext = React.createContext();

/**
 * HoC witn AppContext
 * @param {*} Component to enrich with AppContext
 */
export const withAppContext = Component => {
  return props => (
    <AppContext.Consumer>
      {context => <Component {...props} context={context} />}
    </AppContext.Consumer>
  );
};
