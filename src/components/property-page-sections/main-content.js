import React from "react"
import styled from "@emotion/styled"
import { StructuredText } from 'react-datocms';
import { GatsbyImage, getImage} from "gatsby-plugin-image"

const Wrapper = styled.div`
margin-top: 50px;
// min-height: 100vh;
width: 100%;
.main {
    display: flex;
    align-items: center;;
    width: fit-content;
    // max-width: 980px;
    margin: auto; 
}
.content-left {
    width: 560px;
    height: fit-content;
    padding: 20px;
    margin-right: 80px;
    // border: solid 1px rgba(14, 30, 37, 0.12);
    // border-right: solid 1px rgba(14, 30, 37, 0.12);
    // box-shadow: 10px 0 5px -4px rgba(14, 30, 37, 0.12);
    // box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    h2 {
        font-size: 30px;
    }
}
.content-right {
    color: white;
    width: 440px!important;
    box-sizing: border-box;
    background-color: #403d3d;
    // width: 40%;
    border: solid 1px rgba(14, 30, 37, 0.12);
    // box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    .host-text {
        padding: 30px;
    }
}
@media(max-width: 1000px){
    .main {
        flex-direction: column;
        .content-left {
            width: 90vw;
            padding: 0;
            margin: auto;
        }
        .content-right {
            margin: 100px 0 100px 5vw;
            width: 90vw;
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
                    <GatsbyImage image={getImage(hostData.image.gatsbyImageData)} alt={hostData.image.alt} placeholder="blur"/>
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