import mountain from "../Assets/f2.jpg"

const Images = () => {
    return (
        <div>
            <img src="/f1.jpg" />
            <img src={mountain} />
        </div>
    );
};

export default Images;