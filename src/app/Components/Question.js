import React from 'react'
import Question from '../Components/Question'

const Question = () => {
    const [responses, setResponses] = useState({});
    const [score, setScore] = useState(0);
    const handleOptionChange = (questionIndex, option) => {
        setResponses(prevResponses => ({
          ...prevResponses,
          [questionIndex]: option
        }));
      };
    
      const handleSubmitQuiz = () => {
        let newScore = 0;
        questions.forEach((question, index) => {
          if (responses[index] === question.correctAnswer) {
            newScore++;
          }
        });
        setScore(newScore);
      };
    
      return (
        <div>
          <h1>Module 1 Quiz</h1>
          <div>
            {Question.map((question, index) => (
              <div key={index}>
                <h3>{question.question}</h3>
                <ul>
                  {question.options.map((option, optionIndex) => (
                    <li key={optionIndex}>
                      <label>
                        <input
                          type="radio"
                          name={`question${index}`}
                          value={option}
                          checked={responses[index] === option}
                          onChange={() => handleOptionChange(index, option)}
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <button onClick={handleSubmitQuiz}>Submit Quiz</button>
          <p>Score: {score}/{questions.length}</p>
        </div>
      );
    };
    
    export default Question;