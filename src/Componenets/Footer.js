import { useContext } from "react";
import userContext from "../Componenets/utils/userContext"

const Footer =() =>{

    const {user} = useContext(userContext)
    return (
        <div>
            <h4>This site is developed by {user.name} {user.email}</h4>
        </div>
    )
  }

  export default Footer;