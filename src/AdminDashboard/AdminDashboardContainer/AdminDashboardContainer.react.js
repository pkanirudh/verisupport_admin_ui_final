import React from 'react';
import ShowAgents from '../ShowAgents/ShowAgents.react';
import { Tab, Grid, Segment } from '../../../../verisupport_ui-master_lakshya/node_modules/semantic-ui-react';
import AddAgent from '../AddAgent/AddAgent.react';
import { Container } from 'semantic-ui-react';

const panes = [
    {
      menuItem: 'Show All Agents',
      render: () => <Tab.Pane attached={false}><ShowAgents/></Tab.Pane>,
    },
    {
      menuItem: 'Add a new Agent',
      render: () => <Tab.Pane attached={false}><AddAgent/></Tab.Pane>,
    },
  ]

const AdminDashboardContainer = () => {

    return (
        <Container>
            <Grid centered>
                <Grid.Column computer={12} mobile={15}>
                    
                        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                    
                </Grid.Column>
                </Grid>
        </Container>
    );

}

export default AdminDashboardContainer;