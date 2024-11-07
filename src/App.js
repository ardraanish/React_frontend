
import React, { Suspense } from 'react';
const Layouts = React.lazy(() => import('./LayoutRoutes/OutputRoutes'));


function App() {
  return (
    <div>
     
      <Suspense fallback={<div>Loading...</div>}>

        <Layouts />
      </Suspense>
    
    </div>
  );
}

export default App;
