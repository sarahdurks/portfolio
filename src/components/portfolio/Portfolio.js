import React from 'react';
import PortfolioCard from './PortfolioCard';
import Typography from '@material-ui/core/Typography';
import Work from '../../utils/work';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HorizontalScroller from 'react-horizontal-scroll-container';
const useStyles = makeStyles(() => ({
    root: {
      
        fontFamily: `Poppins`,

        width: `100vw`,
},
    view: {
       
        overflowx: `hidden`,
        height: `100%`,
        marginTop: `10vh`,
        marginBottom: `15vh`,
        display: `flex`,
        '@media (max-width:600px)': {
            width: `300px`,
            flexdirection: `column`
        }



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
    
}
}));


const Portfolio = () => {
    const classes = useStyles();
    const allProjects = Work.project

    return (
        <div className={classes.root}>
            <Grid container className="fixedheader" justify="center">
            <Typography className={classes.heading} >PORTFOLIO</Typography></Grid>

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

        </div>

)
};

export default Portfolio
