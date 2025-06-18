import "./App.css";

type CardProps = {
    title: string;
    description: string;
};

function Card({ title, description }: CardProps) {
    return (
        <div className="Card">
            <h2>
                {title}
            </h2>
            <p>{description}</p>
            <style>
                {`
                    .Card h2{
                    text-align: center;}
                    .Card p{
                        text-align: justify;}
                    .Card{
                        display:flex;
                        flex: 2;
                        flex-direction: column;
                        margin: 20px;
                    }
                `}
            </style>
        </div>
    )

}

export default Card;