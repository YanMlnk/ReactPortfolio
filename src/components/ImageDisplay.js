import picture from "./images/picture.png"

const ImageDisplay = () => {
    return (
        <div
        style={{
            display:"flex",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            padding:"80px"
        }}
        >
        <img src={picture} alt={picture}height={400} width={450} />
        </div>
    );
};

export default ImageDisplay;