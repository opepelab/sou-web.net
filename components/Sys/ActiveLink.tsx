// Qiitaの@TK-Cさんより Git Hub@remy氏
import { withRouter, NextRouter  } from 'next/router';
import React, { Children, ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  router: NextRouter;
  children: JSX.Element;
  activeClassName: string;
  href: string;
}

const ActiveLink: React.FC<Props> = ({ router, children, ...props }) => {
  const child = Children.only(children)


  let className: ReactNode = child;
  if (router.pathname == props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`;
  }

  return (
  <Link {...props}>{React.cloneElement(child, { className })}</Link>
  );
}

export default withRouter(ActiveLink);