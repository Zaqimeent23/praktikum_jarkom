const Button = (pros) => {
    return (
        <button
        style ={{
            padding: '5px 8px',
            backgroundColor: '#a9a9a9',
            border: 'none',
            ...props.style
        }}
        >
        {props.children}
        
        </button>
    )
}
export default Button
