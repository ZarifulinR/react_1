import './Article.css';
import male from '../img/male.png';
import female from '../img/female.png';

function Article(props) {
    // let {title,content}= props;
         let {db}=props;
    return (

        <article>
            <div className='app'>
                {/* <div className='card'>
                    <img src={db.photo} alt="Photo" />
                    <div className='name' >{db.name} {db.surname}</div>
                    <div className='gender' >
                        <img src={gender} alt="Gender"/>
                    </div>
                    <div className='age'>{db.age}</div>
                </div> */}
                {
                    Object.keys(db).map(elem=>{
                        return(
                            <div className='card' key={elem} >
                                <img src={db[elem].photo}alt='Photo'/>
                                <div className='str'>
                                        <div className='name'>{db[elem].name} {db[elem].surname}</div>
                                        <div className='age'>{db[elem].age}</div>
                                </div>
                                <div className='gender'>  <img src={db[elem].pol === 'male' ? male : female} alt='Gender'/> </div>

                            </div>
                        )
                    })
                }
            </div>
        </article>
        // <article>
        //     {/* <h1 style={{color:"darkblue"}} >{title}</h1> */}
        //     {content}
        //     {/* <h2>
        //         Современные десктопные процессоры архитектуры x86
        //         общие принципы работы (x86 CPU digest 2.0)
        //     </h2>

        //     <ы

        //     <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut architecto, suscipit distinctio adipisci iusto nobis non impedit incidunt. Corrupti eveniet animi obcaecati rem. Facilis tempora soluta itaque illo deleniti quo?</p>
        //     <lo>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //     </lo> */}

        // </article>
    )
}
Article.defaultProps = 
{
    title: "Заголовок статьи",
    content: "Содержимое статьи"
}
export default Article;