export default function Note(props) {
    return (
        <div className="note" key={props.id}>
            <p>{props.tittle}</p>
            <p>{props.description}</p>
            <p>{props.time}</p>
            <p>{props.day} </p>
        </div>
    )
}
