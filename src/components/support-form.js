import React, {useRef, useEffect, useState} from "react"
import { navigate } from "gatsby";
import styled from "@emotion/styled"
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";


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
form {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: auto;
    box-sizing: border-box;
    width: 920px;
    padding: 40px 60px;
    height: 600px;
    background-color: white;
    border: 5px solid #74815b;
    // color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    label, input, textarea, button {
        // margin: 0 20px;
        // margin-left: 20px;
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
        margin-top: 20px;
        padding: 20px;
        // background-color: grey;
        background-color: #535d41;
        color: white;
        border: solid 1px grey;
        font-size: 14px;
        font-weight: 600;
        transition: .3s;
        :hover {
            cursor: pointer;
            background-color: #74815b;
        }
    }
    option:hover {
        cursor: pointer;
    }
    h2 {
        margin-top: 0;
        font-size: 40px;
        font-weight: 700;
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
@media(max-width:860px){
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
`



export default function ContactElectrical(){

    const reRef = useRef();
    const [serverState, setServerState] = useState({formSent: false});



    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()


      async function onSubmit(data){
        // const reRef = useRef<>();
        console.log(data)
        const token = await reRef.current.executeAsync();
        reRef.current.reset();

        fetch(`/api/postmark-support`, {
          method: `POST`,
          body: JSON.stringify({
            name: data.Name,
            email: data.Email,
            phone: data.Phone,
            message: data.Message,
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
          .then(navigate("/form-success#top"))
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
                    <h2>Contact Form</h2>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text" 
                        name="name" 
                        required  
                        {...register("Name", { required: true, maxLength: 100 })} 
                    />
                    <label htmlFor="email">Contact Email:</label>
                    <input
                        id="email"
                        type="email" 
                        name="email" 
                        required  
                        {...register("Email", { required: true, maxLength: 100 })} 
                    />
                    <label htmlFor="message">Phone:</label>
                    <input
                        id="phone"
                        type="text" 
                        name="phone" 
                        required  
                        {...register("Phone", { required: true, maxLength: 100 })} 
                    />
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        type="text-area" 
                        name="message" 
                        required  
                        {...register("Message", { required: true, maxLength: 100 })} 
                    />

                    <button
                        type="submit" 
                        class="g-recaptcha button-style"
                        data-sitekey="site_key"
                        data-callback='onSubmit'
                        data-action='submit'
                    >
                    SEND MESSAGE</button>
                </form>
            </FormDiv>
  )
}