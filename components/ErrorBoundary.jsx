"use client";
import React, { Component } from 'react';

// Simple error boundary component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("React error:", error);
  }

  render() {
    if (this.state.hasError) {
      // Display fallback UI
      return (
        <div className="p-5 border border-red-300 rounded bg-red-50">
          <h2 className="text-lg font-bold text-red-800">Something went wrong</h2>
          <p className="text-red-600 mb-3">Please try refreshing the page</p>
          {process.env.NODE_ENV !== 'production' && (
            <pre className="bg-white p-2 rounded text-xs overflow-auto max-h-40">
              {this.state.error?.toString()}
            </pre>
          )}
          <button
            className="mt-3 px-3 py-1 bg-red-600 text-white rounded"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
