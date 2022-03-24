import parser from 'co-body'

export async function createBatataMiddle(
  ctx: Context,
  next: () => Promise<any>
) {

  const {
    clients: { batata: batataClient }
    // clients: {favorite: favoriteClient }
  } = ctx

  const data =  await parser(ctx.req)

  console.info(data)

  if (data) {
    const resp = await batataClient.create(data)
    ctx.status = 201
    ctx.body = { status: 'Success create!', resp }

  } else {
    ctx.status = 403
    ctx.body = { status: 'error', message: `` }
  }

  ctx.set('Cache-Control', 'no-cache')
  await next();
}
