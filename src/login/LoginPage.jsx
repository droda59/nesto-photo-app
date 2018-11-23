import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { loginOperations } from './duck';
import { ROUTE_HOME } from '../constants/routes';

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class LoginPage extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired,
        isLoggingIn: PropTypes.bool.isRequired,
        login: PropTypes.func.isRequired,
    };

    state = {
        username: '',
        password: '',
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.id) {
            localStorage.setItem('user', JSON.stringify(nextProps.user));
            this.props.history.push(ROUTE_HOME);
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleLogin = () => {
        this.props.login(this.state.username, this.state.password);
    };

    render() {
        return (
            <div className={this.props.classes.layout}>
                <Paper className={this.props.classes.paper}>
                    <Avatar className={this.props.classes.avatar}>
                        <LockIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={this.props.classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="text">User name</InputLabel>
                            <Input 
                                id="username" 
                                name="username" 
                                autoComplete="username" 
                                autoFocus 
                                value={this.state.username}
                                onChange={this.handleChange('username')} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={this.state.password}
                                onChange={this.handleChange('password')} />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={this.props.classes.submit}
                            disabled={this.props.isLoggingIn}
                            onClick={this.handleLogin}>
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loginReducer } = state;
    return {
        user: loginReducer.user,
        isLoggingIn: loginReducer.isLoggingIn,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login: loginOperations.login,
    }, dispatch);
}

export default withRouter(withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)));
