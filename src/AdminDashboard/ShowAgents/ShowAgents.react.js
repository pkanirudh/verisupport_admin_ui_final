import React from 'react';
import { Card } from 'semantic-ui-react';
import AgentHolder from '../AgentHolder/AgentHolder.react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

//test data: const url = `http://localhost:420/agents`
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
    }//Getting all the agents from the database

    handleDelete = agentId => { //Confirmation dialog while deleting an agent
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

      doDelete = userName =>{//Code to delete an agent which will be passed to agent holder component

        axios.delete(`http://localhost:2020/agent-management-service/removeAgent/${userName}`).then(res=> {
            if(res.status===200)//If the delete was successful
            {
                const newAgents = this.state.agents.filter(deletingAgent => deletingAgent.userName !== userName)
                this.setState({agents: newAgents})
                confirmAlert({
                    title: "Success",
                    message: "Agent deleted successfully",
                    buttons: [
                        {
                            label: "Okay",
                        }
                    ]
                })
            }
            else{
                confirmAlert({//If delete wasn't successful
                    title: "Failed",
                    message: "Error occured while deleting the agent",
                    buttons: [
                        {
                            label: "Okay",
                        }
                    ]
                })
            }
            
        }
        );
        
      }
      

    render() {
        if(!this.state.loaded){
            console.log(this.state.agents);
            console.log(this.state.loaded)
          return(<div></div>);
            
        }
        else{
            return (
                <div >
                    <Card.Group >
                        {this.state.agents.map((eachAgent, index) => {//Mapping the state and getting all agents from the database
                            return(<AgentHolder key={index} agent={eachAgent} onDelete={this.handleDelete}/>)
                        })}
                        
                    </Card.Group>
                </div>
            );
        }
    }
}

export default ShowAgents;