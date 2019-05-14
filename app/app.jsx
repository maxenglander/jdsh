const React = require('react');
const { render } = require('react-dom');
const { default: thunk } = require('redux-thunk');

// router
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;

// redux
const { createStore, applyMiddleware} = require('redux');
const { Provider: ReactProvider } = require('react-redux');
const reducers = require('./reducers');

// Import fela
const { createRenderer } = require('fela');
const { RendererProvider } = require('react-fela');
const fallbackValue = require('fela-plugin-fallback-value');
const prefixer = require('fela-plugin-prefixer');

// xterm
require('/app/node_modules/xterm/dist/xterm');
require('/app/node_modules/xterm/dist/xterm.css');

/* Import Components */
const RootPage = require('./pages/RootPage');

const renderer = createRenderer({
  plugins: [ 
    prefixer['default'](),
    fallbackValue['default']()
  ]
});
const store = createStore(reducers, applyMiddleware(thunk));

render((
  <ReactProvider store={store}>
    <BrowserRouter>
      <RendererProvider renderer={renderer}>
        <Route exact path="/" component={RootPage} />
      </RendererProvider>
    </BrowserRouter>
  </ReactProvider>), document.getElementById('main'));