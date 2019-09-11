import React from 'react';
import ShowAgents from '../ShowAgents/ShowAgents.react';
import { Tab, Grid } from 'semantic-ui-react';
import AddAgent from '../AddAgent/AddAgent.react';
import HomeNav from '../../HeaderBar/HeaderBar.react';


const panes = [
    {
      menuItem: 'Show All Agents',
      render: () => <Tab.Pane attached={false}><ShowAgents/></Tab.Pane>,//Tab for Showing all agents in the database
    },
    {
      menuItem: 'Add a new Agent',
      render: () => <Tab.Pane attached={false}><AddAgent/></Tab.Pane>,//Tab for Adding an agent to the database
    },
  ]

const AdminDashboardContainer = () => {

    return (//Container for the admin dashboard containg two tabs
      <div>
        {/* <HomeNav></HomeNav> */}
        <Grid centered>
                <Grid.Column computer={12} mobile={15}>
                    
                        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                    
                </Grid.Column>
        </Grid>
      </div>
        
            
        
    );

}

export default AdminDashboardContainer;