import React from 'react';
import { Form } from '../../../../verisupport_ui-master_lakshya/node_modules/semantic-ui-react';
import axios from 'axios';
import uuid from 'uuid';


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

    onSubmit(e){ //Adds the agent if the Add Agent button is clicked
        e.preventDefault();
        var url= "http://localhost:2020/agent-management-service/addAgent"
        //"http://localhost:9001/agents"
        axios.post(url, this.state.agent).then(resp=>console.log("response"+resp));//url for adding agent
        alert(this.state.agent)
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
                            <Form.Input required name="userName" placeholder="Username" onChange={this.handleChange}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Enter Agent's Name</label>        {/* Field to enter Agent's Name */}
                            <Form.Input required name="agentName" placeholder="Name" onChange={this.handleChange}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Enter Password</label>       {/* Field to enter Password */}
                            <Form.Input required name="password" placeholder="Password" onChange={this.handleChange}/>
                        </Form.Field>
                    </Form.Group>
                    
                    <Form.Button color="blue">Add Agent</Form.Button>
                </Form>
            </div>
        );
    }
}

export default AddAgent;