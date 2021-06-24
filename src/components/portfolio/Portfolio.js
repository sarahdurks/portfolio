import React from 'react';
import PortfolioCard from './PortfolioCard';
import Typography from '@material-ui/core/Typography';
import Work from '../../utils/work';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    root: {
    backgroundColor: `purple`,
    backgroundAttachment: `fixed`,
    height: `100%`,
    width: `100vw`
},
    view: {
        height: `80vh`,
        

    },
    heading: {
        font:'Poppins',
        fontSize: '1rem',
        color: `black`
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
                            <PortfolioCard
                                image={Work.project.image}
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
