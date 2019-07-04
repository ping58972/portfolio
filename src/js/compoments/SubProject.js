import React from 'react';
import { Card } from 'react-bootstrap';
// import { Card, Icon } from 'semantic-ui-react';

// import 'semantic-ui/dist/semantic.min.css';
// import 'semantic-ui-css/semantic.min.css';

// import React from 'react';
// // import { Button } from 'semantic-ui-react';
const ProjectCard = props => {
  return (
    <Card style={{ width: '100%', height: '100%', backgroundColor: '#3e3947' }}>
      <Card.Img
        className='images'
        variant='top'
        // src='holder.js/100px180?text=Image cap'
      />
      <Card.Body>
        <Card.Title style={{ color: 'white' }}>{props.title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text>{props.text}</Card.Text>
        <Card.Link href='https://ping58972.com'>
          <i class='fab fa-github fa-2x' />
        </Card.Link>
        <Card.Link href='#'>
          <i class='fab fa-linkedin-in fa-2x' />
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
