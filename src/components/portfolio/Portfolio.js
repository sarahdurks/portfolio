import React from 'react';
import PortfolioCard from './PortfolioCard';
import Typography from '@material-ui/core/Typography';
import Portfolio from '../../utils/portfolio';
const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    heading: {
        color: '#'
    }
});


const Portfolio = () => {
    const classes = useStyles();
    const allProjects = Portfolio.project

    return (
        <div className={classes.root}>

<Typography className={classes.heading} component="h1">Portfolio</Typography>

            {allProjects.map(project => {
                    return (
                            <PortfolioCard
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                builtwith={project.builtwith}
                                deployed={project.deployed}
                                github={project.github}
                            />
                        
                    )
                })}

        </div>

)
}

export default Portfolio
