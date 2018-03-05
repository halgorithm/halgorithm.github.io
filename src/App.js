import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import './App.css';
import AppHeader from './AppHeader';
import FilteredGamesList from './FilteredGamesList';
import SelectedGameDetailDialog from './SelectedGameDetailDialog';
import PlayGamePage from './PlayGamePage';
import NotFound from './NotFound';

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
                path="/games/:gameId?"
                exact
                component={FilteredGamesList}
              />
              <Switch>
                <Route path="/" exact>
                  <Redirect to="/games" />
                </Route>
                <Route
                  path="/games/:gameId"
                  exact
                  component={SelectedGameDetailDialog}
                />
                <Route
                  path="/games/:gameId/play"
                  exact
                  component={PlayGamePage}
                />
                <Route path="/games/:gameId?" exact />
                <Route component={NotFound} />
              </Switch>
            </main>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
