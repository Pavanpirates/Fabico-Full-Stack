import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // Toggle Category
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  // Toggle SubCategory
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  // Apply Filter + Sorting
  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category Filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    // SubCategory Filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    // Sorting
    if (sortType === "low-high") {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      productsCopy.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, sortType, search, showSearch, products]);
  console.log("filter",filterProducts);
  return (
    <div className='flex flex-col sm:flex-row gap-6 pt-10 border-t'>

      {/* Left Side Filters */}
      <div className='min-w-[200px]'>
        <p
          className='my-2 text-xl flex items-center cursor-pointer gap-2 select-none'
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="Dropdown icon"
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 rounded-md p-4 mt-6 shadow-sm bg-white ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-4 text-sm font-semibold text-gray-800'>CATEGORIES</p>
          <div className='flex flex-col gap-3'>
            {['Men', 'Women', 'Kids'].map((cat) => (
              <label
                key={cat}
                className='flex items-center gap-3 text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900 transition-colors'
              >
                <input
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                  className='w-4 h-4 accent-gray-700 rounded-sm transition-transform duration-150 hover:scale-110'
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div className={`border border-gray-300 rounded-md p-4 mt-5 shadow-sm bg-white ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-4 text-sm font-semibold text-gray-800'>TYPE</p>
          <div className='flex flex-col gap-3'>
            {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
              <label
                key={type}
                className='flex items-center gap-3 text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900 transition-colors'
              >
                <input
                  type="checkbox"
                  value={type}
                  onChange={toggleSubCategory}
                  className='w-4 h-4 accent-gray-700 rounded-sm transition-transform duration-150 hover:scale-110'
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side Products */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4 items-center'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Product sort */}
          <select
  className="border border-black/40 text-sm px-2 py-1 rounded-md bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-black/60 hover:border-black/60 transition-all duration-200"
  onChange={(e) => setSortType(e.target.value)}
>
  <option value="relevant">Sort by: Relevant</option>
  <option value="low-high">Sort by: Low to High</option>
  <option value="high-low">Sort by: High to Low</option>
</select>

        </div>

        {/* Map Product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.images}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
