import Image from "./images/aboutImage.png"

const AboutImageDisplay = () => {
    return (
        <div
        style={{
            display:"flex",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            padding:"80px"
        }}
        >
        <img src={Image} alt={Image}height={400} width={450} />
        </div>
    );
};

export default AboutImageDisplay;