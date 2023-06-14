let news = []

const getLatestNews = async ()=>{
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=kr&topic=sport`) 
    console.log(url);

    let header = new Headers({'x-api-key':'Zsu2XyfqlWn1a9BC1A3uZJmvahuSdx0b8okQnM_y02E'})

    let response = await fetch(url,{headers:header})
    let data = await response.json()
    console.log("this is data",data)
    news = data.articles
    console.log(news)
}

getLatestNews()
