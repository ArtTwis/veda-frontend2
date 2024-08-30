const { createContext } = require("react");

const UserContext = createContext(null);

UserContext.displayName = "UserContext";

export default UserContext;
