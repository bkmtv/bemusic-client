import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 5,
    margin: '30px 10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
  },
  image: {
    margin: '15px',
  },
}));