import { extendObservable, computed } from 'mobx';
import { games, tags } from './data';

class AppStore {
  constructor(tags) {
    console.log(tags);
    extendObservable(this, {
      filterTags: tags || [],

      get displayedGames() {
        return Object.values(games).filter(game =>
          this.filterTags.every(tag => game.tags.includes(tag))
        );
      },

      toggleFilterTag: tag => {
        const tagIndex = this.filterTags.indexOf(tag);
        tagIndex === -1
          ? this.filterTags.push(tag)
          : this.filterTags.splice(tagIndex, 1);
      }
    });
  }
}

export default AppStore;
