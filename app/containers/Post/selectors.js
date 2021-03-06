import { createSelector } from 'reselect';

/**
 * Direct selector to the post state domain
 */
const selectPostDomain = () => state => state.get('post');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Post
 */

const selectPost = () => createSelector(
  selectPostDomain(),
  (substate) => substate.toJS()
);

export default selectPost;
export {
  selectPostDomain,
};
