import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Box, Container, IconButton, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow:1
    },
    menuButton:{
        marginRight:theme.spacing(1)
    },
    title:{
        flexGrow:1
    }
}))

function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <AppBar position={"fixed"}>
                <Container fixed>
                    <Toolbar>
                        <IconButton className={classes.menuButton} edge={"start"} color={"inherit"} aria-label={"menu"}>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        <Typography className={classes.title} variant="h6">Web MUIR</Typography>
                        <Box mr={3}>
                            <Button color={"inherit"} variant={"outlined"}> Log In</Button>
                        </Box>
                        <Button color={"secondary"} variant={"contained"}> Sign Up</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default App;
