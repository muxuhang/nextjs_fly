


async function refreshToken(back:(e)=>void){
  console.log(refreshToken)
}
export default async function network (method:string,url:string,data:object,back:(e)=>void) {
    console.log(method,url,data)
    const res = await fetch(`/api${url}`,{
      method: method,
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    console.log(res)
    const json = await res.json()
    back (json)
  }