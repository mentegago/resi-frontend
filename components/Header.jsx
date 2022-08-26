import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <div className="global-container">
                <Link href='/'><a><h1><span className="title-red">Rekor</span>Saber</h1></a></Link>
            </div>
            <style jsx>{`
                header {
                    background-color: #0D0D0D;
                    height: 60px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    border-bottom: 3px solid #E00;
                }

                h1 {
                    font-weight: 400;
                }

                .title-red {
                    color: #F00;
                }

                a {
                    text-decoration: none;
                    color: #FFF;
                }
            `}</style>
        </header>
    )
}

export default Header