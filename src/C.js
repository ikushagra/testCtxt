// import React,{useContext} from 'react'
// import {Test} from './App'

// export default function C() {

//   const val = useContext(Test)

//   return (
//     <div>
// {val}
//     </div>
//   );
// }

import React, { useContext } from "react";
import { data } from "./App";

export default function C() {
  const myVal = useContext(data);
  return <div>{myVal}</div>;
}
