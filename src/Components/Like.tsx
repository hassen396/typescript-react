import { useState } from "react";
import { LuHeart } from "react-icons/lu";
const Like = () => {
    const [isLiked, setIsLiked] = useState(false)
    return ( <LuHeart color={isLiked? "red":"" } fill={isLiked? "red":""} size={30} className="mt-4" onClick={()=>setIsLiked(!isLiked)}/> );
}
 
export default Like;