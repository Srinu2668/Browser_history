import styles from "./HistoryCards.module.css";
import Cards from "./Cards";
import { useEffect, useState } from 'react';

const HistoryCards=(props)=>
{
  
    const{dataValue}=props;

    const initialHistoryList = 
  [
    {id: 0,timeAccessed: '07:45 PM',logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',title: 'Instagram',domainUrl: 'instagram.com'},
    {id: 1,timeAccessed: '05:45 PM',logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',title: 'Twitter. It’s what’s happening / Twitter',domainUrl: 'twitter.com'},
    {id: 2,timeAccessed: '04:35 PM',logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',title: 'Facebook – log in or sign up',domainUrl: 'facebook.com'},
    {id: 3,timeAccessed: '04:25 PM',logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',title: 'LinkedIn: Log In or Sign Up',domainUrl: 'linkedin.com'},
    {id: 4,timeAccessed: '04:00 PM',logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',title: 'Hashnode: Everything you need to start blogging as a developer!',domainUrl: 'hashnode.com'},
    {id: 5,timeAccessed: '03:25 PM',logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',title: 'GitHub: Where the world builds software · GitHub',domainUrl: 'github.com'},
    {id: 6,timeAccessed: '02:45 PM',logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',title: 'React – A JavaScript library for building user interfaces',domainUrl: 'reactjs.org'},
    {id: 7,timeAccessed: '01:25 PM',logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',domainUrl: 'stackoverflow.com'},
    {id: 8,timeAccessed: '09:25 AM',logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',title: 'Gmail',domainUrl: 'mail.google.com'},
    {id: 9,timeAccessed: '09:00 AM',logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',title: 'Google',domainUrl: 'google.com' }
  ];
  const [ChangingList,setChangingList]=useState(initialHistoryList);

  // const updatedData=initialHistoryList.filter((event)=>
  // {
  //   return event.title.includes(dataValue);
  // });
  // nexing(updatedData);

  // this give Uncaught Error: Too many re-renders. so i am using useEffect react function to elemenate the error

  useEffect(() => {
    const updatedData = initialHistoryList.filter((event) =>
      (event.title).toLowerCase().includes(dataValue.toLowerCase())
    );
    setChangingList(updatedData);
  }, [dataValue]);

  const sendDelete=(event)=>
  {
    // console.log(event.objects.id)
    let exceptDeletedData=ChangingList.filter((item)=>
    {
      if(item.id!==event.objects.id)
        return item;
    })

    setChangingList(exceptDeletedData);
  }


  return(
    <div className={styles.history_cont}>
      {
        ChangingList.map((event)=>
        {
          return <Cards key={event.id} objects={event} sendDelete={sendDelete}></Cards>
        })
      }
    </div>
  )
}
export default HistoryCards;