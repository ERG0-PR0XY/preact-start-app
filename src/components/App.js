import { h, Component } from 'preact';
import CompLabel from './comp-label/comp-label';
import CompButton from './comp-button/comp-button';
import CompListItem from './comp-listitem/comp-listitem';

export default class App extends Component {
    render() {
        var data = [
            {id:'1',name:'test-01',value:'testing field 1'},
            {id:'2',name:'test-02',value:'testing field 2'}
        ];
        return (
            <div>
                <h1>
                    Real world
                </h1>
                <CompLabel text='Hello Again'/>
                <CompButton label='Click me'/>
                <CompListItem data={data}/>
            </div>
        )
    }
}