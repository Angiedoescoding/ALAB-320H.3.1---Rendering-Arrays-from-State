import Score from "./Score";

export default function Learner () {
    const scores = [];              // Initializing an empty arraye of scores

    learners.scores.forEach((score, index) => {         // Itterating thoruth the each score of the learners via forEach
        scores.push(
            <Score key={index} date={score.date} score={score.score} />         // Creating a Score for each score and assignint it a unique key prop and passing the date and score props
        );
    });

    return (                // Rendering the learner's info: name, bia nad the scores (the list of all scores)
        <div>
            <h2>{learner.name}</h2>
            <p>{learner.bio}</p>
            <h3>Scores:</h3>
            {score}
        </div>
    );
};
