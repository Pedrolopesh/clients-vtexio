class ValidationError extends Error {
    public errors: string[]

    constructor(errors: string[]) {
      super(errors.join('. '))
      this.errors = errors
    }
  }

export default ValidationError