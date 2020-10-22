import JSONData from "../data/resourcesData.json";
import React from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import resourcesStyles from "../styles/resources.module.css"



function EmbeddedField(props) {
    const { videoID, width, height } = props;
    return (
        <ResponsiveEmbed
            className={resourcesStyles.embeddedContainer}
            style={{
                width: width ? width : "560",
                height: height ? height : "315",
            }}
            aspectRatio="16by9"
        >
            <iframe
                title={videoID}
                width={width ? width : "560"}
                height={height ? height : "315"}
                src={`https://www.youtube.com/embed/${videoID}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </ResponsiveEmbed>
    );
}


function stripVideoID(passed) {
    return passed.split("https://www.youtube.com/watch?v=")[1];
}

// feed in Youtube Video Array

function Curated(props) {
    return (
        <div>
            <div className={resourcesStyles.contentRow}>
                {JSONData.other.map((youtubeVideo, idx) => (
                    <EmbeddedField
                        key={`${idx}-${youtubeVideo}`}
                        height={300}
                        width={500}
                        videoID={stripVideoID(youtubeVideo)}
                    />
                ))}
            </div>
        </div>
    );
}


export default Curated;
