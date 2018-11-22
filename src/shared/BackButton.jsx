import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    spacing: {
        marginTop: theme.spacing.unit * 3,
    }
});

class BackButton extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        router: PropTypes.object
    };

    static contextTypes = {
      router: () => true, // replace with PropTypes.object if you use them
    }
  
    render() {
        return (
            <Button variant="outlined" size="small" color="primary" onClick={this.context.router.history.goBack} className={this.props.classes.spacing}>
                <ArrowBack />
                Back
            </Button>
        )
    }
}

BackButton.contextTypes = {
    router: PropTypes.object,
}

export default withStyles(styles)(BackButton);
