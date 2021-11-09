import { withRouter, NextRouter  } from 'next/router';
import React, { ReactElement } from 'react';
import Link from 'next/link';

type Props = {
  router: NextRouter;
  children: ReactElement;
  href: string;
  activeClassName: string;
}



const ActiveLink = ({ router, children, ...props }: Props) => {

  let className: string = children.props.className;
  if (router.asPath === props.href) {
    className = `${className} ${props.activeClassName}`;
  }

  return (
    <Link {...props}>{React.cloneElement(children, { className })}</Link>
  );
}

export default withRouter(ActiveLink);