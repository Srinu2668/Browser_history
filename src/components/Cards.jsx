import styles from "./Cards.module.css";
const Cards=(props)=>
{
    const {objects,sendDelete}=props;
    const {timeAccessed,logoUrl,title,domainUrl}=objects;

    const deleteData=()=>
    {
        sendDelete(props) 
    }

    return(
        <>
            <div className={styles.singleCard}>
                <p>{timeAccessed}</p>
                <img className={styles.comlogo} src={logoUrl} alt="logo"/>
                <h5>{title}</h5>
                <h6>{domainUrl}</h6>
                <img className={styles.del} src="./deleteicon.png" alt="delete" height="20px" onClick={deleteData}/>
            </div>
        </>
    )
}
export default Cards;