import React from "react";

export interface PillProps {
  title: string;
}

export interface ButtonProps {
   title: string;
  styles?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}
