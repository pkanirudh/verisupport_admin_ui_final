import React from 'react';
import { Button, Card } from 'semantic-ui-react';



const AgentHolder = (props) => {
//Component to hold individual agents
    return (
        <Card>
            <Card.Content>
                <Card.Header>{props.agent.agentName}</Card.Header>
                <Card.Meta>ID : {props.agent.agentId}</Card.Meta>
                <Card.Description>Username : {props.agent.userName}</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Button fluid basic negative onClick={() => props.onDelete(props.agent.userName)}>
                {/* Gives the userName back to the parent ShowAgents to delete the Agent from the state which refereshes on it's own */}
                Remove Agent
            </Button>
            </Card.Content>
        </Card>
    );

}

export default AgentHolder;