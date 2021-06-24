import React from 'react';
import PortfolioCard from './PortfolioCard';
import Typography from '@material-ui/core/Typography';
import Work from '../../utils/work';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    root: {
    backgroundColor: `purple`,
    background: `fixed`,
    height: `100%`,
    width: `100vw`
},
    view: {
        height: `100vh`,
        width: `60vw`,
        marginTop: `5vh`,
        display: `flex`,
        flexwrap: `wrap`,
        flexDirection: `row`

    },
    heading: {
        fontFamily:'Poppins',
        fontSize: '3rem',
        color: `white`,
        marginTop: `10vh`,
        justifyContent: `center`
    },
    card:
    {
        margin: `15px`,
        padding: `10px`,
        width: `50px`
}
}));


const Portfolio = () => {
    const classes = useStyles();
    const allProjects = Work.project

    return (
        <div className={classes.root}>
            <Grid container justify="center">
            <Typography className={classes.heading} >Portfolio</Typography></Grid>
<Grid className={classes.view}>
            {allProjects.map(project => {
                    return (
                        <Grid>
                            <PortfolioCard className={classes.card}
                                image={project.image}
                                title={project.title}
                                description={project.detail}
                                lang={project.lang}
                                live={project.live}
                                github={project.github}
                            />
                        </Grid>
                    )
                })}
</Grid>
        </div>

)
};

export default Portfolio
