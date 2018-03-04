import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import './App.css';
import AppHeader from './AppHeader';
import FilteredGamesList from './FilteredGamesList';
import SelectedGameDetailDialog from './SelectedGameDetailDialog';
import PlayGamePage from './PlayGamePage';

const muiTheme = { ...darkBaseTheme };
muiTheme.palette.canvasColor = '#333355';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
          <div className="App">
            <AppHeader />
            <main>
              <Route
                exact
                path="/games/:gameId?"
                component={FilteredGamesList}
              />
              <Route
                exact
                path="/games/:gameId"
                component={SelectedGameDetailDialog}
              />
              <Route
                exact
                path="/games/:gameId/play"
                component={PlayGamePage}
              />
            </main>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
