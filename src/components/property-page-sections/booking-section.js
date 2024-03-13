import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import BookingForm from "./booking-form"
import Calendar from "react-calendar"
import { isWithinInterval } from "date-fns";

const Wrapper = styled.div`
// background-color: #403d3d;
// border-top: solid 1px rgba(14, 30, 37, 0.12)!important;
padding: 50px 0 100px 0;
// min-height: 100vh;
width: 100%;
.main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1080px;
    margin: auto; 
}
.content-left {

    color: white;
    width: 600px;
    // width: 70%;
    // padding: 20px;
    margin-right: 20px;
    h3 {
        font-size: 26px;
        text-align: center;
        margin-bottom: 40px;
    }
    .react-calendar {
        border-radius: 10px;
        width: unset!important;
        border: solid 1px rgba(14, 30, 37, 0.12)!important;
        .react-calendar__navigation__prev2-button {
            border-radius: 10px 0 0 0;
        }
        .react-calendar__navigation__next2-button {
            border-radius: 0 10px  0 0;
        }
    }
    .react-calendar__viewContainer {
        pointer-events: none;
      }
    .key {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 0 20px;
    }
    .key-item {
        display: flex;
        align-items: center;
        margin-right: 20px;
    }
    .box {
        display: inline-block;
        height: 20px;
        width: 40px;
        margin-right: 10px;
        border: solid 1px rgba(14, 30, 37, 0.12);
    }
    .today {
        background-color: #ffff76;
    }
    .unavailable {
        background-color: #f0f0f0;
    }
    .available {
        background-color: white;
    }
}
.content-right {
    border-radius: 10px;
    background-color: #f8f8f8!important;
    box-sizing: border-box;
    width: 400px;
    // margin: 20px;
    // width: 50%;
    border: solid 1px rgba(14, 30, 37, 0.12);
    // box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    .host-text {
        padding: 20px;
    }
}
@media(max-width: 1000px){
    .main {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .key {
        flex-wrap: wrap;
        justify-content: flex-start!important;
        .key-item {
            margin: 0 20px 20px 0;
        }
    }
    .content-left, .content-right {
        width: 90vw;
    }
}
`

function isWithinRange(date, range) {
    return isWithinInterval(date, { start: range[0], end: range[1] });
}
function isWithinRanges(date, ranges) {
    return ranges.some(range => isWithinRange(date, range));
}

let in3Days = new Date(2024, 1, 28);
let in5Days = new Date(2024, 1, 28);
let in13Days = new Date(2024, 1, 26);
let in15Days = new Date(2024, 1, 26);




export default function MainContent({datesUnavailable}){
    const [bookedDates, setBookedDates] = useState([ [in3Days, in5Days],[in13Days, in15Days],])

    useEffect(()=> {
        let datesUnavailableRanges = []
        for(let i = 0; i < datesUnavailable.length; i++){
            let d = datesUnavailable[i].bookedDate.split("-")
            let d2 = datesUnavailable[i].bookedDate.split("-")
            //Use end date if it exists
            if(datesUnavailable[i].endDate !== null){
                d2 = datesUnavailable[i].endDate.split("-")
            }
            //Format needs to be: new Date(2023, 11, 26);
            datesUnavailableRanges.push([new Date(Number(d[0]), Number(d[1])-1, Number(d[2])), new Date(Number(d2[0]), Number(d2[1])-1, Number(d2[2]))])
        }
        // console.log("initial",datesUnavailable)
        // console.log("ranges",datesUnavailableRanges)
        setBookedDates(datesUnavailableRanges);
    },[datesUnavailable])

    function tileDisabled({ date, view}) {
      // Add class to tiles in month view only
      if (view === 'month') {
        // Check if a date React-Calendar wants to check is within any of the ranges
        return isWithinRanges(date, bookedDates);
      }
    }

    // console.log("bookedDates: ", bookedDates)
    return(
        <Wrapper>
            <div className="main">
                <div className="content-left">
                <h3>Reserve Your Holiday Accomodation Today!</h3>
                <Calendar minDate={new Date()} activeStartDate={null} tileDisabled={tileDisabled}/>
                    <div className="key">
                        <span className="key-item"><span className="box today"/> = Today</span>
                        <span className="key-item"><span className="box unavailable"/> = Unavailable</span>
                        <span className="key-item"><span className="box available"/> = Available</span>
                    </div>
                
                </div>
                <div className="content-right">
                    <BookingForm bookedDates={bookedDates}/>
                </div>
            </div>
        </Wrapper>
    )
}