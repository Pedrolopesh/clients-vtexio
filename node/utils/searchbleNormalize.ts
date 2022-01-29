import type { Searchble } from '../typings/searchble'

export default (args: Searchble): Searchble => {
  args.page = args.page ?? 1
  args.pageSize = args.pageSize ?? 100
  args.where = args.where
    ? `(deleted<>true) AND ${args.where}`
    : 'deleted<>true'

  return args
}
