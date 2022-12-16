import React from 'react';

const wishlist = () => {
  //   const {state : { wishlist, loading, error}} = useProduct();
  let content;
  // if(loading){
  //   content = <p>Loading............................Wait Few Moment</p>
  // };
  // if(error){
  //   content = <p>Danger............................Something went wrong</p>
  // };
  // if(!loading && !error && wishlist.length === 0){
  //   content = <p>Nothing to show............................wishlist is Empty</p>
  // };
  // if(!loading && !error && wishlist.length){
  //   content = wishlist.map(product => <ProductCard key={product.id} product={product} />)
  // };
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default wishlist;