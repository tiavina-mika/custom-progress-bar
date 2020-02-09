import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const BorderLinearProgress = withStyles({
  root: {
    height: 20,
    backgroundColor: '#E2E7EE',
    borderRadius: 7,
  },
  bar: {
    borderRadius: 7,
  },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  blueBar: {
    background: 'linear-gradient(to bottom, #2B9FF6, #269BF3 50%, #2097F0 75%, #4FA9EE 100%)',
  },
  greenBar: {
    background: 'linear-gradient(to bottom, #2B9FF6, #269BF3 50%, #2097F0 75%, #4FA9EE 100%)',
  },
  percent: {
    color: '#9FB1CA',
    fontWeight: 600
  },
  label: {
    color: '#76797F',
    fontSize: 18
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Progress = ({ value, color, width, label }) => {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);
  const [data, setData] = React.useState(0);

  React.useEffect(() => setData(value), [value]);

  React.useEffect(() => {
    const progress = max => setCompleted(max);
    progress(data)
  }, [data]);

  const getColorBarClassName = () => {
    let colored;
    if (color === 'blue') colored = classes.blueBar;
    if (color === 'green') colored = classes.greenBar;
    return colored;
  }

  return (
    <Box p={1} mb={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
        <Typography className={classes.label}>{label}</Typography>
        <Typography className={classes.percent}>{value}%</Typography>
      </Box>
      <BorderLinearProgress
        variant="determinate"
        color="secondary"
        value={completed}
        classes={{ bar: getColorBarClassName() }}
        style={{ width: width ? `${width}%`: '100%'}}
      />
    </Box>
  );
}

export default Progress;