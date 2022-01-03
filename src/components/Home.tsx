import {useContext} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CardCom } from './CardCom'
import './Home.css'
import { Context } from './StateContext'

export const Home = () => {
    const {info}=useContext(Context)
    return (
        <Container fluid className='p-2 m-2'>
          <Row>
          {info.map((itm,ind)=>{
               return(
                   <Col md={3} sm={12} key={ind}>
                    <CardCom name={itm.name} age={itm.age} />
                   </Col>
               )
           })}
          </Row>
        </Container>
    )
}
