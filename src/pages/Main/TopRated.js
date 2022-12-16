import React from 'react';

const TopRated = () => {
  // const {state : {products, loading, error}} = useProduct();
  let content;
  // if(loading){
  //   content = <p>Loading............................Wait Few Moment</p>
  // };
  // if(error){
  //   content = <p>Danger............................Something went wrong</p>
  // };
  // if(!loading && !error && products.length === 0){
  //   content = <p>Nothing to show............................Products is Empty</p>
  // };
  // if(!loading && !error && products.length){
  //   content = products.filter(product => product.rating >= 4).map(product => <ProductCard key={product.id} product={product} />)
  // };
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default TopRated;
