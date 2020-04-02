import React,{useState,} from "react";
import {AuthContext,} from "../../providers/AuthProvider"
import axios from "axios";
import {Form,} from "semantic-ui-react";
import {useFormInput,} from "../Hooks/useFormInput";

const CarsForm = (props) => {
  const make = useFormInput("")
  const year = useFormInput("")
  const color = useFormInput("")
  const license_plate= useFormInput("")
  const policy_exp = useFormInput("")
  const [roadside_ass, setRoadside_ass] = useState(false)
  const miles = useFormInput("")
  const vin = useFormInput ("")
  const policy_number = useFormInput ("")
  const insurance_prov_num = useFormInput ("")
  const {user} = useContext(AuthContext)



  const {id,editCard,cars,} = props
  console.log(cars)
  console.log(props)

  const car = {roadside_ass:roadside_ass}

  const handleChangeCheckbox = () => setRoadside_ass(() => ({ roadside_ass: !roadside_ass }))


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(props.isEditing){

      axios
        .put(`/api/users/${user.id}/cars/${id}`,{
          make:make.value,model:model.value,year:year.value,color:color.value,
          license_plate:license_plate.value,policy_exp:policy_exp.value,
          roadside_ass,miles:miles.value,vin:vin.value,policy_number:policy_number.value,
          insurance_prov_num:insurance_prov_num.value,
        })
        .then(res => {
          console.log(res.data)
          const newCars = cars.map((car) => {
            if (car.id === id){
              return res.data;
            }
            return car
          });
          editCard(newCars);
          console.log(newCars)
        })
        .catch(e =>{
          console.log ('not working')
          console.log (e)
        })

    }
      else{
        axios.post(`/api/users/${user.id}/cars`,{
          make:make.value,model:model.value,year:year.value,color:color.value,
          license_plate:license_plate.value,policy_exp:policy_exp.value,
          roadside_ass,miles:miles.value,vin:vin.value,policy_number:policy_number.value,
          insurance_prov_num:insurance_prov_num.value,
        })
        .then(res =>{
          props.add(res.data)
          props.toggleForm();
        })
      }
  }

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          label ="make"
          placeholder = {props.make}
          required
          {...make}
        />

         <Form.Input
          label ="model"
          placeholder = {props.model}
          required
          {...model}
        />

         <Form.Input
          label ="color"
          placeholder = {props.color}
          required
          {...color}
        />

         <Form.Input
          label ="license_plate"
          placeholder = {props.license_plate}
          required
          {...license_plate}
        />
        <Form.Input
          label ="policy_exp"
          placeholder = {props.policy_exp}
          required
          {...policy_exp}
        />
        
         <Form.Input
          label ="miles"
          placeholder = {props.miles}
          required
          {...miles}
        /> 
         <Form.Input
          label ="vin"
          placeholder = {props.vin}
          required
          {...vin}
        /> 
         <Form.Input
          label ="policy_number"
          placeholder = {props.policy_number}
          required
          {...policy_number}
        /> 
         <Form.Input
          label ="insurance_prov_num"
          placeholder = {props.insurance_prov_num}
          required
          {...insurance_prov_num}
        /> 
       

       
      </Form.Group>

      <Form.Checkbox
          name = 'roadside_ass'
          label ="Do you have roadside assistance?"
          onChange={(e) => setRoadside_ass(!roadside_ass)}
          checked ={roadside_ass}
         
        /> 

      <Form.Checkbox
            label="Do you have roadside assistance?"
            name='roadside_ass'
            onChange={handleChangeCheckbox()}
            checked={roadside_ass}
      /> 


      <Form.Button>Submit</Form.Button>
    </Form>
    </>
  )

}

//     t.string "make"
//     t.string "model"
//     t.integer "year"
//     t.string "color"
//     t.string "license_plate"
//     t.date "policy_exp"
//     t.boolean "roadside_ass"
//     t.integer "miles"
//     t.string "vin"
//     t.string "policy_number"
//     t.string "insurance_prov_num"



export default CarsForm


