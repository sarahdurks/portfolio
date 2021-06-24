

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
import Portfolio from '../../utils/work';
import { GitHub, Language } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
  icons: {
    size: 1

  }
}));
//
const PortfolioCard = React.memo(function MusicCard() {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={
          Portfolio.image}
        
      />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={Portfolio.builtwith}
          heading={Portfolio.title}
          body={Portfolio.description}
        />

      </CardContent>
      <Grid>
      <Button 
              href={Portfolio.github}
              target="_blank"
              className={styles.icons}>
            
              <GitHub />
         
          </Button>
          <Button 
              href={Portfolio.deployed}
              target="_blank"
              className={styles.icons}>
              <Language className={styles.icons} />
            
          </Button>
          </Grid>
    </Card>
  );
});
export default PortfolioCard

