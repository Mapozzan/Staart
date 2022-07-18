import Feed from "../components/Feed";

function MostViewed() {

    const posts = [{
        id: Math.random(),
        content: 'conten',
        userName: 'Marco',
        publisheAt: new Date(),
    }]

    return(

        <main className="most-viewed">
        <Feed posts={posts} title='Mais vistos' subtitle ='Acompanhe os assuntos mais comentados no momento e fique por dentro das novidades'/>
        </main>
    )

}

export default MostViewed;