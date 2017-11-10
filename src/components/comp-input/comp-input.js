import {h,Component} from 'preact';
import {bind} from 'decko';
import './comp-input.less';

export default class CompInput extends Component {
    constructor() {
        super();
        this.state = {
            value : '',
            data:[
                'test-01',
                'test-02',
                'test-03',
                'test-04',
                'test-05',
                'test-01',
                'test-02',
                'test-03',
                'test-04',
                'test-05'
            ],
            dataMatch:[]
        };
        this.onInputHandler = this.onInputHandler.bind(this);
    }

    onInputHandler(e) {
        var text = e.target.value;
        this.setState({
            value : text
        });
    }

    getMatchingData(data,text) {
        var dataMatch = [];
        for(var i = 0 ; i < data.length ; i++){
            if(data[i].includes(text)) {
                dataMatch.push(data[i]);
            }
        }
        return dataMatch;
    }

    render(props, state) {
        let text = this.state.value;
        let data = this.state.data;
        let matchData = this.getMatchingData(data,text);
        let isMatching = false;
        if(matchData && matchData.length > 0) {
            isMatching = true;
        }
        return (
            <div>
                <div class='mui-textfield'>
                    <input 
                        type={props.type} 
                        value={state.value}  
                        placeholder={props.label}
                        onInput={this.onInputHandler}/>
                </div>
                <div>
                    { 
                        (isMatching === true) ? (
                            matchData.map(function(item,index) {
                                    return (
                                        <li id={index}>{item}</li>
                                    )
                            })
                        ) : null
                    }
                </div>
            </div>
        );
    }
};
