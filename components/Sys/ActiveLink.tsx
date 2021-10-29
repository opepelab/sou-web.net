//Git Hub@remy氏
import { withRouter, NextRouter  } from 'next/router';
import React, { ReactNode, ReactElement } from 'react';
import Link from 'next/link';

type Props = {
  router: NextRouter;
  children: ReactElement;
  activeClassName: string;
  href: string;
}

const ActiveLink = ({ router, children, ...props }: Props) => {
  const child = children;
  
  let className: ReactNode = child.props.className;
  if (router.pathname == props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`;
  }

  return (
  <Link {...props}>{React.cloneElement(child, { className })}</Link>
  );
}

export default withRouter(ActiveLink);