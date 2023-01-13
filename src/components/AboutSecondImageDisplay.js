import ImageTwo from "./images/aboutImageSecond.png"

const AboutSecondImageDisplay = () => {
    return (
        <div
        style={{
            display:"flex",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            padding:"80px"
        }}
        >
        <img src={ImageTwo} alt={ImageTwo}height={400} width={450} />
        </div>
    );
};

export default AboutSecondImageDisplay;