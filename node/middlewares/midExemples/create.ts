import parser from 'co-body'

export async function middleCreate(ctx: Context, next: () => Promise<any>) {

    const {
        clients: { manager: managerClient}
    } = ctx

    const data = await parser(ctx.req)

    const resp = await managerClient.create(data)

    ctx.status = 200,
    ctx.body = resp

    ctx.set('Cache-Control', 'no-cache')

    await next();
}
