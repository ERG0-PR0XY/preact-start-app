import { h, Component} from 'preact';
import './comp-label.less';

export default class CompLabel extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         text : ''
    //     };
    // }

    render(props, state) {
        return(
            <label>{this.props.text}</label>
        );
    }
}