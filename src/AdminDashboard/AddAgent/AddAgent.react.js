import React from 'react';
import { Form } from '../../../../verisupport_ui-master_lakshya/node_modules/semantic-ui-react';
import axios from 'axios';
import uuid from 'uuid';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

class AddAgent extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            agent: {
                agentId: uuid(),
                userName: "",
                agentName:"",
                password: "",
            }
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    onSubmit(){ //Adds the agent if the Add Agent button is clicked
        
        var url= "http://localhost:2020/agent-management-service/addAgent"
        //"http://localhost:9001/agents"
        axios.post(url, this.state.agent).then(resp=>{
                console.log("response"+resp.data)
                if(resp.data===1){
                    confirmAlert({
                        title: "Agent added succesfully",
                        message: this.state.agent.agentName + " was added",
                        buttons: [
                            {
                                label: "Okay",
                            }
                        ]
                    })
                    this.setState({agent:{
                        agentId: uuid(),
                        userName: "",
                        agentName:"",
                        password: ""
                }})
                }
                else if(resp.data===0){
                    confirmAlert({
                        title: "Agent exists",
                        message: this.state.agent.userName + " already exists",
                        buttons: [
                            {
                                label: "Okay",
                            }
                        ]
                    })
                }
                else {
                    confirmAlert({
                        title: "Error",
                        message: "Could not add " + this.state.agent.agentName,
                        buttons: [
                            {
                                label: "Okay",
                            }
                        ]
                    })
                }
            });//url for adding agent
    }

    handleChange(e){ //Update the state from the Password field
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState(prevState =>( {agent:{...prevState.agent,[name]:value}}))
    }

    handleUsernameChange(e){ //Update the state from the Username field
        this.setState({agentUsername: e.target.value})
    }

    handleNameChange(e){ //Update the state from the Agent's Name field
        this.setState({agentName: e.target.value})
    }

    render() {
        return (
            <div >
                <Form onSubmit={this.onSubmit}>                  {/* Form to enter the agent details */}
                    <Form.Group>
                        <Form.Field required>
                            <label>Enter Username</label>        {/* Field to enter the username */}
                            <Form.Input required name="userName" value={this.state.agent.userName} placeholder="Username" onChange={this.handleChange}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Enter Agent's Name</label>        {/* Field to enter Agent's Name */}
                            <Form.Input required name="agentName" value={this.state.agent.agentName} placeholder="Name" onChange={this.handleChange}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Enter Password</label>       {/* Field to enter Password */}
                            <Form.Input required name="password" value={this.state.agent.password} placeholder="Password" onChange={this.handleChange}/>
                        </Form.Field>
                    </Form.Group>
                    <Form.Button color="blue">Add Agent</Form.Button>
                </Form>
            </div>
        );
    }
}

export default AddAgent;