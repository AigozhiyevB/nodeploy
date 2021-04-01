import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
    fontSize: '2rem',
    color: '#fff',
    textTransform: 'uppercase',
  },
  subtitle: {
    color: '#fff',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
  },
}));

const cardStyles = makeStyles((theme) => ({
    root: {
        background: '#dbedf3',
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: '#dbedf3',
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        backgroundColor: '#dbedf3',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        alignItems: 'center',
    },
    card: {
        height: '100%',
        display: 'flex',
        backgroundColor: '#dbedf3',
        color: '#283149',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: '#dbedf3',
        padding: theme.spacing(6),
    },
}));

const CustomCard = ({ classes, image, title, subtitle }) => {

  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={classes.mediaStyles} image={image} />
        <CardContent className={classes.cardContent}>
          <Typography variant={'h2'}>
            {title}
          </Typography>
          <Typography>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default function Carousel(clubs) {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: '#203f52' });

  return (
    <>
      <Grid classes={gridStyles} container spacing={4} wrap={'nowrap'}>
        {clubs.map((club) => (
            <Grid item>
              <CustomCard
                classes={styles}
                title={club.name}
                subtitle={'Be a Legend!'}
                image={club.image}
              />
            </Grid>
        ))}
      </Grid>
    </>
  );
};

