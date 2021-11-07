//Git Hub@remy氏 (EN)
//Qiita @TK-C (JA)

import { withRouter, NextRouter  } from 'next/router';
import React, { ReactElement } from 'react';
import Link from 'next/link';

type Props = {
  router: NextRouter;
  children: ReactElement;
  href: string;
  activeClassName: string;
  [x: string]: any;
}

const ActiveLink = ({ router, children, ...props }: Props) => {
  
  let className: string = children.props.className;
  if (router.pathname === props.href) {
    className = `${className} ${props.activeClassName}`;
  }

  return (
    <Link {...props}>{React.cloneElement(children, { className })}</Link>
  );
}

export default withRouter(ActiveLink);