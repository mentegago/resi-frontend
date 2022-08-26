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

    return (
        <div className="score-info">
            <img src={beatmap.thumbnail} />
            <div className="score-detail">
                <a href="#">{mapName}</a>
                <div className="score-tags">
                    <PillInfo backgroundColor='#F00'>
                        {score.accuracy}%
                    </PillInfo>
                    <PillInfo backgroundColor='#555'>
                        {score.score}
                    </PillInfo>
                </div>
            </div>
            <div className="score-beatmap">
                <div className="row">
                    <PillInfo backgroundColor={difficultyColor}>
                        {difficulty}
                    </PillInfo>
                    <PillInfo backgroundColor='#555'>
                        {characteristic}
                    </PillInfo>
                </div>
                <div className="row">
                    <PillInfo backgroundColor='#555'>
                        <a href={"https://beatsaver.com/maps/" + beatmap.bsrCode} target='_blank'>!bsr {beatmap.bsrCode}</a>
                    </PillInfo>
                    <PillInfo backgroundColor='rgb(11, 125, 61)'>
                        {beatmap.mapAuthor}
                    </PillInfo>
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
        
                .score-detail {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 4px;
                    flex-grow: 1;
                }
        
                .score-tags {
                    display: flex;
                    flex-direction: row;
                    gap: 4px;
                }
        
                .score-beatmap {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 6px;
                }
        
                .score-beatmap .row {
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
        `}</style>
        </div>
    )
}

export default ScoreInfo