// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log(req)
  if (req.method === 'POST') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({ name: 'John Doe' })
  } else {
    res.json({ 'errMsg': '请使用正确的请求方式' })
  }

}
