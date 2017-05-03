import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// (Make material-ui happy)
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import SearchBox from './SearchBox'
import SearchBox1 from './SearchBox1'

import makeExpanding from './expanding-animation';
const ExpandingSearchBox = makeExpanding(SearchBox);

import makeMoveUp from './move-up-animation';
const MoveUpSearchBox = makeMoveUp(SearchBox);

import makeSpringUp from './spring-up-animation';
const SpringUpSearchBox = makeSpringUp(SearchBox);

import makeShake from './shake-animation';
const ShakeSearchBox = makeShake(SearchBox1);



class App extends Component {
    render() {
        //https://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/
        const style = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#cc5454'
        };

        return (
            <MuiThemeProvider>
                <div style={style}>
                    <h3> Example Expanding</h3>
                    <ExpandingSearchBox/>
                    <h3> Example Move Up</h3>
                    <MoveUpSearchBox/>
                    <h3> Example Spring Up</h3>
                    <SpringUpSearchBox/>
                    <h3> Example Shaking</h3>
                    <ShakeSearchBox/>
                </div>
            </MuiThemeProvider>
        );
    }
}
export default App;
