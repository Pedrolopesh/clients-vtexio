import parser from 'co-body'

export async function readAllBatataMiddle(
  ctx: Context,
  next: () => Promise<any>
) {

  const {
    clients: { batata: batataClient },
  } = ctx

  const data =  await parser(ctx.req)
  const resp = await batataClient.getAll(data.page, data.pagesize, data.where)

  ctx.status = 200
  ctx.body = { content: resp }

  ctx.set('Cache-Control', 'no-cache')

  await next()
}
