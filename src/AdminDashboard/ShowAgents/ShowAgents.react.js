import React from 'react';
import { Item, Grid, Card } from 'semantic-ui-react';
import AgentHolder from '../AgentHolder/AgentHolder.react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

// const url = `http://localhost:420/agents`
const url = `http://localhost:2020/agent-management-service/getAllAgents`
class ShowAgents extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            agents:[],
            loaded: false
        }
    }

    
    componentDidMount() {
        axios.get(url)//url for getting agents
        .then(res => {
          this.setState({ agents:res.data, loaded:true, });
        });
        console.log(this.state.agents)
    }

    handleDelete = agentId => { //Code to delete an agent which will be passed to agent holder component

        confirmAlert({

            title: "Confirm to remove Agent",
            message: "Are you sure you want to delete this agent",
            buttons: [
                {
                    label: "Yes, Delete Agent",
                    onClick: () => this.doDelete(agentId)
                },
                {
                    label: "No, Go Back"
                }
            ]
        })

      };

      doDelete = agentId =>{
        const newAgents = this.state.agents.filter(deletingAgent => deletingAgent.agentId !== agentId)
        this.setState({agents: newAgents})
        console.log("handleDelete called")
      }
      

    render() {
        if(!this.state.loaded){
            console.log(this.state.agents);
            console.log(this.state.loaded)
          return(<div></div>);
            
        }
        else{
            console.log(this.state.agents)
            return (
                <div >
                    <Card.Group >
                        {this.state.agents.map((eachAgent, index) => {
                            return(<AgentHolder key={index} agent={eachAgent} onDelete={this.handleDelete}/>)
                        })}
                        
                    </Card.Group>
                </div>
            );
        }
    }
}

export default ShowAgents;