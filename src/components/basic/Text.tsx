import React, { HTMLAttributes } from "react";

import styled, { css, DefaultTheme } from "styled-components";
import { getColor } from "../../theme/theme-utils";

type TextOverflow = "ellipsis" | "break-word" ;

//@ts-ignore
interface TextProps extends HTMLAttributes<HTMLDivElement> {
  /** Text color */
  color?: string | keyof DefaultTheme["palette"];
  /** Text size */
  size?: keyof DefaultTheme["sizes"]["font"];
  /** Text weight */
  weight?: keyof DefaultTheme["fonts"]["weight"];
  /** Overflow handling */
  overflow?: TextOverflow;
  /** Disabled status */
  disabled?: boolean;
  /** Content of the text */
  children?: React.ReactNode;
}

const Comp = styled.div<{
  disabled: boolean;
  size: keyof DefaultTheme["sizes"]["font"];
  weight: keyof DefaultTheme["fonts"]["weight"];
  overflow: string;
}>`
  color: ${({ theme, color, disabled }): string =>
    getColor(`${color}.${disabled ? "disabled" : "regular"}`, theme)};
  font-family: ${({ theme }): string => theme.fonts.default};
  font-size: ${({ theme, size }): string => theme.sizes.font[size]};
  font-weight: ${({ theme, weight }): number => theme.fonts.weight[weight]};
  margin: 0;
  max-width: 100%;
  ${({ overflow }): any =>
    overflow === "ellipsis"
      ? css`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `
      : css`
          overflow-wrap: break-word;
          word-wrap: break-word;
          ms-word-break: break-all;
        `};
`;

const Text = React.forwardRef<HTMLDivElement, TextProps>(function TextFn(
  {
    children,
    color = "text",
    size = "medium",
    weight = "regular",
    overflow = "ellipsis",
    disabled = false,
    ...rest
  },
  ref
) {
  return (
    <Comp
      ref={ref}
      color={color}
      size={size}
      weight={weight}
      overflow={overflow}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Comp>
  );
});

export { Text, TextProps };
