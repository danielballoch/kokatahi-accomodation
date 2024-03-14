import React from "react"
import styled from "@emotion/styled"
import { StructuredText } from 'react-datocms';
import { GatsbyImage, getImage} from "gatsby-plugin-image"

const Wrapper = styled.div`
padding: 50px 0;
// min-height: 100vh;
width: 100%;
background-color: white;

.main {
    display: flex;
    flex-direction: column;
    align-items: center;;
    width: fit-content;
    max-width: 980px;
    margin: auto; 
}
.content-left {
    border-radius: 10px 10px 0 0;
    border: solid 1px rgba(14, 30, 37, 0.12);
    // width: 560px;
    height: fit-content;
    padding: 20px 40px;
    // margin-right: 80px;
    // border: solid 1px rgba(14, 30, 37, 0.12);
    // border-right: solid 1px rgba(14, 30, 37, 0.12);
    // box-shadow: 10px 0 5px -4px rgba(14, 30, 37, 0.12);
    // box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    h2 {
        font-size: 30px;
    }
}
.content-right {
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: black;
    box-sizing: border-box;
    // background-color: #FAF9F6;
    border: solid 1px rgba(14, 30, 37, 0.12);
    .img {
        border-radius: 0 0 0 10px;
        height: 300px;
        width: 40%;
    }
    .host-text {
        box-sizing: border-box;
        width: 60%;
        padding: 20px 40px;
    }
}
@media(max-width: 1000px){
    .main {
        flex-direction: column;
        .content-left {
            box-sizing: border-box;
            width: 90vw;
            // padding: 0;
            margin: auto;
        }
        .content-right {
            // margin: 100px 0 100px 5vw;
            width: 90vw;
        }
    }
}
@media(max-width: 600px){
    .main {
        .content-right {
            display: flex;
            flex-direction: column!important;
            .img, .host-text {
                width: 100%;
                border-radius: 0;
            }
        }
    }
}
`




export default function MainContent({content, hostData}){
    return(
        <Wrapper>
            <div className="main">
                <div className="content-left">
                    <StructuredText
                    data={content}
                    renderInlineRecord={({ record }) => {
                        switch (record.__typename) {
                        case 'DatoCmsArticle':
                            return <a href={`/articles/${record.slug}`}>{record.title}</a>;
                        default:
                            return null;
                        }
                    }}
                    />
                </div>
                <div className="content-right">
                    <GatsbyImage className="img" image={getImage(hostData.image.gatsbyImageData)} alt={hostData.image.alt} placeholder="blur"/>
                    <div className="host-text">
                        <StructuredText
                        data={hostData.content.value}
                        renderInlineRecord={({ record }) => {
                            switch (record.__typename) {
                            case 'DatoCmsArticle':
                                return <a href={`/articles/${record.slug}`}>{record.title}</a>;
                            default:
                                return null;
                            }
                        }}
                        />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}