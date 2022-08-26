const PillInfo = (props) => {
    return (
        <div className="container" style={{backgroundColor: props.backgroundColor}}>
            {props.children}
            <style jsx>{`
                .container {
                    color: #FFF;
                    font-size: 0.8em;
                    padding: 2px 8px;
                    border-radius: 8px;
                }
            `}</style>
        </div>
    )
}

export default PillInfo