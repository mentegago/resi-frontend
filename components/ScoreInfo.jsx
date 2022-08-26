import PillInfo from './PillInfo'

const ScoreInfo = (props) => {
    const beatmap = props.beatmap;
    const score = props.score;

    const mapName = beatmap.name + (beatmap.subName.length > 0 ? ` (${beatmap.subName})` : "")

    const difficulty = (() => {
        switch (beatmap.difficulty) {
            case 1:
                return "Easy"
            case 3:
                return "Normal"
            case 5:
                return "Hard"
            case 7:
                return "Expert"
            case 9:
                return "Expert+"
        }
    })()

    const difficultyColor = (() => {
        switch (beatmap.difficulty) {
            case 1:
                return "#3bb06f"
            case 3:
                return "#58b1f7"
            case 5:
                return "#ff6145"
            case 7:
                return "#bf2b42"
            case 9:
                return "#8d45db"
        }
    })()

    const characteristic = (() => {
        switch (beatmap.characteristic) {
            case 0:
                return "Standard"
            case 1:
                return "OneSaber"
            case 2:
                return "NoArrows"
            case 3:
                return "360Degree"
            case 4:
                return "90Degree"
            case 5:
                return "Lawless"
            case 6:
                return "Lightshow"
            default:
                return "Unknown"
        }
    })()

    const accuracy = score.accuracy.toFixed(2)

    return (
        <div className="score-info">
            <img src={beatmap.thumbnail} />
            <div className="container">
                <div className="song-detail">
                    <div className="song-map-name">
                        <a href={"https://beatsaver.com/maps/" + beatmap.bsrCode} target='_blank'>{mapName}</a> <span className="song-author">by {beatmap.author}</span>
                    </div>
                    <span className="song-map-author">Mapped by {beatmap.mapAuthor}</span>
                </div>
                <div className="score-detail">
                    <div className="row">
                        <PillInfo backgroundColor='#070'>
                            {accuracy}%
                        </PillInfo>
                        <PillInfo backgroundColor='#555'>
                            {score.score}
                        </PillInfo>
                        {
                            score.modifiers.length > 0 ? score
                                .modifiers
                                .split(',')
                                .map(mod =>
                                    <PillInfo backgroundColor='#555'>
                                        {mod}
                                    </PillInfo>
                                ) : null
                        }
                    </div>
                    <div className="row">
                        <PillInfo backgroundColor={difficultyColor}>
                            {difficulty}
                        </PillInfo>
                        <PillInfo backgroundColor='#555'>
                            {characteristic}
                        </PillInfo>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .score-info {
                    background-color: #404040;
                    border-radius: 8px;
                    padding: 8px 12px;
                    margin-top: 12px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
        
                .score-info img {
                    width: 50px;
                    height: 50px;
                    border-radius: 8px;
                    margin-right: 12px;
                }

                .score-info .container {
                    display: flex;
                    flex-direction: row;
                    flex-grow: 1;
                }
        
                .song-detail {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 4px;
                    flex-grow: 1;
                }

                .song-map-name a, .song-map-name span {
                    display: inline-block;
                }

                .song-author {
                    font-size: .8em;
                    color: #AAA
                }

                .song-map-author {
                    font-size: .8em;
                }
        
                .score-tags {
                    display: flex;
                    flex-direction: row;
                    gap: 4px;
                }
        
                .score-detail {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 6px;
                }
        
                .score-detail .row {
                    display: flex;
                    flex-direction: row;
                    gap: 4px;
                }
        
                a {
                    text-decoration: none;
                    color: #FFF;
                }
        
                a:hover {
                    text-decoration: underline;
                }

                @media screen and (max-width: 640px) {
                    .score-info .container {
                        flex-direction: column;
                        overflow-x: auto;
                    }

                    .score-detail {
                        margin-top: 6px;
                        flex-direction: row;
                        overflow-x: auto;
                        gap: 6px;
                        width: auto;
                    }
                }
        `}</style>
        </div>
    )
}

export default ScoreInfo