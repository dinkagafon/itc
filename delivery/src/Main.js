import React from 'react';
import Description from './Description';
import Store from './Store';


const Main = () => (
  <div>
    <Description />
    <Store
      lg={3}
      elem={8}
    />
  </div>
)

export default Main
