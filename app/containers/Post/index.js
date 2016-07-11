/*
 *
 * Post
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectPost from './selectors';
import styles from './styles.css';

export class Post extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.post}>
      This is Post container !
      </div>
    );
  }
}

const mapStateToProps = selectPost();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
