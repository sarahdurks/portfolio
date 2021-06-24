import React from 'react';
import PortfolioCard from './PortfolioCard';
import Typography from '@material-ui/core/Typography';
import Work from '../../utils/work';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    root: {
    backgroundColor: `purple`,
    height: `100%`,
    width: `100vw`
},
    view: {
        height: `100vh`,
        marginTop: `5vh`,
        display: `flex`,
        wrap: `wrap`

    },
    heading: {
        font:'Poppins',
        fontSize: '1rem',
        color: `black`,
        marginTop: `10vh`
    },
    card:
    {
        margin: `15px`
}
}));


const Portfolio = () => {
    const classes = useStyles();
    const allProjects = Work.project

    return (
        <div className={classes.root}>
            <Typography className={classes.heading} component="h1">Portfolio</Typography>
<Grid className={classes.view}>
            {allProjects.map(project => {
                    return (
                            <PortfolioCard className={classes.card}
                                image={project.image}
                                title={project.title}
                                description={project.detail}
                                lang={project.lang}
                                live={project.live}
                                github={project.github}
                            />
                        
                    )
                })}
</Grid>
        </div>

)
};

export default Portfolio
