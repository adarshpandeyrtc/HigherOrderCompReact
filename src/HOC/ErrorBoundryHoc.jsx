import React from "react";

function withErrorBoundary(WrappedComponent) {
  return class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    componentDidCatch(error, info) {
      console.error("Error caught by ErrorBoundary:", error, info);
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withErrorBoundary;
