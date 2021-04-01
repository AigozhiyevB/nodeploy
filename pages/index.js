import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Image from "next/image";
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
import clubs from '../src/clubs.json'
import team from '../src/team.json'
import Head from "next/head";

function IndexPage() {
  return (
      <div>
        <Head>
          <title>SparkRead</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="static/favicon.ico" />
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
  
  let isMobile = true;

  return (
      <React.Fragment>
        <IndexPage />
        <CssBaseline />
        <AppBar position="sticky" style={{ background: '#1D4569' }}>
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <Link href='/' style={{ textDecoration: 'none' }}>
                        	<SparkTextTypography style={{ color: '#ffffff' }} variant={isMobile ? 'h5' : 'h4'} noWrap>
                            	<b>SparkRead</b>
                        	</SparkTextTypography>
                    	</Link>
                    </div>
                    <div style={{
                    	alignItems: 'center',
                    	display: '-webkit-box',
                    	WebkitBoxOrient: 'horizontal'
                    }}>
                    	<Grid container
                    		spacing={1}
                    		justify='center'
                    		alignItems='center'
                    		direction='row'
                    		style={{ display: '-webkit-box', WebkitBoxOrient: 'horizontal' }}
                    	>
  							<Grid item>
  								<Link href='#About' style={{ textDecoration: 'none' }}>
    								<Button
    									size={isMobile ? 'small' : 'medium'}
                    					className={classes.button}
                    					color='inherit'
                    					style={{ color: '#ffffff' }}
                    					variant='outlined'
                    				>
                    					About Us
                    				</Button>
                    			</Link>
  							</Grid>
  							<Grid item>
  								<Link href='https://t.me/sparkread' style={{ textDecoration: 'none' }}>
    								<Button
    									size={isMobile ? 'small' : 'medium'}
                        				className={classes.button}
                        				color='inherit'
                    					style={{ color: '#ffffff' }}
                        				endIcon={<SendIcon />}
                        				variant='outlined'
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
                <div className={classes.heroContent} style={{ background: '#1D4569' }}>
                	<Grid container
                		justify='space-between'
                		alignItems='center'
                		direction={'column'}
                	>
                		<Grid item>
                    		<Grid container
                    			spacing={isMobile ? 0 : 0}
                    			align='center'
                    			justify='space-between'
                    			direction={isMobile ? 'column' : 'row'}
                    			style={{
                    				display: 'flex',
                    				WebkitDisplay: '-webkit-box',
                    				WebkitBoxOrient: (isMobile ? 'vertical' : 'horizontal') }}
                    		>
                        		<Grid item
                        			xs={isMobile ? 10 : 5}
                        			style={{
                        				textAlign: (isMobile ? 'center' : 'left'),
                        				WebkitTextAlign: (isMobile ? '-webkit-center' : '-webkit-left')
                        			}}
                        		>
                            		<Typography
                            			component="h1"
                                		variant="h2"
                                		style={{ color: '#ffffff' }}
                                		gutterBottom
                            		>
                                		{'SparkRead'}
                            		</Typography>
                            		<Typography variant='h6' style={{ color: '#ffffff' }} paragraph>
                                		SparkRead - агрегатор книжных клубов как в онлайн-, так и в оффлайн-формате, созданный студентами МФТИ.
                            		</Typography>
                            		<Typography variant='h6' style={{ color: '#ffffff' }} paragraph>
                                		Наша миссия заключается в объединении людей по всему миру посредством чтения и обсуждения книг.
									</Typography>
                        		</Grid>
                        		<Grid item xs={isMobile ? 12 : 3}>
                        			<Link href='https://t.me/sparkread' style={{ textDecoration: 'none' }}>
    									<Button
                            				size='large'
                            				variant="contained"
                                			style={{ backgroung: '#dbedf3' }}
                                			className={classes.button}
                                			endIcon={<SendIcon/>}
                            			>
                                			Channel
						    			</Button>
                    				</Link>
                        		</Grid>
                       		</Grid>
                       	</Grid>
                        <br/><br/>
                       	<Grid item>
                        	<Grid container justify='center' alignItems='flex-end'>
                        		<Grid item>
                        			<img src={'https://psv4.userapi.com/c534536/u322472089/docs/d28/ab2787a994b7/book.png?extra=vBJq1j0lTxnC3G_VDMFcnCQjIDjEwDJudvHjREpEe7Dmd67DpuM9UnxGjnWh9_H21oooYii2y6gt5hKqygZDxKrEhazHhrY5YpR30aQXXrNCFbQVKBo5dktDhFQCNJJQ2jgyLrlMRyrhR9pMavf1Tz4'} alt="book" style={{ width: '100%', height: 'auto' }} />
                    			</Grid>
                    		</Grid>
                    	</Grid>
                    </Grid>
                </div>
                <br/><br/>
          <Container className={classes.cardGrid} maxWidth="md" alignItems='center'>
            {/* End hero unit */}
            <Box p={3}>
              <Typography align='center' variant='h3' style={{color: "#283149"}}>
                Встречи клубов в этом месяце
              </Typography>
            </Box>
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
            <Box p={8}>
              <Grid container alignItems='center' justify='center'>
                <Link href='/book-clubs/clubs' style={{ textDecoration: 'none' }}>
                  <Button
                      size='large'
                      variant="contained"
                      style={{background: '#1D4569', color: '#ffffff'}}
                      className={classes.button}
                  >
                    Все клубы
                  </Button>
                </Link>
              </Grid>
            </Box>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer} id="About">
          <Container className={about.cardGrid} maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
              <b>Наша команда</b>
            </Typography>
            <Typography variant="h5" align="center" gutterBottom >
              Проект разрабатывается студентами 3 курса ФИВТ МФТИ.
              На данный момент сотрудничаем с 30+ клубами по всему миру.
              Хотите опубликовать мероприятие Вашего клуба?
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdBn630iN83wv9MAvY5qNhv9xojrmeTVnxf5y0JWckuBq5xrA/viewform">
                Заполняйте форму.
              </Link>
            </Typography>
          </Container>
          <Container className={about.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid justify='space-between'>
              <Grid item>
                <Grid container spacing={4}
                      justify="center"
                      alignItems="stretch">
                  {team.map((team) => (
                      <Grid item key={team} xs={6} sm={6} md={3}>
                        <Card className={about.card}>
                          <CardMedia
                              className={about.cardMedia}
                              image={team.image}
                              title={team.name}
                          />
                          <CardContent className={about.cardContent} style={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="h2" >
                              <b>{team.lastname}</b>
                            </Typography>
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
              </Grid>
              <Grid item>
                <Grid container alignItems='center' justify='space-around'>
                  <Grid item>
                    <Box p={5}>
                      <Link href="https://knife.media/book-club-tg/" style={{ textDecoration: 'none' }}>
                        <Button
                            size='large'
                            variant="contained"
                            style={{background: '#1D4569', color: '#ffffff'}}
                            className={classes.button}
                        >
                          Статья о нас
                        </Button>
                      </Link>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box p={5}>
                      <Link href="https://t.me/BogdanSemenov" style={{ textDecoration: 'none' }}>
                        <Button
                            size='large'
                            variant="contained"
                            style={{background: '#1D4569', color: '#ffffff'}}
                            className={classes.button}
                        >
                          Свяжитесь с нами
                        </Button>
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          </Container>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
  );
}
