import {
  Children,
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "./cn";

type AnyProps = HTMLAttributes<HTMLElement> & {
  className?: string;
  children?: ReactNode;
};

/** Merge props onto a single child element (asChild pattern). */
export function Slot({ children, ...props }: AnyProps) {
  const child = Children.only(children);

  if (!isValidElement(child)) {
    return null;
  }

  const childProps = child.props as AnyProps;

  return cloneElement(child as ReactElement<AnyProps>, {
    ...props,
    ...childProps,
    className: cn(props.className, childProps.className),
    style: {
      ...(props as { style?: React.CSSProperties }).style,
      ...(childProps as { style?: React.CSSProperties }).style,
    },
  });
}
