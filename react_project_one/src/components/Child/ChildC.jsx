import React, { useContext } from 'react'
// import { UserContext } from '../../App'
import { ThemeComtext } from '../../App';
const ChildC = () => {
    // const user = useContext(UserContext);
    const theme = useContext(ThemeComtext);
  return (
    <div>
        {/* {user.name} */}

    </div>
  )
}

export default ChildC