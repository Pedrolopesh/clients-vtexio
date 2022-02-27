import type { ManagerInput } from '../../typings/managerInput'

interface Args {
  id: string
  couponInput: ManagerInput
}

export const updateHost = async (
  _: any,
  { id, couponInput }: Args,
  { clients: { manager: managerClient } }: Context
) => {
  try {
    return managerClient.update(id, couponInput)
  } catch (error) {
    console.info(error)

    return false
  }
}
