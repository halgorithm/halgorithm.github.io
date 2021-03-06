import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Dialog } from 'material-ui';
import GameDetail from './GameDetail';
import { games } from './data';

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

    return closed || !game ? (
      <Redirect to="/games" />
    ) : (
      <Dialog
        open={!closing}
        onRequestClose={this.close}
        autoScrollBodyContent={true}
        contentStyle={{ width: '90%' }}
      >
        <GameDetail game={game} />
      </Dialog>
    );
  }
}

export default SelectedGameDetailDialog;
