import ValidationError from '../../utils/validationError'

interface Args {
  id: string
}

export const getUniqueCoupon = async (
  _: any,
  { id }: Args,
  { clients: { manager: managerClient } }: Context
) => {
  const errors: string[] = []

  if (!id) {
    errors.push('Field id is required')
  }

  if (errors.length > 0) {
    throw new ValidationError(errors)
  }

  try {
    return managerClient.getUnique(id)
  } catch (error) {
    console.info(error)

    return false
  }
}
