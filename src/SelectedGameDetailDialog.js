import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Dialog } from 'material-ui';
import { Slide } from 'material-ui/transitions';
import GameDetail from './GameDetail';
import { games } from './data';

const SlideUp = props => <Slide direction="up" {...props} />;

class SelectedGameDetailDialog extends Component {
  state = { closing: false, closed: false };

  close = () => {
    this.setState({ closing: true });
    window.setTimeout(() => this.setState({ closed: true }), 300);
  };

  render() {
    const { gameId } = this.props.match.params;
    const game = games[gameId];
    const { closing, closed } = this.state;

    // autoScrollBodyContent={true}
    return closed || !game ? (
      <Redirect to="/games" />
    ) : (
      <Dialog
        maxWidth="md"
        open={!closing}
        transition={SlideUp}
        onClose={this.close}
      >
        <GameDetail game={game} />
      </Dialog>
    );
  }
}

export default SelectedGameDetailDialog;
