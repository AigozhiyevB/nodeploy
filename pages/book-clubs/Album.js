import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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
import team from '../../src/team.json'


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
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

export default function Album() {
    const classes = useStyles();
    const about = aboutStyle();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="sticky" style={{ background: '#dbedf3' }}>
                <Toolbar style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                    	<SparkTextTypography style={{color: '#283149'}} variant="h4" noWrap>
                        	<b>SparkRead</b>
                    	</SparkTextTypography>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                    	<Button className={classes.button} color="inherit" style={{color: '#283149'}} href="#About">
                            About Us
                    	</Button>
                    	
                    	<Button
                        	className={classes.button}
                        	endIcon={<SendIcon />}
                            href='https://t.me/sparkread'
                    	>
                        	Channel
                    	</Button>
        			</div>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            SparkRead
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Наша миссия заключается в объединении людей по всему миру посредством чтения и обсуждения книг.
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Присоединяйся к книжным клубам, находи единомышленников или развивай своё сообщество.
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {clubs.map((club) => (
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
                                        <Button variant="outlined" size="medium">
                                            <Link href={club.link}>
                                                View
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer} id="About">
                <Typography variant="h4" align="center" gutterBottom>
                    <b>About us</b>
                </Typography>
                <Container className={about.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}
                          justify="center"
                          alignItems="stretch">
                        {team.map((team) => (
                            <Grid item key={team} xs={12} sm={6} md={3}>
                                <Card className={about.card}>
                                    <CardMedia
                                        className={about.cardMedia}
                                        image={team.image}
                                        title={team.name}
                                    />
                                    <CardContent className={about.cardContent} style={{ textAlign: 'center' }}>
                                        <Typography gutterBottom variant="h5" component="h2" >
                                            <b>{team.name}</b>
                                        </Typography>
                                        <Typography>
                                            {team.position}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Typography>
                    О нас в СМИ:
                </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}
