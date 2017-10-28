import { h, Component } from 'preact';
import CompLabel from './comp-label/comp-label';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>
                    Real world
                </h1>
                <CompLabel text='Hello Again'/>
            </div>
        )
    }
}