export default eventHandler(async (event) => {
  const query = getQuery(event)

  if (query.featured) {
    const data = await queryCollection(event, 'articles').where('featured', '=', true).all();
    return data
  }
  else {
    const data = await queryCollection(event, 'articles').order('date', 'DESC').limit(query.limit).all();
    return data
  }
})