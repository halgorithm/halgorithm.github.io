import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import AppHeader from './AppHeader';
import FilteredGamesList from './FilteredGamesList';
import SelectedGameDetailDialog from './SelectedGameDetailDialog';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <AppHeader />
            <FilteredGamesList />
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
