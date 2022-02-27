import type { Searchble } from '../../typings/searchble'
import searchbleNormalize from '../../utils/searchbleNormalize'

export const getAllCoupon = async (
  _: any,
  args: Searchble,
  { clients: { manager: managerClient } }: Context
) => {
  const { page, pageSize, where } = searchbleNormalize(args)

  return managerClient.getAll(page, pageSize, where)
}
