const BoxContainer = (props) => {
    return ( 
        <div className="container">
            {props.children}
            <style jsx>{`
                .container {
                    background-color: #262626;
                    border-radius: 16px;
                    padding: 16px 24px;
                }
            `}</style>
        </div>
    )
}

export default BoxContainer