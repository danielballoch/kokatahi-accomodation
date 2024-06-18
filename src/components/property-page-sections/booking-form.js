import React, {useRef, useEffect, useState} from "react"
import styled from "@emotion/styled"
import { navigate } from "gatsby"
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";
import { isWithinInterval, format } from "date-fns";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';


const FormDiv = styled.div`
z-index: 200;
grid-area: 1/1;
position: relative;
flex-direction: row;
display: flex
height: 100%;
width: 100%;
justify-content: center;
align-items: center;
border-radius: 10px;
form {
    border-radius: 10px;
    margin: auto;
    box-sizing: border-box;
    // width: 640px;
    padding: 40px 30px;
    // height: 600px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // .react-date-picker__inputGroup__input {
    //     min-width: 1.2em!important;
    // }
    // .react-calendar__tile--active, .react-calendar__tile:enabled:hover {
    //     background-color: #4a9c2d!important;
    //     color: white !important;
    // }
    .summary {
    font-size: 13px;
    font-style: italic;
    }
   .input-style {
        // margin: 0 20px;
        // margin-left: 20px;
        border: solid 1px #8f8f9d;
        border-radius: 3px;
        :focus {
            outline: 5px auto #5E9ED6!important;
            box-shadow: unset;
        }
    }
    .rooms {
        margin-top: 20px;
        select {
            margin-left: 10px;
            padding: 5px 10px;
            background-color: white;
            border: solid 1px #8f8f9d;
            border-radius: 3px;
            
            // box-shadow: 0 0 3px #CC0000;
            :focus {
                // border: unset;
                outline: 5px auto #5E9ED6!important;
                box-shadow: 0 0 0 #5E9ED6!important;
            }
        }
    }
    .time-selection {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        div {
            // border: solid 1px black;
            font-size: 13px;
            font-weight: 600;
            padding: 14px 14px;
            box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
            margin: 0 0 10px 0;
            // background-color: grey;
            :hover {
                cursor: pointer;
            }
            :last-of-type {
                justify-self: start;
                align-self: start;
                margin-right: auto;
                margin-left: 4px;
            }
        }
        .active-time {
            background-color: #c9d2c8;
        }
    }
    .select-style {
        background-color: white;
        padding: 5px;
        border: solid 1px black;
        :hover {
            cursor: pointer;
        }
    }
    .button-style {
        // border-radius: 5px;
        margin-top: 20px;
        padding: 20px;
        // background-color: #808080;
        background-color: #535d41;
        color: white;
        border: solid 1px #808080;
        transition: .3s;
        font-size: 14px;
        font-weight: 600;
        :hover {
            cursor: pointer;
            background-color: #74815b;
            border: solid 1px #74815b;
        }
    }
    option:hover {
        cursor: pointer;
    }
    h2 {
        margin-top: 0;
    }
    label {
        margin-top: 20px;
        margin-bottom: 2px;
        :first-of-type {
            margin-top: 0;
        }
    }
    textarea {
        font-size: 16px;
        padding: 5px;
    }
    textarea {
        height: 100px;
        resize:vertical;
    }
    .react-daterange-picker__wrapper {
        // margin-left: 20px;
        // margin-bottom: 20px;
        border: solid 1px #8f8f9d;
        border-radius: 3px;
        padding: 2px;
        :hover {
            cursor: pointer;
        }
    }
    .message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // margin: -40px;
        position: absolute;
        z-index: 100;
        max-width: 560px;
        width: 100vw;
        height: 0px;
        overflow: hidden;
        color: rgba(255,255,255,0);
        background-color: rgba(255,255,255,0);
        transition: background-color .5s ease, color .5s ease,  height 2s;
        p, h2 {
            transition: color .5s ease;
            color: rgba(255,255,255,0);
        }
        div {
            width: 90vw;
            max-width: 450px;
        }
    }
    .sent {
        color: black;
        transition: background-color .5s ease, color .5s ease;
        height: 580px;
        background-color: rgba(255,255,255,.9);
        p, h2 {
            transition: color .5s ease;
            color: black;
        }
    }
}
.info-div {
    align-self: center;
    margin-left: 40px;
    color: white;
    width: 500px;
    h2 {
        margin: 0 0 20px 0;
        color: white;
        padding-bottom: 40px;
        border-bottom: 10px solid white;
    }
    .contacts-div {
        max-width: 500px;
        display: flex;
        flex-wrap: wrap;

        div {
            max-width: 200px;
            margin-right: 20px;
        }
    }
}
@media(max-width:1200px){
    flex-direction: column;
    .info-div {
        margin-left: 0;
        padding: 20px;
        h2 {
            margin: 40px 0px 20px;
        }
    }

}
@media(max-width:763px){
    h1 {
        font-size: 60px!important;
    }
}
@media(max-width:600px){
    width: 100%;
    max-width: 90vw;
    margin: auto;
    form {
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
        height: auto;
        padding: 30px 20px; 
    }
    .info-div {
        // width: 100vw;
        padding: 20px;
    }
    .time-selection {
        justify-content: start !important;
        div {
            margin: 0 10px 10px 0 !important;
        }
    }
}
@media(max-width:380px){
    form {
        h2 {
            font-size: 28px; 
        }
    }
}
#name , #email, #phone, #message {
    font-size: 16px;
    padding: 5px;
}
}

`
function isWithinRange(date, range) {
    return isWithinInterval(date, { start: range[0], end: range[1] });
}
function isWithinRanges(date, ranges) {
    return ranges.some(range => isWithinRange(date, range));
}

export default function BookingForm({bookedDates, property}){
    const [selectedDate, updateSelectedDate] = useState();
    const reRef = useRef();
    const [serverState, setServerState] = useState({formSent: false});
    const [roomOption, updateRoomOption] = useState(1);
    const [price, updatePrice] = useState();
    const [propertyText, updatePropertyText] = useState();
    const [priceEstimate, updatePriceEstimate] = useState();
    const [nights, updateNights] = useState(0);
    // console.log("bookedDates2:", bookedDates)

    //extra form data
   

    useEffect(() => {
        //set base room price for price * days calculation and propertyText for form submission
        if (property === 1 && Number(roomOption) === 1){updatePrice(100);updatePropertyText("Tui Bnb - Self Contained Wing (1 of 3 rooms, 1 toilet, sleeps up to 2)")}
        else if (property === 1 && Number(roomOption) === 2){updatePrice(200);updatePropertyText("Tui Bnb - Self Contained Wing (2 of 3 rooms, 1 toilet, sleeps up to 4)")}
        else if (property === 1 && Number(roomOption) === 3){updatePrice(250);updatePropertyText("Tui Bnb - Self Contained Wing (3 rooms, 1 toilet, sleeps up to 6)")}
        else if (property === 2){updatePrice(450);updatePropertyText("Longford - Private Home (4 rooms, 2 toilets, sleeps up to 8)")}
        else if (property === 3){updatePrice(700);updatePropertyText("The Full Suite - Both Properties (7 rooms, 3 toilets, sleeps up to 14)")}
        console.log("price: ", price)
        console.log("propertyText: ", propertyText)
     

        //cost estimate
        let timeDifference
        let daysDifference
        if(selectedDate){
            timeDifference = selectedDate[1].getTime() - selectedDate[0].getTime();
            daysDifference = Math.round(timeDifference / (1000 * 3600 *24))
            let nights = daysDifference -1; 
            updateNights(nights);
            updatePriceEstimate(nights*price)
        } else {
            updatePriceEstimate(price)
        }
        console.log(daysDifference)

    },[roomOption, selectedDate, price])
    

    function tileDisabled({ date, view}) {
      // Add class to tiles in month view onlys
      if (view === 'month') {
        // Check if a date React-Calendar wants to check is within any of the ranges
        return isWithinRanges(date, bookedDates);
      }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()


      async function onSubmit(data){
        // const reRef = useRef<>();
        // console.log(data)
        const token = await reRef.current.executeAsync();
        reRef.current.reset();

        let day1 = format(selectedDate[0], "dd/MM/yyy")
        let day2 = format(selectedDate[1], "dd/MM/yyy")
        let days = day1 + " - " + day2
        console.log("dayss: ", day1, day2)

        let timeDifference = selectedDate[1].getTime() - selectedDate[0].getTime();
        let daysDifference = Math.round(timeDifference / (1000 * 3600 *24))



        fetch(`/api/postmark-booking`, {
          method: `POST`,
          body: JSON.stringify({
            name: data.Name,
            email: data.Email,
            phone: data.Phone,
            property: propertyText,
            dates: days,
            price: priceEstimate + " for " + nights + " nights",
            token
        }),
          headers: {
            "content-type": `application/json`,
          },
        })
          .then(res => res.json())
          .then(body => {
            console.log(`response from API:`, body);
          })
          .then(navigate("/booking-form-success#top"))
      }
      console.log({ errors })
      useEffect(() => {
          if (serverState.formSent === true) {
            setTimeout(() => {
                setServerState({
                    formSent: false
                })
            }, 3000)
          }
      })
  return (
            <FormDiv>
                <ReCAPTCHA 
                    sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY} 
                    size="invisible"
                    ref={reRef} 
                />
                <form onSubmit={handleSubmit(onSubmit)} autocomplete="on">
                    <div className={serverState.formSent === true ? "message sent" : "message"}>
                        <div>
                            <h2>Your support form has been sent!</h2>
                            <p>Thank you for your message, we'll be in touch soon.</p>
                        </div>
                    </div>
                    {/* <h2>Booking Form</h2> */}
                    <label htmlFor="name">Name:</label>
                    <input
                        className="input-style"
                        id="name"
                        type="text" 
                        name="name" 
                        required  
                        {...register("Name", { required: true, maxLength: 100 })} 
                    />
                     <label htmlFor="phone">Phone:</label>
                    <input
                        className="input-style"
                        id="phone"
                        type="phone" 
                        name="phone" 
                        required  
                        {...register("Phone", { required: true, maxLength: 100 })} 
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        className="input-style"
                        id="email"
                        type="email" 
                        name="email" 
                        required  
                        {...register("Email", { required: true, maxLength: 100 })} 
                    />
                    {property === 1?
                    <span className="rooms">
                        <label htmlFor="rooms">Bedroom(s):</label>
                        <select
                            className="input-style"
                            id="rooms"
                            type="rooms" 
                            name="rooms" 
                            onChange={(e) => {updateRoomOption(e.target.value); console.log("e:", e.target.value)}}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </span>
                        : <span></span>
                    }
                    <label htmlFor="bookingdates">Booking Dates:</label>
                    {/* <DRP /> */}
                    {/* <Calendar/> */}
                    {/* <DatePicker onChange={updateSelectedDate} value={selectedDate} tileDisabled={tileDisabled} minDate={new Date()} format="dd-MM-y"/> */}
                    <DateRangePicker tileDisabled={tileDisabled} onChange={updateSelectedDate} minDate={new Date()} value={selectedDate} format="dd-MM-y"/>

                    <p className="summary">{nights === 1? nights + " x night accomodation" : nights > 1? nights + " x nights accomodation" : "Please select your booking dates."}</p>
                    <p>Price Estimate: ${priceEstimate} (NZD)</p>
                    <button
                        type="submit" 
                        class="g-recaptcha button-style"
                        data-sitekey="site_key"
                        data-callback='onSubmit'
                        data-action='submit'
                    >SEND BOOKING REQUEST</button>
                </form>
            </FormDiv>
  )
}