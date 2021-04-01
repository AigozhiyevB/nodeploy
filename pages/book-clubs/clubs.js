import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { withStyles } from "@material-ui/core/styles";
import { borders } from '@material-ui/system';
import SendIcon from '@material-ui/icons/Send';
import clubs from '../../src/clubs.json'
import clubs_online from '../../src/clubs-online-coming.json'
import clubs_offline from '../../src/clubs-offline-coming.json'
import clubs_free from '../../src/clubs-free-coming.json'
import clubs_paid from '../../src/clubs-paid-coming.json'
import team from '../../src/team.json'
import Head from "next/head";

function IndexPage() {
    return (
        <div>
            <Head>
                <title>SparkRead</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        </div>
    )
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Material UI
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
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
        color: "#283149",
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

const aboutStyle = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        alignItems: 'stretch',
    },
    card: {
        height: '100%',
        display: 'flex',
        backgroundColor: '#dbedf3',
        color: "#283149",
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '100%',
        borderRadius: '50%',
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const SparkTextTypography = withStyles({
    root: {
        color: "#283149"
    }
})(Typography);

export default function Clubs() {
    const classes = useStyles();
    const about = aboutStyle();

    return (
        <React.Fragment>
            <IndexPage />
            <CssBaseline />
            <AppBar position="sticky" style={{ background: '#1D4569' }}>
                <Toolbar style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                        <SparkTextTypography style={{color: '#ffffff'}} variant="h4" noWrap>
                            <Link href="/" style={{ textDecoration: 'none', color: '#ffffff' }}>
                                <b>SparkRead</b>
                            </Link>
                        </SparkTextTypography>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', WebkitBoxOrient: 'horizontal'}}>
                        <Grid container spacing={1} justify='center' direction='row' style={{display: '-webkit-box', WebkitBoxOrient: 'horizontal'}}>
                            <Grid item >
                                <Link href="#About" style={{ textDecoration: 'none' }}>
                                    <Button
                                        className={classes.button}
                                        color="inherit"
                                        style={{color: '#ffffff'}}
                                        variant="outlined"
                                    >
                                        About Us
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="https://t.me/sparkread" style={{ textDecoration: 'none' }}>
                                    <Button
                                        className={classes.button}
                                        color="inherit"
                                        style={{color: '#ffffff'}}
                                        endIcon={<SendIcon />}
                                        variant="outlined"
                                    >
                                        Channel
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Toolbar>
            </AppBar>
            <main style={{ background: '#dbedf3' }}>
                {/* Hero unit */}
                <Container className={classes.cardGrid} maxWidth="md" alignItems='center'>
                    {/* End hero unit */}
                    <Box p={3}>
                        <Typography align='center' variant='h3' style={{color: "#283149"}}>
                            Онлайн встречи клубов в этом месяце
                        </Typography>
                    </Box>
                    <Grid container spacing={4}>
                        {clubs_online.map((club) => (
                            <Grid item key={club} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={club.image}
                                        title={club.name}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h4" component="h2" style={{ textAlign: 'center' }}>
                                            {club.name}
                                        </Typography>
                                        <Typography>
                                            <b>{`Адрес: `}</b> {club.address}
                                        </Typography>
                                        <Typography>
                                            <b>{`Стоимость: `}</b> {club.price}
                                        </Typography>
                                        <Typography>
                                            <b>{`Дата встречи: `}</b> {club.meeting_date}
                                        </Typography>
                                        <Typography>
                                            <b>{`Текущая книга: `}</b> {club.book}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ alignItems: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                                        <Link href={club.link} style={{ textDecoration: 'none' }}>
                                            <Button variant="outlined"
                                                    style={{background: '#1D4569', color: '#ffffff'}}
                                                    size="medium">
                                                Подробнее
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Container className={classes.cardGrid} maxWidth="md" alignItems='center'>
                    {/* End hero unit */}
                    <Box p={3}>
                        <Typography align='center' variant='h3' style={{color: "#283149"}}>
                            Оффлайн встречи клубов в этом месяце
                        </Typography>
                    </Box>
                    <Grid container spacing={4}>
                        {clubs_offline.map((club) => (
                            <Grid item key={club} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={club.image}
                                        title={club.name}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h4" component="h2" style={{ textAlign: 'center' }}>
                                            {club.name}
                                        </Typography>
                                        <Typography>
                                            <b>{`Адрес: `}</b> {club.address}
                                        </Typography>
                                        <Typography>
                                            <b>{`Стоимость: `}</b> {club.price}
                                        </Typography>
                                        <Typography>
                                            <b>{`Дата встречи: `}</b> {club.meeting_date}
                                        </Typography>
                                        <Typography>
                                            <b>{`Текущая книга: `}</b> {club.book}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ alignItems: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                                        <Link href={club.link} style={{ textDecoration: 'none' }}>
                                            <Button variant="outlined"
                                                    style={{background: '#1D4569', color: '#ffffff'}}
                                                    size="medium">
                                                Подробнее
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Container className={classes.cardGrid} maxWidth="md" alignItems='center'>
                    {/* End hero unit */}
                    <Box p={3}>
                        <Typography align='center' variant='h3' style={{color: "#283149"}}>
                            Бесплатные встречи клубов в этом месяце
                        </Typography>
                    </Box>
                    <Grid container spacing={4}>
                        {clubs_free.map((club) => (
                            <Grid item key={club} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={club.image}
                                        title={club.name}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h4" component="h2" style={{ textAlign: 'center' }}>
                                            {club.name}
                                        </Typography>
                                        <Typography>
                                            <b>{`Адрес: `}</b> {club.address}
                                        </Typography>
                                        <Typography>
                                            <b>{`Стоимость: `}</b> {club.price}
                                        </Typography>
                                        <Typography>
                                            <b>{`Дата встречи: `}</b> {club.meeting_date}
                                        </Typography>
                                        <Typography>
                                            <b>{`Текущая книга: `}</b> {club.book}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ alignItems: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                                        <Link href={club.link} style={{ textDecoration: 'none' }}>
                                            <Button variant="outlined"
                                                    style={{background: '#1D4569', color: '#ffffff'}}
                                                    size="medium">
                                                Подробнее
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Container className={classes.cardGrid} maxWidth="md" alignItems='center'>
                    {/* End hero unit */}
                    <Box p={3}>
                        <Typography align='center' variant='h3' style={{color: "#283149"}}>
                            Платные встречи клубов в этом месяце
                        </Typography>
                    </Box>
                    <Grid container spacing={4}>
                        {clubs_paid.map((club) => (
                            <Grid item key={club} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={club.image}
                                        title={club.name}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h4" component="h2" style={{ textAlign: 'center' }}>
                                            {club.name}
                                        </Typography>
                                        <Typography>
                                            <b>{`Адрес: `}</b> {club.address}
                                        </Typography>
                                        <Typography>
                                            <b>{`Стоимость: `}</b> {club.price}
                                        </Typography>
                                        <Typography>
                                            <b>{`Дата встречи: `}</b> {club.meeting_date}
                                        </Typography>
                                        <Typography>
                                            <b>{`Текущая книга: `}</b> {club.book}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ alignItems: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                                        <Link href={club.link} style={{ textDecoration: 'none' }}>
                                            <Button variant="outlined"
                                                    style={{background: '#1D4569', color: '#ffffff'}}
                                                    size="medium">
                                                Подробнее
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer} id="About">
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}
