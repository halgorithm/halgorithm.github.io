import React, { PureComponent } from 'react';
import TagFilter from './TagFilter';
import GamesList from './GamesList';
import games from './gamesData';

class FilteredGamesList extends PureComponent {
  state = { filterTagIds: [] };

  updateFilterTagIds = filterTagIds => this.setState({ filterTagIds });

  render() {
    const { filterTagIds } = this.state;
    const filteredGames = Object.values(games).filter(game =>
      filterTagIds.every(tagId => game.tagIds.includes(tagId))
    );

    return (
      <div>
        <TagFilter
          filterTagIds={filterTagIds}
          onChange={this.updateFilterTagIds}
        />
        <GamesList games={filteredGames} />
      </div>
    );
  }
}

export default FilteredGamesList;
