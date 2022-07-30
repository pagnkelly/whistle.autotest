module.exports = (server: any) => {
  server.on('request', (req: any) => {
    const oReq = req.originalReq;
    if (oReq.url.startsWith('https://omgup.hongyibo.com.cn/api/smallstat/x')) {
      console.log(oReq.url, 'req')
      console.log(oReq)
    }
  })
}