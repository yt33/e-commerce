/* /frontend/context/AppContext.js

*/

import React from "react";
// create auth context with default value

// set backup defaul for isAuthenticated if none is provided in Provider
const AppContext = React.createContext({ isAuthenticated: false });
export default AppContext;
