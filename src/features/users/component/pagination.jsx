export const Pagination = ({limit, totalCountries, paginate}) => {
  const pageNumbers =[]
  for (let i =1; i<=Math.ceil(totalCountries/ limit); i++){
    pageNumbers.push(i)
  }
  return( <div>
<div className={'paginate__users'}>{pageNumbers.map((number) => (
    <div className={'button__paginate'} key={number}>
      <a href={'!#'} ><button onClick={() => paginate(number)}>{number} </button></a>
    </div>
))}</div>
  </div>
  )
}