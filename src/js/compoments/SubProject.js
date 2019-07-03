import React from 'react';
import { Card } from 'react-bootstrap';
// import { Card, Icon } from 'semantic-ui-react';

// import 'semantic-ui/dist/semantic.min.css';
// import 'semantic-ui-css/semantic.min.css';

// import React from 'react';
// // import { Button } from 'semantic-ui-react';
const ProjectCard = () => {
  return (
    <Card style={{ width: '100%', height: '100%', backgroundColor: '#3e3947' }}>
      <Card.Body>
        <Card.Title style={{ color: 'white' }}>Card Title</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Card Subtitle</Card.Subtitle>
        <Card.Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo dolor
          ad, culpa repellat maiores officiis assumenda consequuntur cum
          cupiditate sapiente quos voluptates exercitationem libero tempora,
          natus animi. Possimusentium aperiam sequi eius, reiciendis porro, ex
          dicta molestiae vitae voluptatum aliquam ea fugit mollitia? Culpa
          mollitia rem saepe temporibus. Provident, expedita. Inventore, vitae
          dolores, faci.
        </Card.Text>
        <Card.Link href='#'>
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
