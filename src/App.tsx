import {SynchronizedHistory} from 'mobx-react-router';
import {fontFace, normalize} from 'polished';
import * as React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {Auth} from './components/Auth';
import {KycAndFundsCheck} from './components/KycAndFundsCheck';
import {injectGlobal} from './components/styled';
import {Terminal} from './components/Terminal';
import paths from './constants/paths';
import './index.css';

const addFont = (name: string) => (f: any) =>
  fontFace({
    fileFormats: f.formats || ['woff', 'eot', 'ttf'],
    fontFamily: name,
    fontFilePath: `${process.env.PUBLIC_URL}/fonts/${f.name}`,
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: f.weight,
    localFonts: [''],
    unicodeRange: ''
  });

const addBaseFont: any = addFont('Proxima Nova');
const addAkrobatFont: any = addFont('Akrobat');

const proximaFonts = [
  {weight: 200, name: 'ProximaNovaThin'},
  {weight: 300, name: 'ProximaNova-Light'},
  {weight: 400, name: 'ProximaNovaRegular'},
  {weight: 600, name: 'ProximaNova-Semibold'},
  {weight: 700, name: 'ProximaNovaBold'}
];
const akrobatFonts = [
  {weight: 100, name: 'Akrobat-Thin', formats: ['otf']},
  {weight: 200, name: 'Akrobat-ExtraLight', formats: ['otf']},
  {weight: 300, name: 'Akrobat-Light', formats: ['otf']},
  {weight: 400, name: 'Akrobat-Regular', formats: ['otf']},
  {weight: 600, name: 'Akrobat-SemiBold', formats: ['otf']},
  {weight: 700, name: 'Akrobat-Bold', formats: ['otf']},
  {weight: 800, name: 'Akrobat-ExtraBold', formats: ['otf']},
  {weight: 1000, name: 'Akrobat-Black', formats: ['otf']}
];

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  ${proximaFonts.map(addBaseFont)};
  ${akrobatFonts.map(addAkrobatFont)};
  ${normalize() as any};
  * {
    border-collapse: collapse;
  }
  body, :root {
    height: auto;
    min-height: 100%;
    font: normal 14px "Proxima Nova", sans-serif;
    color: #f5f6f7;
    line-height: normal;
    padding: 0;
    margin: 0;

    /* Adjust font size */
    -webkit-text-size-adjust: 100%;
    /* Font varient */
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    /* Smoothing */
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  li {
    list-style: none;
  }
  input:focus {
    outline: none;
  }
  button {
    font-family: 'Proxima Nova',sans-serif;
  }
  label {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
`;

interface AppProps {
  routerHistory: SynchronizedHistory;
}

class App extends React.Component<AppProps> {
  render() {
    return (
      <Router history={this.props.routerHistory}>
        <Switch>
          <Route exact={true} path={paths.auth} component={Auth} />
          <Route
            exact={true}
            path={paths.kycAndFundsCheck}
            component={KycAndFundsCheck}
          />
          <Route exact={true} path={paths.main} component={Terminal} />
          <Route exact={true} path={paths.trade} component={Terminal} />
        </Switch>
      </Router>
    );
  }
}

export default App;
