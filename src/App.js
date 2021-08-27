// import React from 'react'
// import B from './B'

// export const Test = React.createContext()

// export default function App() {
//   return (
//     <div>
//       <Test.Provider value={"india"}>
// <B/>
//       </Test.Provider>

//     </div>
//   );
// }

import React from "react";
import B from "./B";

export const data = React.createContext();

export default function App() {
  return (
    <div>
      <data.Provider value={"hello world"}>
        <B />
      </data.Provider>
    </div>
  );
}
