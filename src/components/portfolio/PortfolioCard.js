

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
import Work from '../../utils/work';
import { GitHub, Language } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
    fontFamily: `Poppins`,
    color: `black`
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
          Work.image}
        
      />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={Work.lang}
          heading={Work.title}
          body={Work.detail}
        />

      </CardContent>
      <Grid>
      <Button 
              href={Work.github}
              target="_blank"
              className={styles.icons}>
            
              <GitHub />
         
          </Button>
          <Button 
              href={Work.live}
              target="_blank"
              className={styles.icons}>
              <Language className={styles.icons} />
          </Button>
          </Grid>
    </Card>
  );
});
export default PortfolioCard

