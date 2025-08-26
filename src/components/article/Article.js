import './Article.css';
function Article(props) {
    let {title,content}= props;
    return (
        <article>
            <h1 style={{color:"darkblue"}} >{title}</h1>
            {content}
            {/* <h2>
                Современные десктопные процессоры архитектуры x86
                общие принципы работы (x86 CPU digest 2.0)
            </h2>

            <ы

            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut architecto, suscipit distinctio adipisci iusto nobis non impedit incidunt. Corrupti eveniet animi obcaecati rem. Facilis tempora soluta itaque illo deleniti quo?</p>
            <lo>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </lo> */}

        </article>
    )
}
Article.defaultProps = 
{
    title: "Заголовок статьи",
    content: "Содержимое статьи"
}
export default Article;