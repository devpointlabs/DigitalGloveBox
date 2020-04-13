import React from 'react';
import Parse from 'parse';
import { Dropdown } from 'semantic-ui-react'
import AddCar from './AddCar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    Parse.initialize(
      "VtH137ysq3yyLOqa014TxxlIAVGwEbd9PvOYuTSD",
      "pcGAl1MYs6UOiRESbDkIpyl9evmaAkKEL8IM8hko"
    );
    Parse.serverURL = "https://parseapi.back4app.com/";
    this.state = {
      result: '',
      cars: [],
      make: [],
      carMakeOfYear: [],
      yearsChosen: [],
      makeChosen:[],
      carModelofMake:[],
      modelChosen:[],
    };

    let install = new Parse.Installation()
    install.set("deviceType", navigator.userAgent);
    install.save().then((resp) => {
    console.log('created install objext', resp);
    this.setState({result: "New object created with object ID: " + resp.id})
      }, err => {
      console.log("error creating install object", err);
      this.setState({result: "failed to create new object, with error code: " + err.message})
      }
    )
  }

  yearOnChange = (e, data) => {
    console.log(data.value);
    this.setState(
      {yearsChosen:data.value}, ()=>{ //call back 
        this.carApi()
    });
  
  }

  makeOnChange =(e, data) =>{
   console.log(data.value);
   this.setState(
     {makeChosen: data.value}, ()=>{ //call back 
      this.carApi()
     })
  }

  modelOnChange = (e,data) =>{
    console.log(data.value);
    this.setState(
      {modelChosen: data.value},
    )
  }

  carApi=() =>{
    const Car_Model_List = Parse.Object.extend(
      "Car_Model_List"
    );
    const query = new Parse.Query(Car_Model_List);
    query.limit(1000);
    query.equalTo("Year", this.state.yearsChosen);
    console.log(this.state.yearsChosen)

    query.find().then(
     (results) => {

       let data = JSON.stringify(results);
       let newData = JSON.parse(data)
       
       let makeArray = [...new Set(newData.map( d => d.Make ))];
       let modelChosenArray = newData.filter((d) => {return d.Make == this.state.makeChosen})
       console.log(modelChosenArray)
       //map newData with yearChoosen makeChoosen
       let modelArray = [...new Set(modelChosenArray.map( d => d.Model ))];

       let carModelofMake = modelArray.map((str) =>({value:str,text:str}));
       this.setState({carModelofMake: carModelofMake})

       var carMakeOfYear = makeArray.map((str) => ({ value: str, text: str}));
       this.setState({carMakeOfYear: carMakeOfYear})

       console.log(carMakeOfYear)
       console.log(carModelofMake)
        // let carMakeOfYear= [...new Set(makeArray.map(d=>d.))]
      }
    );
 
  }

  render() {
    var carMakeOfYear = this.state.carMakeOfYear
    var carModelofMake = this.state.carModelofMake
    return (
      <>
      <Dropdown 
        placeholder='Select Year'
        fluid
        search
        selection
        options={carYears}
        onChange={this.yearOnChange}
        required

        />
      <Dropdown 
        placeholder='Select Make'
        fluid
        search
        selection
        options={carMakeOfYear}
        onChange={this.makeOnChange}
        required

      />
      <Dropdown 
        placeholder='Select Model'
        fluid
        search
        selection
        options={carModelofMake}
        onChange = {this.modelOnChange}
        required

      />
      <h1>state=yearsChosen: {this.state.yearsChosen}</h1>
      <h1>state=makeChosen:{this.state.makeChosen}</h1>
      <h1>state=modelChosen:{this.state.modelChosen}</h1>
      <AddCar year={this.state.yearsChosen} make={this.state.makeChosen} model={this.state.modelChosen}/>
      </>
    )
  }
}
export default Home;


const carYears = [
  {value: 1992, text: 1992}, {value: 1993,text: 1993}, {value: 1994, text:1994}, {value: 1995, text:1995}, {value: 1996, text:1996}, {value: 1997, text:1997}, {value: 1998, text:1998}, {value: 1999, text:1999},
  {value: 2000, text: 2000}, {value: 2001,text: 2001}, {value: 2002, text:2002}, {value: 2003, text:2003}, {value: 2004, text:2004}, {value: 2005, text:2005}, {value: 2006, text:2006}, {value: 2007, text:2007},
  {value: 2008,text: 2008}, {value: 2009,text: 2009}, {value: 2010, text: 2010}, {value: 2011, text: 2011}, {value: 2012, text: 2012}, {value: 2013, text: 2013}, {value: 2014, text:2014}, {value: 2015, text:2015},
  {value: 2016,text: 2016}, {value: 2017,text: 2017}, {value: 2018, text: 2018}, {value: 2019, text: 2019}, {value: 2020, text: 2020},
]