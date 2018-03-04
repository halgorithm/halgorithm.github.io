import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import AppHeader from './AppHeader';
import GamesList from './GamesList';
import SelectedGameDetailDialog from './SelectedGameDetailDialog';
import games from './gamesData';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <AppHeader />
            <GamesList games={games} />
            <Route
              exact
              path="/games/:gameId"
              component={SelectedGameDetailDialog}
            />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
