import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Provider } from 'mobx-react';
import { Reboot } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import AppStore from './AppStore';
import './App.css';
import theme from './theme';
import AppHeader from './AppHeader';
import FilteredGamesList from './FilteredGamesList';
import SelectedGameDetailDialog from './SelectedGameDetailDialog';
import PlayGamePage from './PlayGamePage';
import NotFound from './NotFound';

const params = new URLSearchParams(document.location.search.substring(1));
const store = new AppStore(params.get('tags').split(','));

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Reboot />
          <Router>
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
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
