import JSONData from "../data/resourcesData.json";
import React from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";


function EmbeddedField(props) {
    const { videoID, width, height } = props;
    return (
        <ResponsiveEmbed
            className={css(embeddedStyles.embeddedContainer)}
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
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </ResponsiveEmbed>
    );
}

const embeddedStyles = StyleSheet.create({
    embeddedContainer: {
        marginRight: "2vw",
        flex: "0 0 auto",
    },
});

function stripVideoID(passed) {
    return passed.split("https://www.youtube.com/watch?v=")[1];
}

// feed in Youtube Video Array

function Curated(props) {
    return (
        <div>
            <div className={css(styles.contentRow)}>
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

const styles = StyleSheet.create({
    container: {
        marginTop: "1vh",
        marginBottom: "1vh",
    },
    contentRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
        overflowY: "hidden",
        overflowX: "auto",
        scrollbarWidth: "none",
        "::-webkit-scrollbar": {
            display: "none",
        },
    },
});

export default Curated;