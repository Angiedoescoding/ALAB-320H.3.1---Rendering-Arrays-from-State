import Score from "./Score";

export default function Learner () {
    const scores = [];

    learners.scores.forEach((score, index) => {
        scores.push(
            <Score key={index} date={score.date} score={score.score} />
        );
    });

    return (
        <div>
            <h2>{learner.name}</h2>
            <p>{learner.bio}</p>
            <h3>Scores:</h3>
            {score}
        </div>
    );
};
