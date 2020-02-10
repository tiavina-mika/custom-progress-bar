import React from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LabeledProgress from './LabeledProgress';
import IphoneProgress from './IphoneProgress';

const App = () => {
  return (
    <Box>
        <Box mb={3}>
            <Box p={1}>
                <Typography variant="h6">Programming Langage</Typography>
            </Box>
            <IphoneProgress value={60} color="blue" label="Javascript"/>
            <IphoneProgress value={42} color="green" label="PHP"/>
            <IphoneProgress value={100} color="violet" label="Python"/>
        </Box>
        <Box>
            <Box p={1}>
                <Typography variant="h6">Frontend</Typography>
            </Box>
            <LabeledProgress value={98} label="React"/>
            <LabeledProgress value={40} label="Angular"/>
            <LabeledProgress value={100} label="HTML"/>
        </Box>
    </Box>
  );
}
export default App;
