import React from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Progress from './Progress';

const App = () => {
  return (
    <Box>
      <Box p={1}>
        <Typography variant="h6">Programming Langage</Typography>
      </Box>
      <Progress value={60} color="blue" label="Javascript"/>
      <Progress value={42} color="green" label="PHP"/>
      <Progress value={82} color="violet" label="Python"/>
    </Box>
  );
}
export default App;
