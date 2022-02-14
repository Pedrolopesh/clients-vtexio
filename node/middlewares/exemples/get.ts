// import parser from 'co-body'

// interface InputRequest {
//   item1: number
//   item2: number
// }

export async function exmpleMiddleRequest(
  ctx: Context,
  next: () => Promise<any>
){

  const {user} = ctx.headers

  const { id } = ctx.vtex.route.params

  if(user === 'pedrolopes'){
    console.log(id)

    ctx.status = 200
    ctx.body = { message:'request sucess!', id }

    // const data:InputRequest = await parser(ctx.req)

    // const result = data.item1 + data.item2
    // console.log('result from first request => ', result)

    // if(result > 0){
    //   ctx.status = 200;
    //   ctx.body = { message:'request sucess!', result }

    // }else {
    //   ctx.status = 400
    //   ctx.body = { message:'request not sucess!', result }
    // }


  }else {
    ctx.status = 403
    ctx.body = { message:'not auth!' }
  }



  ctx.set('Cache-Control', 'no-cache')

  await next();
}
