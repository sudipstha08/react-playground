function withErrorHandling(Component: React.ComponentType) {
  return function WithErrorHandling({
    error,
    ...props
  }: {
    error: { message: string }
  }) {
    if (error) {
      return <div>Error: {error.message}</div>
    }
    return <Component {...props} />
  }
}

export default withErrorHandling
