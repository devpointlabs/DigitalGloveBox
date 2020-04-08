import React from 'react';
import Parse from 'parse';
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
      cars: []
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
  componentDidMount() {
    const Car_Model_List = Parse.Object.extend(
      "Car_Model_List"
    );
    const query = new Parse.Query(Car_Model_List);
    // query.equalTo("Make", "A string");
   query.equalTo("Year", 2000);
    // query.equalTo("Model", "A string");
    // query.equalTo("Category", "A string");
    query.find().then(
      (results) => {
         let data = JSON.stringify(results);
        this.setState({cars: data})
        
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        if (typeof document !== "undefined")
          document.write(
            `Car_Model_List found: ${JSON.stringify(results)}`
          );
        console.log("Car_Model_List found", results);
      },
      (error) => {
        if (typeof document !== "undefined")
          document.write(
            `Error while fetching Car_Model_List: ${JSON.stringify(
              error
            )}`
          );
        console.error("Error while fetching Car_Model_List", error);
      }
    );
 
  }
  render() { 
    return (
      <>
      <h1>{this.state.cars}</h1>
      <h1>{this.state.result}</h1>
      </>
    )
  }
}
export default Home;