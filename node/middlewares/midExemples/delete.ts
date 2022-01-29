export async function middleDelete(ctx: Context, next: () => Promise<any>) {
    const {
        clients: { manager: managerClient}
    } = ctx

    const { id } = ctx.vtex.route.params

    const resp = await managerClient.delete(id as string)

    ctx.status = 200,
    ctx.body = resp

    ctx.set('Cache-Control', 'no-cache')

    await next();
}
