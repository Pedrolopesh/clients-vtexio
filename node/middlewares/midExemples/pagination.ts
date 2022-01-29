import parser from 'co-body'

export async function middleGetPagination(
  ctx: Context,
  next: () => Promise<any>
) {
  const {
    clients: { manager: managerClient },
  } = ctx

  const data = await parser(ctx.req)
  const { id } = ctx.vtex.route.params
  const resp = await managerClient.update(id as string, data)

  data.id = id
  // eslint-disable-next-line prettier/prettier
  ctx.status = 200
  ctx.body = resp

  ctx.set('Cache-Control', 'no-cache')

  await next()
}
