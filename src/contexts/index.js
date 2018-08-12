import React from "react";

export const AppContext = React.createContext();
export const withAppContext = Component => {
  return props => (
    <AppContext.Consumer>
      {context => <Component {...props} context={context} />}
    </AppContext.Consumer>
  );
};
