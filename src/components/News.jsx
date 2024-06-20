import axios from 'axios'; 
import React, { useEffect, useState } from 'react';

const News = () => {
  const [news, setNews] = useState([]); // State variable to store fetched news articles
  const [category, setCategory] = useState("everything"); // State variable for selected category
  const [search, setSearch] = useState(""); // State variable for search term
  const [page, setPage] = useState(1); // State variable for current page number

  // Fetches news articles based on category or search term and page number
  useEffect(()=>{
    axios.get(`https://newsapi.org/v2/everything?q=${search==""?category:search}&page=${page}&pageSize=10&apiKey=5765b4bbbe7648789a421c51931ac411`)
    .then((newsData)=>{
      setNews(newsData.data.articles);
    })
    .catch(err=>console.log(err))
   },[page,search,category]);

  // Handles category selection change
  const onChangeCategoryHandler = (e) => {
    setCategory(e.target.value); // Update category state with selected value
    setSearch(""); // Reset search term
    document.getElementById('inputSearch').value = ""; // Clear search input field
  };

  // Handles search form submission
  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setSearch(document.getElementById('inputSearch').value); // Update search term with input value
    setCategory("everything"); // Reset category to "everything"
    document.getElementById('category').value = "Category"; // Reset category dropdown selection
  };

  return (
    <div>
      <div className='text-center pt-10 mt-10'>
        <h1>Latest News</h1>
      </div>
      <div className='p-5'>
        <div className='flex justify-between w-full pl-2 pr-2'>
          <div className='w-fit'> {/* Container for category dropdown */}
          <select id='category' onChange={onChangeCategoryHandler}>
          <option disabled selected hidden>Category</option>
          <option value="technology">Technology</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="sports">Sports</option>
          <option value="everything">Other</option>
        </select>
      </div>
      <div className='flex justify-end'> {/* Container for search form */}
        <form onSubmit={onSubmitHandler} className='flex border-2 rounded'>
          <input
            placeholder='Search here...'
            type="text"
            id='inputSearch'
            className='lg:w-[200px] w-[150px] p-2'
          />
          <button type="submit" className='p-2 text-[1.2rem]'>🔎</button>
        </form>
      </div>
    </div>
    <div className='flex justify-center flex-wrap lg:gap-[20px] gap-[10px] p-2 mt-2'>
      {news.map((newsCard) => {
        return (
          <div key={news.indexOf(newsCard)} className='border-2 p-2 min-w-[200px] w-[30%] rounded'>
            <img
              className='rounded w-[100%] h-auto max-h-[50%]'
              src={newsCard.urlToImage === null ? "https://img.freepik.com/free-vector/newspaper-concept-illustration_114360-22666.jpg?t=st=1718879980~exp=1718883580~hmac=9d51cc089bad1048e2acee481c5fd0d9619586ea15fa3463b655e54543560c24&w=740" : newsCard.urlToImage}
              alt="News Image"
            />
            <div>
              <strong>{newsCard.title}</strong> {/* Display news title */}
              <p>{newsCard.description}</p> {/* Display news description */}
              <br />
              <a href={newsCard.url}><button className='bg-[#1f2937] text-white'>Read More...</button></a> {/* Link to full news article */}
              <p className='text-right'>-By {newsCard.author}</p> {/* Display news author */}
            </div>
          </div>
        );
      })}
    </div>
    <div className='flex justify-between p-5'>
      <button className='bg-[#1f2937] text-white disabled:bg-gray-400 disabled:cursor-not-allowed' disabled={page <= 1} onClick={() => {setPage(page - 1)}}>← Previous</button>
      <button className='bg-[#1f2937] text-white disabled:bg-gray-400 disabled:cursor-not-allowed' disabled={page >= 10} onClick={() => {setPage(page + 1)}}>Next →</button>
    </div>
  </div>
</div>
);
};

export default News;