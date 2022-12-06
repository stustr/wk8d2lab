const NewsList = ({ newsTitles }) => {
  const newsStory = newsTitles.map((newsTitle, index) => {
    return <li key={index}>{newsTitle.title}</li>
  })
  
  return (
    <ul>
      {newsStory}
    </ul>
  )
};

export default NewsList;