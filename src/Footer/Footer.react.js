import React from 'react'
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Image,
  Statistic,
} from 'semantic-ui-react'

const Footer = () => (
  <div>
    <Segment inverted className="footer" vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid inverted stackable >
          <Grid.Row>
            <Grid.Column width={3} verticalAlign="middle">
              <Image  src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular/>
            </Grid.Column>
            <Grid.Column verticalAlign="middle" width={3}>
              <Header content="VeriSupport" color="teal" as="h1"/>
            </Grid.Column>
            <Grid.Column verticalAlign="middle" width={7}>
              <Header as='h4' inverted>
                Description
              </Header >
              <p>
                This application was developed as a project during the training for verizon new hires.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
)

export default Footer