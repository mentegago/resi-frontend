import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import UserUploadInfo from '../components/UserUploadInfo'

export default function Home() {
  const [scores, setScores] = useState([])

  useEffect(() => {
    fetch(`${process.env.API_BASE_URL}/api/scores`)
      .then(response => response.json())
      .then(fetchedScores => {
        setScores(fetchedScores)
      })
      .catch(e => {
        alert(e)
      })
  }, [])

  return (
    <div>
      <Head>
        <title>Rekor Saber Indonesia</title>
      </Head>
      <Header />
      <div className="global-container container">
        <h1>Skor Terbaru</h1>
        {
          scores.map(score =>
            <UserUploadInfo {...score} />
          )
        }
      </div>
      <style jsx>{`
        .container {
          margin-top: 24px;
        }
      `}</style>
    </div>
  )
}
