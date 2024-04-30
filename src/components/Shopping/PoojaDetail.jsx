import React, { useEffect } from "react";
import Ques from "./Ques";
import "./PoojaDetail.scss";
import { useParams } from "react-router-dom";
import Poojadat from "./Poojadata";

export default function PoojaDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { poojaName } = useParams();
    const poojaData = Poojadat[poojaName];
    const questions = [
        { question: "What are the Benefits?", answer: poojaData.benefits },
        { question: "How will it happen?", answer: poojaData.procedure },
        { question: `About ${poojaData.about_deity.name}`, answer: poojaData.about_deity.attributes },
        { question: "What should you do after pooja to get maximum benefits?", answer: poojaData.max_benefits_actions },
        { question: "Why book with divine connection?", answer: poojaData.why_book_with_divine_connection.reasons, outcomes: poojaData.why_book_with_divine_connection.outcomes },
      ];
  return (
    <div className="root-pooja">
    <div className="FormPuja">
      <div className="FormPuja__Heading">
        <div className="FormPuja__Heading__Description">
          <h1 className="pooja-name">{poojaName}</h1>
          <p className="pooja-desc">
            {poojaData.description}
          </p>
        </div>
        <div className="FormPuja__Heading__TicketInfo">
          <h2>₹ 500</h2>
          <button className="final-book-now-pooja">Book Now</button>
        </div>
      </div>
      {questions.map((ques, index) => (
      <div key={index}>
        <hr className="pooja-line-hr"/>
        <Ques question={ques.question} answer={ques.answer} outcomes={ques.outcomes} />
      </div>
      ))}
      
    </div>
    </div>
  );
}
