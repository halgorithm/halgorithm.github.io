import React, { PureComponent } from 'react';
import { compareAsc } from 'date-fns';
import TagsFilter from './TagsFilter';
import NoGamesFound from './NoGamesFound';
import GamesList from './GamesList';
import { games } from './data';

class FilteredGamesList extends PureComponent {
  state = { filterTagIds: [] };

  updateFilterTagIds = filterTagIds => this.setState({ filterTagIds });

  render() {
    const { filterTagIds } = this.state;
    const filteredGames = Object.values(games).filter(game =>
      filterTagIds.every(tagId => game.tagIds.includes(tagId))
    );
    const content =
      filteredGames.length > 0 ? (
        <GamesList games={filteredGames} />
      ) : (
        <NoGamesFound />
      );

    return (
      <div>
        <TagsFilter
          filterTagIds={filterTagIds}
          onChange={this.updateFilterTagIds}
        />
        {content}
      </div>
    );
  }
}

export default FilteredGamesList;
