// import react
import React from 'react';
// import react boostraps
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Project(props) {
  const { project } = props;
  console.log(project)
    return (
        <Row xs={1} md={2} className="g-4">
         <Col>
          <Card d-flex bd-highlight key={project.id}>
            <Card.Img variant="top" src={require(`../assets/images/${project.image}.png`)} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                {project.technologies}
                <br/>
                {project.description}
              </Card.Text>
              <Card.Link href={project.github }>Github</Card.Link>
        <Card.Link href={project.deployed}>Live</Card.Link>
            </Card.Body>
          </Card>
       </Col>
   </Row>
    );
}

// export Project
export default Project;