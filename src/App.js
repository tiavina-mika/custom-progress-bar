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
            <IphoneProgress value={60} color="blue" label="Javascript" type="iphone" />
            <IphoneProgress value={42} color="green" label="PHP" type="iphone"/>
            <IphoneProgress value={100} color="violet" label="Python" type="iphone"/>
        </Box>
        <Box>
            <Box p={1}>
                <Typography variant="h6">Frontend</Typography>
            </Box>
            <LabeledProgress value={98} label="React"/>
            <LabeledProgress value={40} label="Angular"/>
            <LabeledProgress value={100} label="HTML"/>
        </Box>
        <Box>
            <Box p={1}>
                <Typography variant="h6">Backend</Typography>
            </Box>
            <IphoneProgress value={86} label="NodeJs" color="orange" type="paper"/>
            <IphoneProgress value={32} label="Symfony" color="green" type="paper"/>
            <IphoneProgress value={50} label="Ruby on Rails" color="blue" type="paper"/>
        </Box>
    </Box>
  );
}
export default App;
