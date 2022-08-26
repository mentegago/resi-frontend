const Layout = (props) => {
    return (
        <div className="page-layout">
            {props.children}
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0px 0px 64px 0px;
                    background-color: #171717;
                    color: #FFFFFF;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 1em;
                }
            
                .global-container {
                    max-width: 1000px;
                    width: 100%;
                    margin-left: auto;
                    margin-right: auto;
                }

                h1 {
                    font-family: 'Prompt', sans-serif;
                    font-weight: 700;
                    font-size: 1.5em;
                }

                h2 {
                    font-family: 'Prompt', sans-serif;
                    font-weight: 400;
                    font-size: 1.1em;
                    margin: 0px;
                }
            `}
            </style>
        </div>
    );
}

export default Layout;