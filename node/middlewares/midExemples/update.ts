export async function middleUpdate(
  ctx: Context,
  next: () => Promise<any>
) {
  const {
    clients: { manager: managerClient},
  } = ctx
  const { voucher } = ctx.vtex.route.params
  const resp = await managerClient.getUnique(voucher as string)

  ctx.status = 400
  ctx.body = resp

  ctx.set('Cache-Control', 'no-cache')

  await next()
}
