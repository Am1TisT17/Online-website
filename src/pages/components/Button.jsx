export default function Button({ children }) {
    function handleClick() {
        console.log("Button clicked");
    }

    return (
        <button className="button" onClick={handleClick}>{children}</button>
    )
}