import React, { useState } from 'react';
import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

const MyRocket = React.memo(props => {
  return <ClassRocket />
});

export default function LaunchPad() {
  const [rerenderCount, triggerRerender] = useState(0);

  setTimeout(() => { triggerRerender(rerenderCount + 1); }, 500);

  return (
    <div className="launchpad">
      <MyRocket />
    </div>
  );
}
