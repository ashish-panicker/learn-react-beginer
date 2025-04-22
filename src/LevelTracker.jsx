import React from 'react'

function LevelTracker() {
    const [level, setLevel] = React.useState(1)
    const [score, setScore] = React.useState(0)
    const [randomScore, setRandomScore] = React.useState(0)

    const getRandomeScore = () => Math.floor(Math.random() * 50) + 1

    function updateScore() {
        const randomScore = getRandomeScore()
        setScore(function (prevState) {
            setRandomScore(randomScore)
            const totalScore = randomScore + prevState
            const levelUps = Math.floor(totalScore / 100)
            const remainingScore = totalScore % 100
            if (levelUps > 0) {
                setLevel(level + levelUps)
            }
            return remainingScore
        })
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Level: {level}</h2>
            <h3>Score: {score}</h3>
            <p>You gained {randomScore} points</p>
            <button onClick={updateScore}>Gain Points</button>
        </div>
    )
}

export default LevelTracker