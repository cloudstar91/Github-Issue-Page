import React, { Component } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Labels from "../issues/Labels";

const ReactMarkdown = require("react-markdown");

export default class IssueOverview extends Component {
  render() {
    let issue = this.props.issue;
    console.log(issue);
    return (
      <div>
        <a
          href={`${this.props.owner}/${this.props.repo}/issues/` + issue.number}
        >
          <h2 className="issueTitle">{issue.title}</h2>{" "}
        </a>

        <p>
          <strong style={{ fontStyle: "italic" }}>#{issue.number}</strong>{" "}
          <p>
            {issue.state}ed <Moment toNow>{issue.created_at}</Moment> by{" "}
            <a href={issue.user.html_url}>@{issue.user.login} </a>
          </p>
        </p>
        <p>
          <Labels labels={issue.labels} />
        </p>
      </div>
    );
  }
}
