import { h, Component } from 'preact';

export default class CompListItem extends Component {
    
    constructor() {
        super();
        //  Set the initial data
        this.state.data = [];
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.setState({ 
            data : this.props.data 
        });
        // console.log(this.state.data);
    }

    componentWillUnmount() {

    }

    render() {
        var data = this.state.data;
        return (
            <div>
                <ol>
                   { data.map(function(item, index) {
                    //    console.log(index);
                        return <li id={item.id}>{item.name}</li>
                    })}
                </ol>
            </div>
        );
    }
}
