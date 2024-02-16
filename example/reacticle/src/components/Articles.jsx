import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from '../configs/firebaseConfig'

export function Articles() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy('createdAt', 'desc'))
    onSnapshot(q, snapshot => {
      const articleSnapshots = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setArticles(articleSnapshots)
      console.log(articleSnapshots)
    })
  }, [])

  return <div>
    {
      articles.length === 0 ? (
        <p>No Articles yet !</p>
      ) : (
        articles.map(
          ({
            id,
            title,
            imgUrl,
            description,
            createdAt
          }) => <div key={id} className="border mt-3 p-3">
            <div className="row">
              <div className="col-3">
                <img
                  src={imgUrl}
                  alt={title}
                  style={{width: 180, height: 180}}
                />
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col-9">
                    <h3>{title}</h3>
                    <p>{createdAt.toDate().toDateString()}</p>
                    <h5>{description}</h5>
                  </div>
                  <div className="col-3 d-flex flex-row-reverse">
                    {/* <DeleteArticle id={id} imgUrl={imgUrl} /> */}
                    <button className="btn btn.primary">X</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )
    }
  </div>
}