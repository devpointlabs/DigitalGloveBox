import React from "react";
import Parse from "parse";


import Select, { components }  from 'react-select';


import { FormContainer, Button } from '../../styled_component/styledComponents';

import AddCar from "./AddCar";

class carApi extends React.Component {
  constructor(props) {
    super(props);
    
    Parse.initialize(
      "vSdQDkYeIYIQAKwPS12Z1WDXc5qMBTziQDL4oFzo",
      "m0aSQQhTdHbHfcJzaARaAmYC2EaTDj7wittdIr01"
    );
    Parse.serverURL = "https://parseapi.back4app.com/";
    this.state = {
      result: "",
      cars: [],
      make: [],
      carMakeOfYear: [],
      yearsChosen: '',
      makeChosen: [],
      carModelofMake: [],
      modelChosen: [],
      toggleCarForm: false,
      selectedOption: null,
    };

    let install = new Parse.Installation();
    install.set("deviceType", navigator.userAgent);
    install.save().then(
      (resp) => {
        console.log("created install objext", resp);
        this.setState({
          result: "New object created with object ID: " + resp.id,
        });
      },
      (err) => {
        console.log("error creating install object", err);
        this.setState({
          result:
            "failed to create new object, with error code: " + err.message,
        });
      }
    );
  }

  handleClick = () => {
    let { toggleCarForm } = this.state;
    this.setState({ ...this.state, toggleCarForm: !toggleCarForm });
  };
  yearOnChange = (selectedOption) => {
    console.log(selectedOption)
    this.setState({ yearsChosen: selectedOption.value });
    console.log(this.state.yearsChosen)
    return (() => {
      this.carApi();})
      // this.setState({ selectedOption });
      
      
    }

    
    
  handleChange = ({value, label}) => {
    console.log(`Option selected:`, value);
    this.setState({ ...this.state, selectedOption: value}, () => {
      this.carApi()})

    }
  

  makeOnChange = ({value, label}) => {
    this.setState({ makeChosen: value }, () => {
      this.carApi();
    });
  };

  modelOnChange = ({value, label}) => {
    this.setState({ modelChosen: value });
  };

  carApi = () => {
    const Carmodels_Car_Model_List = Parse.Object.extend("Carmodels_Car_Model_List");
    const query = new Parse.Query(Carmodels_Car_Model_List);
    query.limit(1000);
    query.equalTo("Year", this.state.selectedOption);
    query.find().then((results) => {
      let data = JSON.stringify(results);
      let newData = JSON.parse(data);

      let makeArray = [...new Set(newData.map((d) => d.Make))];
      let modelChosenArray = newData.filter((d) => {
        return d.Make == this.state.makeChosen;
      });

      let modelArray = [...new Set(modelChosenArray.map((d) => d.Model))];

      let carModelofMake = modelArray.map((str) => ({ value: str, label: str }));
      this.setState({ carModelofMake: carModelofMake });

      var carMakeOfYear = makeArray.map((str) => ({ value: str, label: str }));
      this.setState({ carMakeOfYear: carMakeOfYear });
    });
  };



  toggleForm = () => {
    var carMakeOfYear = this.state.carMakeOfYear;
    var carModelofMake = this.state.carModelofMake;

    if (this.state.toggleCarForm === true) {
      return (
        <>
          <AddCar
            year={this.state.selectedOption}
            make={this.state.makeChosen}
            model={this.state.modelChosen}
          />
        </>
      );
    } else {
 
}
      return (
        <>
          <FormContainer> 
       

          <Select 
            onChange={this.handleChange}
            options={options}
            autoFocus={true}
            require
          />
          {/* <DropDown
            placeholder="Select Year"
            fluid
            search
            selection
            options={carYears}
            onChange={this.yearOnChange}
            required
          /> */}
          <Select
            options={carMakeOfYear}
            onChange={this.makeOnChange}
            require
          />
          <Select
            
            options={carModelofMake}
            onChange={this.modelOnChange}
            require
          />
          <Button onClick={this.handleClick}> Add Car Information </Button>
          </FormContainer> 
        </>
      );
    }
  

  render() {
    return this.toggleForm();
  }
}
export default carApi;

const options = [
  { value: 1992, label: 1992 },
  { value: 1993, label: 1993 },
  { value: 1994, label: 1994 },
  { value: 1995, label: 1995 },
  { value: 1996, label: 1996 },
  { value: 1997, label: 1997 },
  { value: 1998, label: 1998 },
  { value: 1999, label: 1999 },
  { value: 2000, label: 2000 },
  { value: 2001, label: 2001 },
  { value: 2002, label: 2002 },
  { value: 2003, label: 2003 },
  { value: 2004, label: 2004 },
  { value: 2005, label: 2005 },
  { value: 2006, label: 2006 },
  { value: 2007, label: 2007 },
  { value: 2008, label: 2008 },
  { value: 2009, label: 2009 },
  { value: 2010, label: 2010 },
  { value: 2011, label: 2011 },
  { value: 2012, label: 2012 },
  { value: 2013, label: 2013 },
  { value: 2014, label: 2014 },
  { value: 2015, label: 2015 },
  { value: 2016, label: 2016 },
  { value: 2017, label: 2017 },
  { value: 2018, label: 2018 },
  { value: 2019, label: 2019 },
  { value: 2020, label: 2020 },
];
