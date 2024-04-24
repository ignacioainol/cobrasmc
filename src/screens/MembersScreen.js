import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const MembersScreen = () => {
  return (
    <div>
      <h3>Directiva</h3>
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <Card style={{ width: '18rem', margin: '0 auto' }}>
          <Card.Img src="/assets/images/integrants/lalut.jpeg" />
            <Card.Body>
              <Card.Title>Cristian Lalut</Card.Title>
              <Card.Text>
                Presidente
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-sm-12 col-md-4">
          <Card style={{ width: '18rem', margin: '0 auto' }}>
          <Card.Img src="/assets/images/integrants/nachovp.jpeg" />
            <Card.Body>
              <Card.Title>Ignacio Mondaca</Card.Title>
              <Card.Text>
                Vice Presidente
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-sm-12 col-md-4">
          <Card style={{ width: '18rem', margin: '0 auto' }}>
          <Card.Img src="/assets/images/integrants/joseluis.jpeg" />
            <Card.Body>
              <Card.Title>Jose Luis Ortiz</Card.Title>
              <Card.Text>
              Sgto de Armas
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-4">
          <Card style={{ width: '18rem', margin: '0 auto' }}>
          <Card.Img src="/assets/images/integrants/lalut.jpeg" />
            <Card.Body>
              <Card.Title>Cristian Lalut</Card.Title>
              <Card.Text>
                Presidente
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-sm-12 col-md-4">
          <Card style={{ width: '18rem', margin: '0 auto' }}>
          <Card.Img src="/assets/images/integrants/nachovp.jpeg" />
            <Card.Body>
              <Card.Title>Ignacio Mondaca</Card.Title>
              <Card.Text>
                Vice Presidente
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-sm-12 col-md-4">
          <Card style={{ width: '18rem', margin: '0 auto' }}>
          <Card.Img src="/assets/images/integrants/joseluis.jpeg" />
            <Card.Body>
              <Card.Title>Jose Luis Ortiz</Card.Title>
              <Card.Text>
              Sgto de Armas
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    
    </div>
  )
}
