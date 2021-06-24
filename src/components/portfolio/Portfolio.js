import React from 'react';
import PortfolioCard from './PortfolioCard';
import Typography from '@material-ui/core/Typography';
import Work from '../../utils/work';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HorizontalScroller from 'react-horizontal-scroll-container';
const useStyles = makeStyles(() => ({
    root: {
        background: `fixed`
},
    view: {
       

        height: `100vh`,
        width: `100vw`,
        background: `fixed`,
        overflowx: `hidden`,
        marginTop: `5vh`,
        display: `flex`,
        '@media (max-width:600px)': {
            width: `100vw`,
            position: `fixed`}



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
        margin: `10px`,
        padding: `10px`,
        width: `50px`,
        height: `100px`
}
}));


const Portfolio = () => {
    const classes = useStyles();
    const allProjects = Work.project

    return (
        <div className={classes.root}>
            <Grid container justify="center">
            <Typography className={classes.heading} >PORTFOLIO</Typography></Grid>
<Grid className={classes.view}>
            {allProjects.map(project => {
                    return (
                        <Grid>
                             <HorizontalScroller>
                            <PortfolioCard className={classes.card}
                             key={project.id}
                                image={project.image}
                                title={project.title}
                                lang={project.lang}
                                body={project.detail}
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
