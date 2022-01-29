// import axios from 'axios';

export async function middleGet(
  ctx: Context,
  next: () => Promise<any>
) {
  const {
    clients: { manager: managerClient },
  } = ctx


  const resp = await managerClient.getAll(1, 2, "")
  console.log('IS WORKING')
  console.log(resp)

  ctx.status = 200
  ctx.body = { content: resp }

  ctx.set('Cache-Control', 'no-cache')

  await next()
}
