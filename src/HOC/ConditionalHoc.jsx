function withCondition(WrappedComponent, conditionFn) {
    return function ConditionalComponent(props) {
      if (conditionFn(props)) {
        return <WrappedComponent {...props} />;
      }
      return null; // or render a fallback component
    };
  }
  
  export default withCondition;
  