import parser from 'co-body'

export async function createProductMiddle(
  ctx: Context,
  next: () => Promise<any>
) {

  const data = await parser(ctx.req)
  const header = ctx.header
  const headers = ctx.headers

  ctx.status = 200
  ctx.body = { message: 'success', data, header, headers }


  ctx.set('Cache-Control', 'cache-control');
  await next();
}
