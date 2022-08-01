module.exports = (server: any, { storage }: any) => {
  server.on('request', (req: any) => {
    const oReq = req.originalReq;
    if (oReq.url.startsWith('https://omgup')) {
      req.getSession((s:any) => {
        // 如果设置了 enable://hide 会获取到空数据
        const filterArray = storage.getProperty('filterArray')
        if (!s || !filterArray) {
          return;
        }
        const triggerMap = storage.getProperty('triggerMap') || {};
        const filterSet = new Set(filterArray)

        const body = s.req.body
        const omegaParams = JSON.parse(body)
        omegaParams.forEach((element: { e: string; }) => {
          if (filterSet.has(element.e)) {
            triggerMap[element.e] = true
          }
        });
        storage.setProperty('triggerMap', triggerMap);
        // do sth
      })
    }
  })
}