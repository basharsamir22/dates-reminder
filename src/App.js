import React,{ useState,useEffect } from 'react';
import {Container,Row,Col, Image} from 'react-bootstrap';
import { person } from './data';
import DatesCount from './components/DatesCount';
import DataList from './components/DataList';
import DataActions from './components/DataActions';
function App() {
  const [personData,setPersonData]=useState(person)
  const onDelet=()=>{
    setPersonData([])
  }
  const onShow=()=>{
    setPersonData(person)
  }
  useEffect(()=>{
    setPersonData([])
  },[])
  return (
    <div className="font color-body">
      <Container className='py-5'>
        <DatesCount person={personData}/>
        <DataList person={personData}/>
        <DataActions dataDelet={onDelet} dataShow={onShow}/>
      </Container>
    </div>
  );
}

export default App;
