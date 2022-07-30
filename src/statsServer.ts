module.exports = (server: any) => {
  server.on('request', (req: any) => {
    const oReq = req.originalReq;
    if (oReq.url.startsWith('https://omgup.hongyibo.com.cn/api/smallstat/x')) {
      console.log(oReq.url, 'req')
      req.getSession((s:any) => {
        // 如果设置了 enable://hide 会获取到空数据
        console.log(s.req.body, 'ssss')
        if (!s) {
          return;
        }
        // do sth
      })
    }
  })
}