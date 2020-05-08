import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const { push } = useHistory();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://node-api-sprint-challenge-bth.herokuapp.com/api/projects")
      .then((res) => {
        // console.log({ res });
        setProjects(res.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const viewDeets = () => {
    push(`/project/${projects.id}`);
  };

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <>
            <h3>{project.name}</h3>
            <button
              onClick={() => {
                push(`/project/${project.id}`);
              }}
            >
              View Details
            </button>
          </>
        );
      })}

      <button onClick={viewDeets}>View Details</button>
    </div>
  );
};

export default Main;
