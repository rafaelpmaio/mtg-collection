import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <AppBar position="static" color="inherit">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="home"
                    component={Link}
                    to="/"
                >
                    <HomeIcon />
                </IconButton>
                <Typography variant="h6" component={Link} to="/" color="inherit" sx={{ flexGrow: 1 }}>MTG APP</Typography>
                <IconButton
                    color="inherit"
                    aria-label="github-logo"
                    component={Link}
                    to="https://github.com/rafaelpmaio"
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    color="inherit"
                    aria-label="linkedin-logo"
                    component={Link}
                    to="https://www.linkedin.com/in/rafael-de-paiva-maio/"
                >
                    <LinkedInIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}