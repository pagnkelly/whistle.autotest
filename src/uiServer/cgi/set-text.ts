export default async (ctx: any) => {
  let { filterText } = ctx.request.body;
  const { localStorage } = ctx.req;
  const filterArray = filterText.split(',')
  localStorage.setProperty('triggerMap', {});
  localStorage.setProperty('filterText', filterText);
  localStorage.setProperty('filterArray', filterArray);
  ctx.body = {
    ec: 0,
    filterArray,
  };
}
