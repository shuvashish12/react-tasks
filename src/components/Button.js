import '../index.css'
export default function Button({title, color, onClick, count}){

    return(
        <>
        <button 
        className="btn" 
        style={{backgroundColor: color}}
        onClick={onClick}
        >
            {title} {count}</button>
        </>
    )

}