import React from 'react';
import PortfolioCard from './PortfolioCard';
import Typography from '@material-ui/core/Typography';
import Work from '../../utils/work';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HorizontalScroller from 'react-horizontal-scroll-container';
const useStyles = makeStyles(() => ({
    root: {
    background: `fixed`,
    height: `100%`,
    width: `100vw`
},
    view: {
        height: `80vh`,
        width: `80vw`,
        marginTop: `5vh`,
        display: `flex`,
        flexwrap: `wrap`,
        flexDirection: `row`

    },
    heading: {
        fontFamily:'Poppins',
        fontSize: '3rem',
        color: `black`,
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
                             <HorizontalScroller>
                            <PortfolioCard className={classes.card}
                             key={project.id}
                                image={project.image}
                                title={project.title}
                                description={project.detail}
                                lang={project.lang}
                                live={project.live}
                                github={project.github}
                            />
                            </HorizontalScroller>
                        </Grid>
                    )
                })}
</Grid>
        </div>

)
};

export default Portfolio
