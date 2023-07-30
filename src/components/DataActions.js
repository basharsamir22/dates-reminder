import React from 'react'
import {Row,Col} from 'react-bootstrap';
export default function DataActions({dataDelet,dataShow}) {
    return (
        <Row className='justify-content-center my-2'>
            <Col sm="8" className='d-flex justify-content-between'>
                <button onClick={dataDelet} className='btn-style p-2'>مسح الكل</button>
                <button onClick={dataShow} className='btn-style p-2'>عرض البيانات</button>
            </Col>
        </Row> 
    )
}
