import React,{useState,useContext,useEffect} from 'react'
import axios from 'axios';
import { Form, Button, Dropdown} from 'semantic-ui-react';
import { AuthContext } from '../../providers/AuthProvider';
import {useFormInput,} from "../Hooks/useFormInput";

const AddCar = (props) =>{
  
  const { user } = useContext(AuthContext)
  const model = useFormInput("")
  const year = useFormInput("")
  const color = useFormInput("")
  const license_plate= useFormInput("")
  const policy_exp = useFormInput("")
  const [roadside_ass, setRoadside_ass] = useState(false)
  const miles = useFormInput("")
  const vin = useFormInput ("")
  const policy_number = useFormInput ("")
  const insurance_prov_num = useFormInput ("")
  const insurance_provider = useFormInput("")
  const [carData,setCarData] = useState([])
  const [yearOptions,setYearOptions] = useState('')
  const make = useFormInput("")
  // console.log(carData)
  // console.log(yearOptions)



      // const getMakes = `https://parseapi.back4app.com/classes/Car_Model_List_${make}`

    
  useEffect(()=>{

    fetch(
      'https://parseapi.back4app.com/classes/Car_Model_List?limit=10000',
      {
        headers: {
          'X-Parse-Application-Id': 'VtH137ysq3yyLOqa014TxxlIAVGwEbd9PvOYuTSD', // This is your app's application id
          'X-Parse-REST-API-Key': 'yzmjPE0qXKB58pU4dAVyN0LgaDPM3cXFDig0xd6p', // This is your app's REST API key
        },
        
      }
    )
    .then(results => results.json())
      .then(data => {
      // axios post to a method in our controller => 
        // then that controller organizes our cars into year, make, whatever we want. 
        // axios.post('/api/cars/all_cars', data)
      // mapCars(data.results)
    })
    .catch(err => {
      console.log(err);
    });
  }, [])


  // const mapCars =(cars)=>{
  //   return cars.map(car => {

  //   } 
  // )}
  
//   const mapCars= () =>{
//     let yearArray = carData.filter((Year, index) => carData.indexOf(carData.Year) === carData.index);
//     console.log(yearArray)
//     setYearOptions(yearArray)
//     }
//   carData = [{year:''},{year:''},{year:''}]
//   year = [2020,1313,12323,124124,]

//   //   arr = arr.filter (function (value, index, array) { 
//   //     return array.indexOf (value) == index;
//   // });

//   function getDistinctArray(yearArray) {
//     return [...new Set(yearArray)];
// }

// var noDupe = Array.from(new Set(names))



  // const getMakes = () => {
  //   fetch(
  //     `https://parseapi.back4app.com/classes/Car_Model_List_${make}`
  //     {
  //       headers: {
  //         'X-Parse-Application-Id': 'VtH137ysq3yyLOqa014TxxlIAVGwEbd9PvOYuTSD', // This is your app's application id
  //         'X-Parse-REST-API-Key': 'yzmjPE0qXKB58pU4dAVyN0LgaDPM3cXFDig0xd6p', // This is your app's REST API key
  //       }
  //     }
  //   )
  // }




  


// const handleMake = () => {
  // set state to the value
  // set make value
// }

  
    const handleSubmit = e => {
      e.preventDefault()
      axios.post(`/api/users/${user.id}/cars`,{make:make.value,model:model.value,year:year.value,color:color.value,
      license_plate:license_plate.value,policy_exp:policy_exp.value,
      roadside_ass,miles:miles.value,vin:vin.value,policy_number:policy_number.value,
      insurance_prov_num:insurance_prov_num.value,insurance_provider:insurance_provider.value})
      .then
        (res => props.history.goBack())
      .catch( (err) => {
        console.log(err)
      })
    }
          

    
    return(
      <Form onSubmit={handleSubmit}>
      {/* <select onChange={this.handleMake}>
        {mapCars()}
      </select> */}
            <Dropdown
              fluid
              search
              selection
              placeholder='Year'
              options={yearOptions}
            />
            <Form.Input
              label="Make"       
              name='make'
              required
              placeholder='Make'
              {...make}
            />
            <Form.Input
              label="Model"
              name='model'
              required
              placeholder='Model'
              {...model}
            />
            <Form.Input
              label="Color"
              name='color'
              required
              placeholder='Color'
              {...color}
            />
            <Form.Input
              label="License Plate"
              required
              name='license_plate'
              placeholder='License Plate'
              {...license_plate}
            />
            <Form.Input
              label="Vin Number"
              required
              name='vin'
              placeholder='Vin Number'
              {...vin}
            />
            <Form.Input
              label="Miles"
              required
              name='miles'
              placeholder='Total Miles'
              {...miles}
            />
            <Form.Input
              label="Policy Number"
              optional = "true"
              name='policy_number'
              placeholder='Policy Number'
              {...policy_number}
            />
            <Form.Input
              label="Policy Expiration"
              type = 'date'
              optional = "true"
              name='policy_exp'
              placeholder='XX/XX'
              {...policy_exp}
            />
            <Form.Input
              label="insurance Provider Number"
              optional = "true"
              name='insurance_prov_num'
              placeholder='Insurance Provider Number'
              {...insurance_prov_num}
            />
            <Form.Input
              label="Insurance Provider"
              required
              name='insurance_provider'
              placeholder='Insurance Provider'
              {...insurance_provider}
            />
          <Form.Checkbox
            label="Roadside Assistance? Check for yes."
            name='roadside_ass'
            onChange={(e) => setRoadside_ass(!roadside_ass)}
            checked={roadside_ass}
          />
        <Button>Add Car</Button>
    </Form>
    )
}

export default AddCar


