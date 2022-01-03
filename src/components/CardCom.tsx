import React from 'react'
import { Card } from 'react-bootstrap'

type Props={
    name:string
    age:number
}

export const CardCom:React.FC<Props> = ({name,age}) => {
    return (
        <Card style={{ width: '18rem' }} className='m-2'>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Age : {age} </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
       
    )
}
