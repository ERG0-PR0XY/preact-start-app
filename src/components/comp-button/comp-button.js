import {h,Component} from 'preact';

export default class CompButton extends Component {
    render(props, state) {
        return (
            <button onClick={ e => alert('hi!') }>
                {this.props.label}
            </button>
        );
    }
};