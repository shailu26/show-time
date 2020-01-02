import React  from 'react';
import { withRouter } from 'react-router';
import * as Cookie from "js-cookie";
export default function requireAuth(Component) {
class AuthenticatedComponent extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   auth: Cookie.get('auth')
  }
 }
 componentDidMount() {
  this.checkAuth();
 }
 checkAuth() {
  if ( ! Cookie.get('auth')) {
   this.props.history.push(`/login`);
  }
 }
render() {
  return Cookie.get('auth')
   ? <Component { ...this.props } />
   : null;
  }
 }
 return  withRouter(AuthenticatedComponent)
}