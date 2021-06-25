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
        fontFamily: `Poppins`
},
    view: {
       

        height: `100vh`,
        width: `100vw`,
        background: `fixed`,
        overflowx: `hidden`,
        marginTop: `10vh`,
        marginBottom: `5vh`,
        display: `flex`,
        '@media (max-width:600px)': {
            width: `100vw`,
            position: `fixed`}



    },
    heading:{ marginTop: `15vh`,
        fontFamily: `Poppins`,
        color: `#5bb381`,
        fontSize: `2rem`,
        weight: 900,
        justifyContent: `center`
    },



    fixedheader: {
        width: `100vw`,
        position: `fixed`,
        zindex: `1`
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
            <Grid container className="fixedheader" justify="center">
            <Typography className={classes.heading} >PORTFOLIO</Typography></Grid>
<Grid className={classes.view}>
            {allProjects.map(project => {
                    return (
                        <Grid>
                             <HorizontalScroller>
                            <PortfolioCard justify="center" className={classes.card}
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
