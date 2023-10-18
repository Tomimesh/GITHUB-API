import React from "react";
import styles from './App.module.css';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorBoundary}>
          <h2>Ooops!</h2>
          <p>Error Occurred</p>
          <p><i className={styles.repoItalics}>From Error Boundary</i></p>

        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
