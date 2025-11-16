import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError: false };
    }
    static getDerivedStateFromError(error){
        console.log('dervide state error');
        return {hasError:true};
    }
    componentDidCatch(error,info){
        console.log('Error caught by ErrorBoundary:',error);
    }
    render(){
        if(this.state.hasError){
            return <h3 style={{color: 'red' }}>Something went wrong</h3>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;