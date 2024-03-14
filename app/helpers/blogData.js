//Static Blog infomation
const blogData = [
  {
      source: {
          "id": null,
          "name": "newsBTC"
      },
      author: "Scott Matherson",
      title: "Brace For Impact: MicroStrategy Is Planning Another $500 Million Bitcoin Purchase",
      content: "American business intelligence and software development company, MicroStrategy has unveiled new plans to acquire an additional Bitcoin, further bolstering its already substantial BTC holdings. MicroStrategy Mega Bitcoin Purchase In The Works In a recent press…",
      url: "http://www.newsbtc.com/news/bitcoin/microstrategy 500 million bitcoin/",
      image: "https://dwu32cgxelq1c.cloudfront.net/local_newspapers/sites/51/2013/08/News-Medium.jpg",
      date: "2024 03 14T13:00:51Z",
      contents: "American business intelligence and software development company, MicroStrategy has unveiled new plans to acquire an additional Bitcoin, further bolstering its already substantial BTC holdings.\r\nMicro… [+3283 chars]",
  slug:"MicroStrategy-Is-Planning-Another-500-Million-Bitcoin-Purchase"
  },
  {
      source: {
          "id": null,
          "name": "Biztoc.com"
      },
      author: "investors.com",
      title: "Stock Market Today: Dow Jones Rises Ahead Of Key Inflation Data; Nvidia, Tesla Extend Losses",
      content: "Dow Jones futures and the other stock indexes pared their gains Thursday after hotter than expected inflation data, with the early release of the producer price index. Meanwhile, Magnificent Seven stocks Nvidia (NVDA) and Tesla (TSLA) extended their losses on…",
      url: "https://biztoc.com/x/da912865e13dcce2",
      image: "https://c.biztoc.com/p/da912865e13dcce2/og.webp",
      date: "2024 03 14T13:00:15Z",
      contents: "Dow Jones futures and the other stock indexes pared their gains Thursday after hotter than expected inflation data, with the early release of the producer price index. Meanwhile, Magnificent Seven st… [+276 chars]",
  slug:"Dow-Jones-Rises-Ahead-Of-Key-Inflation-Data-Nvidia-Tesla-Extend-Losses"
  },
  {
      source: {
          "id": null,
          "name": "Biztoc.com"
      },
      author: "investing.com",
      title: "Tesla, Nvidia and Under Armour fall premarket; Robinhood, Dollar General rise",
      content: "Investing.com    U.S. edged higher Thursday, as investors awaited the release of more inflation data, looking for clues as to when the Federal Reserve will start its rate cutting cycle. Here are some of the biggest premarket U.S. stock movers today: • Tesla (…",
      url: "https://biztoc.com/x/2b0bb62b25f6f00f",
      image: "https://c.biztoc.com/p/2b0bb62b25f6f00f/s.webp",
      date: "2024 03 14T13:00:09Z",
      contents: "Investing.com    U.S. edged higher Thursday, as investors awaited the release of more inflation data, looking for clues as to when the Federal Reserve will start its rate cutting cycle.Here are some … [+289 chars]",
  slug:"Tesla-Nvidia-and-Under-Armour-fall-premarket-Robinhood-Dollar-General-rise"
  },
  {
      source: {
          "id": "fox news",
          "name": "Fox News"
      },
      author: "Jeffrey Clark",
      title: "Don Lemon says free speech 'doesn't matter' to Elon Musk after X partnership is cancelled",
      content: "Former CNN host Don Lemon, whose new show was cancelled on X following a contentious interview with owner Elon Musk, questioned the Tesla CEO's commitment to free speech.",
      url: "https://www.foxnews.com/media/don lemon says free speech doesnt matter elon musk after x partnership cancelled",
      image: "https://static.foxnews.com/foxnews.com/content/uploads/2024/03/MuskLemon.jpg",
      date: "2024 03 14T12:41:50Z",
      contents: "Former CNN host Don Lemon criticized Tesla CEO Elon Musk during an interview on CNN Wednesday night, calling his commitment to free speech into question. \r\nLemon announced on Wednesday that Musk canc… [+2741 chars]",
  slug:"Don-Lemon-says-free-speech-doesnt-matter"
  },
  {
      source: {
          "id": null,
          "name": "Fark.com"
      },
      author: null,
      title: "These US companies pay their top executives more than they pay in taxes. Yup, Tesla is on there. Elmo got $2.28 billion. The company got hundreds of millions in federal subsidies and loans. Tesla paid zero tax [Murica]",
      content: "These US companies pay their top executives more than they pay in taxes. Yup, Tesla is on there. Elmo got $2.28 billion. The company got hundreds of millions in federal subsidies and loans. Tesla paid zero tax",
      url: "https://www.fark.com/comments/13186514/These US companies pay their top executives more than they pay in taxes Yup Tesla is on there Elmo got $228 billion The company got hundreds of millions in federal subsidies loans Tesla paid zero tax",
      image: "https://dwu32cgxelq1c.cloudfront.net/local_newspapers/sites/51/2013/08/News-Medium.jpg",
      date: "2024 03 14T12:40:00Z",
      contents: "<li>Links are submitted by members of the Fark community.\r\n</li><li>When community members submit a link, they also write a custom headline for the story.\r\n</li><li>Other Farkers comment on the links… [+177 chars]",
  slug:"These-US-companies-pay-their-top-executives-more-than-they-pay-in-taxes"
  },
  {
      source: {
          "id": null,
          "name": "Jalopnik"
      },
      author: "Andy Kalmowitz",
      title: "What Car Is Driven Exclusively By Idiots?",
      content: "A few weeks ago we talked about cars that looked dumb, but that doesn’t necessarily mean their owners are dummies themselves. That got me thinking: What cars are only driven by idiots? What cars are driven by the sort of people who can only breathe with their…",
      url: "https://jalopnik.com/what car is driven exclusively by idiots 1851329798",
      image: "https://dwu32cgxelq1c.cloudfront.net/local_newspapers/sites/51/2013/08/News-Medium.jpg",
      date: "2024 03 14T12:30:00Z",
      contents: "A few weeks ago we talked about cars that looked dumb, but that doesnt necessarily mean their owners are dummies themselves. That got me thinking: What cars are only driven by idiots? What cars are d… [+1123 chars]",
  slug:"What-Car-Is-Driven-Exclusively-By-Idiots"
  },
  {
      source: {
          "id": null,
          "name": "Biztoc.com"
      },
      author: "cryptonews.com",
      title: "Dogecoin Price Prediction as Billionaire Elon Musk Says ‘Dogecoin to the Moon’",
      content: "DOGE has gained by 6% in the past 24 hours, with the Dogecoin price reaching $0.1806 after Elon Musk declared “Dogecoin to the Moon” during a Q&A yesterday. The famous meme coin has now risen by 18% in a week and by 120% in a month, as well as by 140% in the …",
      url: "https://biztoc.com/x/bdd171f07d78cf12",
      image: "https://c.biztoc.com/p/bdd171f07d78cf12/s.webp",
      date: "2024 03 14T12:24:14Z",
      contents: "DOGE has gained by 6% in the past 24 hours, with the Dogecoin price reaching $0.1806 after Elon Musk declared Dogecoin to the Moon during a Q&amp;A yesterday.The famous meme coin has now risen by 18%… [+281 chars]",
  slug:"Dogecoin-Price-Prediction-as-Billionaire-Elon-Musk-Says"
  },
  {
      source: {
          "id": null,
          "name": "NDTV News"
      },
      author: null,
      title: "Analysts Predict 10,000x Surge Post Launch; SHIB to Flip Doge",
      content: "Dive into the clash of crypto titans with Shiba Inu vs Dogecoin. Explore Dogecoin's legacy and witness BlockDAG's presale revolution  best upcoming crypto!\"",
      url: "https://www.ndtv.com/partner content/blockdag fever analysts predict 10 000x surge post launch shib to flip doge 5237946",
      image: "https://dwu32cgxelq1c.cloudfront.net/local_newspapers/sites/51/2013/08/News-Medium.jpg",
      date: "2024 03 14T12:11:57Z",
      contents: "For the last few years, two formidable contenders, Shiba Inu (SHIB) Vs Dogecoin (DOGE), have been capturing the main role image among the crypto community. As crypto investors are in a constant searc… [+3772 chars]",
  slug:"Dive-into-the-clash-of-crypto-titans-with-Shiba-Inu"
  },
  {
      source: {
          "id": null,
          "name": "Forbes"
      },
      author: "Forbes Daily, Forbes Staff, \n Forbes Daily, Forbes Staff\n https://www.forbes.com/sites/forbesdaily/",
      title: "Forbes Daily: How European Union’s AI Act Aims To Regulate The Technology",
      content: "Thursday's edition of Forbes Daily covers mortgage rates falling, Jeff Bezos overtaking Elon Musk, Waymo's move to LA, Boeing's missing surveillance footage and more.",
      url: "https://www.forbes.com/sites/forbesdaily/2024/03/14/forbes daily how european unions ai act aims to regulate the technology/",
      image: "https://dwu32cgxelq1c.cloudfront.net/local_newspapers/sites/51/2013/08/News-Medium.jpg",
      date: "2024 03 14T12:10:27Z",
      contents: "This is a published version of the Forbes Daily newsletter, you can sign up to get Forbes Daily in your inbox here.\r\nGood morning,\r\nTikToks future in the U.S. is uncertain after the House of Represen… [+10194 chars]",
  slug:"How-European-Unions-AI-Act-Aims-To-Regulate-The-Technology"
  },
  {
      source: {
          "id": null,
          "name": "Gizchina.com"
      },
      author: "Efe Udin",
      title: "Xiaomi’s first electric car, Xiaomi SU7 gets over 100,000 reservations",
      content: "Xiaomi, a Chinese electronics manufacturer, has made a significant move into the automotive industry with the launch of its first electric vehicle, the Xiaomi SU7. ...\nThe post Xiaomi’s first electric car, Xiaomi SU7 gets over 100,000 reservations appeared fi…",
      url: "https://www.gizchina.com/2024/03/14/xiaomi su7 electric vehicle/",
      image: "https://dwu32cgxelq1c.cloudfront.net/local_newspapers/sites/51/2013/08/News-Medium.jpg",
      date: "2024 03 14T12:09:42Z",
      contents: "Xiaomi, a Chinese electronics manufacturer, has made a significant move into the automotive industry with the launch of its first electric vehicle, the Xiaomi SU7. The SU7, a sedan, is set to be offi… [+4297 chars]",
  slug:"Xiaomi-a-Chinese-electronics-manufacturer"
  },
  {
      source: {
          "id": null,
          "name": "Forbes"
      },
      author: "Ed Garsten, Senior Contributor, \n Ed Garsten, Senior Contributor\n https://www.forbes.com/sites/edgarsten/",
      title: "Study Reveals Customer Service Dissatisfaction For Non Tesla EV Owners",
      content: "Overall customer satisfaction with dealer service was higher in this year's J.D. Power 2024 Customer Service Index, but non Tesla EV owners are not happy.",
      url: "https://www.forbes.com/sites/edgarsten/2024/03/14/study reveals customer service dissatisfaction for non tesla ev owners/",
      image: "https://dwu32cgxelq1c.cloudfront.net/local_newspapers/sites/51/2013/08/News-Medium.jpg",
      date: "2024 03 14T12:00:47Z",
      contents: "Customer satisfaction with dealer service ticked up slightly in the J.D. Power 2024 U.S. Customer ... [+] Service Index (CSI) Study. (Photo by Justin Sullivan/Getty Images)\r\nGetty Images\r\nWhile overa… [+5241 chars]",
  slug:"Study-Reveals-Customer-Service-Dissatisfaction-For-Non-Tesla-EV-Owners"
  },
  {
      source: {
          "id": null,
          "name": "ETF Daily News"
      },
      author: "MarketBeat News",
      title: "Wesbanco Bank Inc. Reduces Stock Position in Tesla, Inc. (NASDAQ:TSLA)",
      content: "Wesbanco Bank Inc. reduced its holdings in Tesla, Inc. (NASDAQ:TSLA – Free Report) by 23.4% in the third quarter, according to its most recent filing with the Securities & Exchange Commission. The institutional investor owned 7,142 shares of the electric vehi…",
      url: "https://www.etfdailynews.com/2024/03/14/wesbanco bank inc reduces stock position in tesla inc nasdaqtsla/",
      image: "https://dwu32cgxelq1c.cloudfront.net/local_newspapers/sites/51/2013/08/News-Medium.jpg",
      date: "2024 03 14T11:58:45Z",
      contents: "Wesbanco Bank Inc. reduced its holdings in Tesla, Inc. (NASDAQ:TSLA – Free Report) by 23.4% in the third quarter, according to its most recent filing with the Securities &amp; Exchange Commission. Th… [+6345 chars]",
  slug:"Wesbanco-Bank-Inc-Reduces-Stock-Position-in-Tesla"
  }
];
  
  export default blogData;
  