import { Grid } from '@material-ui/core';
import notFoundImg from '../assets/images/404-error-notfound.svg';

const PageNotFound = () => {
    return (
        <Grid container justify="center">
            <Grid item xs={12} lg={6}>
                <img src={notFoundImg} alt="404 Page Not Found" />
            </Grid>
        </Grid>
    );
}

export default PageNotFound;