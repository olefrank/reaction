import React from "react";
import { AppContext } from "../contexts";
/**
 * HoC with AppContext
 * @param {*} Component to enrich with AppContext
 */
export const withAppContext = Component => {
  return props => (
    <AppContext.Consumer>
      {context => <Component {...props} context={context} />}
    </AppContext.Consumer>
  );
};
