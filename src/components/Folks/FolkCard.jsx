import React, { Component } from 'react';
import { Card, GridColumn } from 'semantic-ui-react';

class FolkCard extends Component {
  render() {
    let { folk } = this.props
    return (
      <GridColumn computer={5} >
        <Card
          index={this.props.folkIndex}
          className="folk-card"
          fluid
          raised
          onClick={this.props.onCardClick}
        >
          <Card.Content>
            <Card.Header content={`${folk.name} (CR ${folk.cr})`} />
            <Card.Meta content={`${folk.alignment} ${folk.race} ${folk.class ? `(${folk.class})` : ''}`} />
            <Card.Description>
              <p>{`hp ${folk.hp}; AC ${folk.ac}; CMD ${folk.cmd}`}</p>
              <p>{`Base Atk ${folk.baseAtk}; Melee ${folk.melee.length > 120 ? 'see details' : folk.melee}`}</p>
              <p>{`Fort ${folk.fort}, Ref ${folk.ref}, Will ${folk.will}`}</p>
            </Card.Description>
          </Card.Content>
        </Card>
      </GridColumn>
    );
  }
}

export default FolkCard;