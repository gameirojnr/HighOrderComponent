import React from 'react';
import API from '../API';
import { debounce, throttle} from 'lodash'

const myfirstHighOrderComponent = function MyHighOrderComponent (Component) {
    return class extends React.Component {

        sendTracker = (id, content) => {
            API.sendTracker(id, content).then(
                (response) => {
                    console.log(response)
                },
                (error) => {
                    console.error(error);
                }
            );
        }

        handleTracker = (id, content) =>  {
           this.sendTracker(id, content);
        }
        
        handleTrackterWithThrottle = debounce((id, content) => {
            this.sendTracker(id, content);
        }, 400)

        render() {
            return <Component handleTracker={this.handleTrackterWithThrottle}/>
        }
    }
}

export default myfirstHighOrderComponent;