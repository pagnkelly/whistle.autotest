export default async (ctx: any) => {
  const { localStorage } = ctx.req;
  const triggerMap = localStorage.getProperty('triggerMap');
  const filterArray = localStorage.getProperty('filterArray');
  ctx.body = {
    ec: 0,
    triggerMap,
    filterArray
  };
}
