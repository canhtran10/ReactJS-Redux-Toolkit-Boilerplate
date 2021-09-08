import * as React from 'react';
import {Redirect, Route, RouteProps} from "react-router-dom";

export function AdminRoute(props: RouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if(!isLoggedIn) {
    return <Redirect to={"/"} />
  }
  return <Route {...props} />
}