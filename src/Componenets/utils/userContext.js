import { createContext } from "react";

const userContext = createContext({
    user : {
        name: "Guest",
        email: "guest@example.com"
    },
})

userContext.displayName = "userContext"

export default userContext;