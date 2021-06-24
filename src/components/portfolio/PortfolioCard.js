

import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

import { GitHub, Language } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
    fontFamily: ``
  },
  media: {
    borderRadius: 6,
    height: '375'
  },
  icons: {
    size: 1

  },
  image:
  {
    height: `20px`
  }
}));
//
const PortfolioCard =({ image, title, details, lang, live, github }) => {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={image}
        
      />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={lang}
          heading={title}
          body={details}
        />

      </CardContent>
      <Grid>
      <Button 
              href={github}
              target="_blank"
              className={styles.icons}>
            
              <GitHub />
         
          </Button>
          <Button 
              href={live}
              target="_blank"
              className={styles.icons}>
              <Language className={styles.icons} />
            
          </Button>
          </Grid>
    </Card>
  );
};
export default PortfolioCard

