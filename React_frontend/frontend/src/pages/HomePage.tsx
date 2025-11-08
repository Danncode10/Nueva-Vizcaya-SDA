import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="display-4 font-weight-bold mb-4">Welcome to Nueva Vizcaya SDA Church</h1>
              <p className="lead mb-4">
                Join us in worship and community. Experience the love of Christ in our services and activities.
              </p>
              <Button variant="light" size="lg" className="mr-5">
                Visit Us This Sabbath
              </Button>
              <Button variant="outline-light" size="lg">
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section Placeholder */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col md={8}>
              <h2 className="h1 mb-4">About Our Church</h2>
              <p className="lead">
                Placeholder: Brief description about Nueva Vizcaya SDA Church, its history, mission, and values.
                This section will include information about our community, beliefs, and what makes us unique.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section Placeholder */}
      <section className="bg-light py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="h1">Our Services</h2>
              <p className="lead">Join us for worship and fellowship</p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body className="text-center">
                  <Card.Title className="h4">Sabbath Morning Service</Card.Title>
                  <Card.Text>
                    Placeholder: Time, location, and description of the morning worship service.
                    Includes hymns, prayer, and sermon.
                  </Card.Text>
                  <Button variant="primary">Service Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body className="text-center">
                  <Card.Title className="h4">Afternoon Service</Card.Title>
                  <Card.Text>
                    Placeholder: Time, location, and description of the afternoon service.
                    Additional worship opportunities for the community.
                  </Card.Text>
                  <Button variant="primary">Service Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Events Section Placeholder */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="h1">Upcoming Events</h2>
              <p className="lead">Stay connected with our community activities</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Community Potluck</Card.Title>
                  <Card.Text>
                    Placeholder: Date, time, and description of community gathering event.
                  </Card.Text>
                  <Button variant="outline-primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Youth Activities</Card.Title>
                  <Card.Text>
                    Placeholder: Youth programs, Bible studies, and social events.
                  </Card.Text>
                  <Button variant="outline-primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Mission Outreach</Card.Title>
                  <Card.Text>
                    Placeholder: Community service and mission activities.
                  </Card.Text>
                  <Button variant="outline-primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section Placeholder */}
      <section className="bg-secondary text-white py-5">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="h1 mb-4">Get In Touch</h2>
              <p className="lead mb-4">
                Placeholder: Contact information, address, phone, email, and office hours.
              </p>
              <Button variant="light" size="lg">
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
