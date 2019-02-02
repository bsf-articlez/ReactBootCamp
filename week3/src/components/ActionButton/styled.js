import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEraser } from "@fortawesome/free-solid-svg-icons";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditButton = () => <FontAwesomeIcon icon={faEdit} />;

const RemoveButton = () => <FontAwesomeIcon icon={faEraser} />;

export { ButtonWrapper, EditButton, RemoveButton };
