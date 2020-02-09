import React from "react";
import Progress from './Progress';

const App = () => {
  return (
    <>
      <Progress value={60} color="blue" label="Javascript"/>
      <Progress value={42} color="green" label="PHP"/>
      <Progress value={82} color="violet" label="Python"/>
    </>
  );
}
export default App;
