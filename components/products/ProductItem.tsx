import { CardActionArea } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NextLink from 'next/link';
import clsx from 'clsx';

import React from 'react';



const useStyles = makeStyles(theme => ({
  card: {
    width: 400,
    margin: 5,
    display: 'flex',
    flexDirection: 'column'
  },
  cardContent: {
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
    width: '375px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '& h1': {
      fontSize: '1.4rem',
      textTransform: 'uppercase'
    }
  },
  cardMedia: {
    height: 0,
    paddingTop: '65%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'pointer'
  },
  cardDescription: {
    width: 368,
    height: 190,
    overflow: 'auto',
    whiteSpace: 'normal'
  },
  cardActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));

const ProductItem = ({ link }: any) => {
  const classes = useStyles();
  
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.card}>
      {/* 
      Show this as an example of how we would use SSR
      <NextLink href={`/book?id=${book.id}`} as={`/book/${book.slug}`}> 
      */}
      <NextLink href='/products/[id]' as={`/products/${link.idProduct}`}>
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            image={link.imageUrl || '/static/images/cards/book.png'}
            title={link.storeName}
          />
          <CardContent className={classes.cardContent}>
            <Typography component="h1">{link.storeName}</Typography>
            <Typography component="p">
              Price:{link.priceMin} - {link.priceMax} {link.priceMinCurrency}              
            </Typography>
            <Typography component="p">
               Rating: {link.rating}              
            </Typography>
            <Typography component="p">
               Sales: {link.salesCount}            
            </Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions className={classes.cardActions}>
        Detail:
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>{' '}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.cardContent}>
          <Typography paragraph className={classes.cardDescription}>
            {link.title}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProductItem;
