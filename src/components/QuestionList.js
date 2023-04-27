import React, { useEffect, useState } from "react";

function QuestionList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {data.map((dat) => {
          return (
            <>
              <p>{dat.prompt}</p>
              {dat.answers.map((answer, index) => {
                let num = index + 1;
                return (
                  <>
                    <li key={index}>
                      {num}: {answer}
                    </li>
                  </>
                );
              })}
            </>
          );
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
