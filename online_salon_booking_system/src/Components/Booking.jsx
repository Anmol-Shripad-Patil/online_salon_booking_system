import React, { useReducer, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CustomerHomePage.css'; 
const initialState = {
  selectedCity: '',
  salon_id: '',
  barber_id: '',
  service_id: '',
  selectedDate: new Date(),
  availableBarbers: [],
  availableTimeSlots: [],
  tid: '',
  customer_id:''
};



const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CITY':
      
      return { ...state, selectedCity: action.payload };
    case 'SET_SALON':
      return { ...state, salon_id: action.payload, barber_id: '' };
    case 'SET_BARBER':
      return { ...state, barber_id: action.payload };
    case 'SET_SERVICE':
      return { ...state, service_id: action.payload };
    case 'SET_DATE':
      return { ...state, selectedDate: action.payload };
    case 'SET_TIME_SLOTS':
      return { ...state, availableTimeSlots: action.payload };
    case 'SET_TIME_SLOT':
      return { ...state, tid: action.payload };
    default:
      return state;
  }
};

const Booking = () => {

  initialState.customer_id=JSON.parse(localStorage.getItem("logincusOBJ")).customer_id;
  const[msg,setMsg]=useState("");
  const sendData=(e) =>{
    e.preventDefault();

    // localStorage.setItem("loginbookingOBJ",JSON.stringify(e));
    const reqOptions={
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(state)
                            
    }
    fetch("http://localhost:8080/registerBooking",reqOptions)
    .then(resp=>resp.text())
    .then(text=>text.length ? JSON.parse(text):{})
    .then(obj => {
      if(Object.keys(obj)===0)
      {
        setMsg("Wrong UID/PWD");
        alert("fail");
      }
      else{
        if(obj.status === false)
        {
          alert("Not Login");

        }
        else
        {
          alert("Success");
        }
      }
    });                                            //pending
}



  const [state, dispatch] = useReducer(reducer, initialState);
  
  const[fcities,setfCities]=useState([]);

  
  useEffect(()=>{
    
    fetch("http://localhost:8080/getallcities")
    .then(resp=>resp.text())
    .then(text=>text.length ? JSON.parse(text):{})
    .then(obj=> {
    setfCities(obj);
    
})

},[])



 const[fsalons,setSalons]=useState([]);


const getSalons=(v)=>{
  fetch("http://localhost:8080/getspecsalons/"+v)
  .then(resp=>resp.text())
  .then(text=>text.length ? JSON.parse(text):{})
  .then(obj=>{
    setSalons(obj);
  })
}
const[fbabers,setBarbers]=useState([]);
const getBarbers=(v)=>{
  fetch("http://localhost:8080/getspecsbybarbers/"+v)
  .then(resp=>resp.text())
  .then(text=>text.length ? JSON.parse(text):{})
  .then(obj=>{
    setBarbers(obj);
  })
}

const[fservices,setServices]=useState([])
const getServices=()=>{
  fetch("http://localhost:8080/getallservices")
  .then(resp=>resp.text())
  .then(text=>text.length ? JSON.parse(text):{})
  .then(obj=>{
    setServices(obj)
  })
}

  
const[fslots,setSlots]=useState([])
  const getTimeSlots = (v) => {
    // Simulated time slots
    fetch("http://localhost:8080/timeslots/"+v)
    .then(resp=>resp.text())
    .then(text=>text.length ? JSON.parse(text):{})
    .then(obj=>{
      setSlots(obj)
    })
    
  };

  // useEffect(() => {
  //   if (state.salon_id && state.selectedDate && state.selectedBarber) {
  //     fetchTimeSlots();
  //   }})
  // }, [state.salon_id, state.selectedDate, state.selectedBarber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment submitted:', {
      selectedCity: state.selectedCity,
      salon_id: state.salon_id,
      barber_id: state.barber_id,
      service_id: state.service_id,
      selectedDate: state.selectedDate,
      tid: state.tid,
    });
  };
  var price=0;
  return (
    <div className="backImag1 container" >
      
      <h1 className="my-4 text-left" >E-Salon Appointment Booking</h1>
      <br/>
      <br/>
      {state.selectedCity === '' ? (
        <div>
          <h2>Select a City:</h2>
          <select className="form-select mb-3"
            value={state.selectedCity}
            onChange={(e) => {dispatch({ type: 'SET_CITY', payload: e.target.value });getSalons(e.target.value)}}
            required
          >
            <option value="">Select a City</option>
            {fcities.map(city => {
              return <option key={city.city_id} value={city.city_id} >
                {city.city}
              </option>
            })
          }
          </select>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Book an Appointment</h2>
          <div className="mb-3">
            <label className='form-label'>
              Select Salon:
              <select className="form-select"
                value={state.salon_id}
                onChange={(e) => {dispatch({ type: 'SET_SALON', payload: e.target.value });getBarbers(e.target.value);getServices()}}
                required
              >
                <option value="">Select a Salon</option>
                {fsalons.map(salon => (
                  <option key={salon.salon_id} value={salon.salon_id}>
                    {salon.salon_name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {state.salon_id && (
            <div className="mb-3">
              <label>
                Select Barber:
                <select className="form-select"
                  value={state.barber_id}
                  onChange={(e) => {dispatch({ type: 'SET_BARBER', payload: e.target.value });getTimeSlots(e.target.value)}}
                  required
                >
                  <option value="">Select a Barber</option>
                  {fbabers.map(barberss => (
                    <option key={barberss.barber_id} value={barberss.barber_id}>
                      {barberss.barber_name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}
          {state.salon_id && state.barber_id && (
            <div className="mb-3">
              <label>
                Select Service:
                <select className="form-select"
                  value={state.service_id}
                  onChange={(e) => {dispatch({ type: 'SET_SERVICE', payload: e.target.value })}}
                  required
                >
                  <option value="">Select a Service</option>
                  {fservices.map(services => (
                    <option key={services.service_iD} value={services.service_iD}>
                      {services.serviceName}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}
          {/* {state.salon_id && state.selectedBarber && (
            <div>
              <label>
                Price:
              </label>
              <p>{fservices.price}</p>
            </div>
          )} */}
          {state.salon_id && state.barber_id && (
            <div className="c">
              <label>
                Select Date:
                <input className="form-select"
                  type="date"
                  value={state.selectedDate.toISOString().split('T')[0]}
                  onChange={(e) => dispatch({ type: 'SET_DATE', payload: new Date(e.target.value) })}
                  required
                />
              </label>
            </div>
          )}
          {state.salon_id && state.barber_id && (
            <div className="time-slots;mb-3">
              <label>
                Select Time Slot:
                <select className="form-select"
                  value={state.tid}
                  onChange={(e) => dispatch({ type: 'SET_TIME_SLOT', payload: e.target.value })}
                  required
                >
                  <option value="">Select a Time Slot</option>
                  {fslots.map(slots => (
                    <option key={slots.start_time} value={slots.tid}>
                      {slots.start_time}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}
          {state.salon_id && state.barber_id && state.service_id && state.selectedDate && (
            <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              sendData(e)  
               
            }}
          >
            Book Appointment
          </button>
          
          )}
        </form>
      )}
         {/* {<p>{JSON.stringify(state)}</p>}    */}
    </div>
  );
};

export default Booking;