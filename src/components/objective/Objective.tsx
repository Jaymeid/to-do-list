import {
  CircularSelectBox,
  StyledFlexContainer,
  ToDoText,
} from "./Objective.styled";
import { useState } from "react";

interface ObjectiveProps {
  title: string;
}

export default function Objective({ title }: ObjectiveProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  return <StyledFlexContainer></StyledFlexContainer>;
}
