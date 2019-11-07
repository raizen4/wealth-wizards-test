/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

const App = ({ store }) =>
  <Provider store={store}>
    <p
      css={css`
        font-size: 50px;
      `}
    >
      Seems like I couldn't make the front-end app start with hot reload using the template provided 
      so I instead to be able to debug easier I have created a new front-end whilst the template provided is used as
      backend and I create a new docker-compose file to make things easier.
    </p>
  </Provider>;

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default App;
