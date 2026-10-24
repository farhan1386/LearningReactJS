import React, { Component } from 'react';

class GlobalErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasAppFault: false };
  }

  static getDerivedStateFromError() {
    return { hasAppFault: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Crash lifecycle intercepted:', error, errorInfo);
  }

  render() {
    if (this.state.hasAppFault) {
      return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', color: 'red' }}>
          <h3>Mainframe Subsystem Intercept Fault</h3>
          <p>The interface execution thread crashed. Safe execution halted.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default GlobalErrorBoundary;