import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCards from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCards>
        <CommentDetail
          author="sam"
          timeAgo="Today at 6:00PM"
          text="Nice blog post!"
          />
      </ApprovalCards>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
