import { useCallback } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import { PropsComponentButton } from '@types';
import { StyledButtonBase, StyledButtonBaseContent, StyledButtonBaseContentInner } from '@components/atomic/Button/ButtonStyles';

export const Button: NextPage<PropsComponentButton> = ({ children, ...props }) => {
  const { type, onClick, link } = props;

  // handle button click if onClick function is passed
  const handleOnClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  // create button content
  // use <Link> if link prop is passed
  // otherwise use content as it is
  const getButtonContent = () => {
    if (link !== undefined) {
      return (
        <StyledButtonBaseContent>
          <Link href={link}>
            <a target="_blank">
              <StyledButtonBaseContentInner>{children}</StyledButtonBaseContentInner>
            </a>
          </Link>
        </StyledButtonBaseContent>
      );
    } else {
      return (
        <StyledButtonBaseContent>
          <StyledButtonBaseContentInner>{children}</StyledButtonBaseContentInner>
        </StyledButtonBaseContent>
      );
    }
  };

  // export button component with props
  const buttonComponent = () => {
    switch (type) {
      case `secondary`:
        return (
          <StyledButtonBase type="secondary" onClick={handleOnClick}>
            {getButtonContent()}
          </StyledButtonBase>
        );
      default:
        return (
          <StyledButtonBase type="primary" onClick={handleOnClick}>
            {getButtonContent()}
          </StyledButtonBase>
        );
    }
  };

  return buttonComponent();
};
