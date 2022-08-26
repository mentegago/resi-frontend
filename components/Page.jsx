import Header from "./Header"

const Page = (props) => {
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
            <style jsx>{`
                main {
                    margin-top: 85px;
                }
            `}</style>
        </div>
    )
}

export default Page