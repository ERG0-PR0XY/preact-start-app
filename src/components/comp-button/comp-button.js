import {h, Component} from 'preact';

export default class CompButton extends Component {
    render(props, state) {
        return (
            <div>
                <button class="mui-btn mui-btn--primary mui-btn--raised" onClick={e => alert('hi!')}>
                    {this.props.label}
                </button>
            </div>
        );
    }
};