import withErrorBoundary from '../HOC/ErrorBoundryHoc';

function BuggyComponent() {
    throw new Error("I crashed!");
    return <div>This will not render</div>;
  }
  
  export default withErrorBoundary(BuggyComponent);
  