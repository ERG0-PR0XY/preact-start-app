import { h, Component} from 'preact';
import '../../component-css/comp-label/comp-label.css';

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
        )
    }
}