import React from 'react';
import PortfolioCard from './PortfolioCard';
import Typography from '@material-ui/core/Typography';
import Work from '../../utils/work';
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
    const allProjects = Work.project

    return (
        <div className={classes.root}>

<Typography className={classes.heading} component="h1">Portfolio</Typography>

            {allProjects.map(project => {
                    return (
                            <PortfolioCard
                                image={project.image}
                                title={project.title}
                                description={project.detail}
                                lang={project.lang}
                                live={project.live}
                                github={project.github}
                            />
                        
                    )
                })}

        </div>

)
}

export default Portfolio
