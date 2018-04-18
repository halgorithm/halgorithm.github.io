import React, { PureComponent } from 'react';
import { compareAsc } from 'date-fns';
import { observer, inject } from 'mobx-react';
import TagsFilter from './TagsFilter';
import NoGamesFound from './NoGamesFound';
import GamesList from './GamesList';

const FilteredGamesList = ({ store }) => {
  const content =
    store.displayedGames.length > 0 ? (
      <GamesList games={store.displayedGames} />
    ) : (
      <NoGamesFound />
    );

  return (
    <div>
      <TagsFilter />
      {content}
    </div>
  );
};

export default inject('store')(observer(FilteredGamesList));
