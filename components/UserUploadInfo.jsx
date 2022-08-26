import ScoreInfo from "./ScoreInfo"

const UserUploadInfo = (props) => {
  const user = props.user;
  const beatmap = props.beatmap;
  const score = props.score;

  return (
    <div className="container">
      <div className="user-info">
        <img src={user.profilePicture} />
        <a href="#" className="name">{user.displayName}</a>
        <span className="description">mengunggah skor baru</span>
      </div>
      <ScoreInfo beatmap={beatmap} score={score} />

      <style jsx>{`
        .container {
          background-color: #262626;
          border-radius: 12px;
          padding: 12px 18px 14px 18px;
          
          margin-bottom: 14px;
        }

        .user-info {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .user-info img {
          height: 28px;
          width: 28px;
          border-radius: 28px;
          margin-right: 10px;
        }

        a {
          margin-right: 4px;
          text-decoration: none;
          color: #FFF;
        }

        a:hover {
          text-decoration: underline;
        }

        span {
          margin-right: 4px;
          color: #999;
        }
      `}</style>
    </div>
  )
}

export default UserUploadInfo