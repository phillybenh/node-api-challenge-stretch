import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";



const ProjectDeets = (props) => {
  // console.log({ props });
  // console.log("id", props.match.params.id)
  const { push } = useHistory();
  const id = props.match.params.id;
  const [project, setProject] = useState({});
  const [comp, setComp] = useState("");
  const [actions, setActions] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://node-api-sprint-challenge-bth.herokuapp.com/api/projects/${id}`
      )
      .then((res) => {
        console.log({ res });
        setProject(res.data);
        setActions(res.data.actions);
        if (res.data.completed === true) {
          setComp("YES");
        } else {
          setComp("NO");
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  console.log({ project });
  return (
    <div>
      <h2>Project Details:</h2>
      <ul>
        <li>Project Name: {project.name}</li>
        <li>Description: {project.description}</li>
        <li> Completed?: {comp}</li>
        <li>Actions:</li>
        <ul>
          {actions.map((action) => {
            return <li>{action.description}</li>;
          })}
        </ul>
      </ul>

      <button onClick={() => push("/main")}>Main</button>
    </div>
  );
};

export default ProjectDeets;
