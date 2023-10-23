import { Paper, Divider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const padding = '20px';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: padding,
    },
    title: {
        margin: 0,
        padding: padding,
        fontSize: '24px',
        fontWeight: 'bold'
    }
}));

const CardPaper = ({ title, children }) => {
    const classes = useStyles();
    return (
        <Paper variant="outlined">
            {/* <h2 className={classes.title}>{title}</h2> */}
            <Typography variant="h2" classes={{ root: classes.title }}>
                {title}
            </Typography>
            <Divider />
            <div className={classes.container}>
                {children}
            </div>
        </Paper>
    );
}

export default CardPaper;