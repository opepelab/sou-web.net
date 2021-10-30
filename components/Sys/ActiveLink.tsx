//Git Hub@remy氏 (EN)
//Qiita @TK-C (JA)

import { withRouter, NextRouter  } from 'next/router';
import React, { Children, ReactElement } from 'react';
import Link from 'next/link';

type Props = {
  router: NextRouter;
  children: ReactElement;
  href: string;
  activeClassName: string;
}

const ActiveLink = ({ router, children, ...props }: Props) => {
  const child = Children.only(children);
  
  let className: string = child.props.className;
  if (router.pathname == props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`;
  }

  return (
  <Link {...props}>{React.cloneElement(child, { className })}</Link>
  );
}

export default withRouter(ActiveLink);