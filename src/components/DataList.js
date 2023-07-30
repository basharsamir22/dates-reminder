import React from 'react'
import {Row,Col,Image} from 'react-bootstrap';
export default function DataList({person}) {
    return (
        <Row className='justify-content-center'>
            <Col sm="8" className=''>
            <div className='rectangle p-2'>
                {person.length ? (person.map((item) => {
                return(
                    <div key={item.id} className='d-flex border-bottom mx-3 my-2'>
                    <Image className='img-avatar' src="profile.png" alr=""/>
                    <div className='px-3'>
                        <p className='d-inline fs-5'>{item.name}</p>
                        <p className='fs-6'>{item.date}</p>
                    </div>
                    </div>
                )
                })) : <h2 className='p-5'>لا يوجد بيانات</h2>}
            </div>
            </Col>
        </Row>
    )
}
