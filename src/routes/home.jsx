import React from "react";

const Home = () => {
    return (
        <div className={"home-container m-2 grid grid-cols-1 gap-4 md:grid md:grid-rows-2 md:gap-4 md:grid-cols-3"}>
            <div className={"home-content rounded-md shadow-2xl bg-whitish md:row-start-1 md:row-span-2 md:col-start-1 md:col-span-2 h-78 md:h-auto overflow-y-scroll md:overflow-hidden"}>
                <h2 className={"text-md p-4 text-justify"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam harum ipsum officia pariatur
                    rerum. Commodi corporis delectus ducimus nulla perspiciatis? Alias aliquid asperiores consectetur
                    cumque fugiat id iste perspiciatis quae sequi veritatis? Aliquid commodi dignissimos ducimus earum
                    error ipsam, labore laboriosam minima molestiae nam obcaecati odio pariatur ratione reiciendis sint
                    tempore temporibus voluptatum! Accusamus adipisci aperiam debitis dicta dolorem doloribus ducimus ea
                    eum fugiat fugit harum hic laudantium magnam maxime minus, neque nobis optio possimus qui quisquam
                    quod reprehenderit repudiandae soluta sunt ullam ut, voluptate voluptatum? Aut commodi consequuntur
                    delectus facere illum nam natus odio omnis possimus, quibusdam quisquam quod recusandae sint unde
                    vero? Ab amet architecto corporis ea eaque exercitationem harum illo in iste, maiores nesciunt nobis
                    nulla officia porro reprehenderit sit unde. Atque aut excepturi exercitationem fuga impedit in ipsum
                    omnis vitae. Asperiores assumenda consequuntur culpa ea expedita magnam maxime reprehenderit. Ad
                    amet atque beatae blanditiis consequuntur dolor, dolorem ea eveniet exercitationem illo itaque
                    libero magnam minima molestiae molestias nihil nobis odit perspiciatis qui quis quisquam sunt unde
                    ut veritatis voluptas! At consequatur consequuntur molestias nesciunt quas quo, voluptate!
                    Laudantium minus officia reprehenderit veritatis. Alias aliquid dolorem dolores eaque, excepturi,
                    explicabo iste iusto, placeat quis suscipit ut vero. Beatae consequatur dicta laudantium numquam
                    obcaecati saepe temporibus, vitae voluptate. Aliquid, architecto commodi, cupiditate debitis dicta
                    dolorem, eius expedita fuga nihil optio recusandae sunt tempora temporibus unde vero. Adipisci
                    aliquid cupiditate dolore doloribus eius explicabo fugit hic ipsum laboriosam laborum laudantium
                    maxime necessitatibus nesciunt, nihil nisi porro quae quaerat quibusdam quis saepe temporibus, vitae
                    voluptate? Ad alias aliquam animi aspernatur assumenda consequuntur corporis, culpa cum delectus
                    deserunt dicta earum et ex iste natus non odit pariatur quia quidem quod reiciendis rem saepe
                    similique tenetur ut veritatis voluptatem! Aliquam atque culpa dolores eligendi error eveniet, illum
                    incidunt odit quis sapiente ullam.</h2>
            </div>

            <div
                className={"slides bg-greenish uk-position-relative uk-visible-toggle uk-light rounded-md shadow-2xl md:row-start-1 md:row-span-1 md:col-start-3 md:col-span-1 p-4"}
                uk-slideshow={"animation: pull; autoplay: true; autoplay-interval: 4500"} tabIndex={"-1"}>
                <ul className={"uk-slideshow-items"}>
                    <li><h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, tempora.</h2></li>
                    <li><h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, laboriosam?</h2></li>
                    <li><h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, temporibus.</h2></li>
                </ul>

                <a href={""} uk-slidenav-previous uk-slideshow-item={"previous"}
                   uk-icon={"icon: chevron-left; ratio: 2"}
                   className={"uk-position-center-left uk-position-small uk-hidden-hover"}></a>
                <a href={""} uk-slidenav-next uk-slideshow-item={"next"} uk-icon={"icon: chevron-right; ratio: 2"}
                   className={"uk-position-center-right uk-position-small uk-hidden-hover"}></a>
            </div>

            <div className={"notifs rounded-md shadow-2xl bg-whitish md:row-start-2 md:row-span-1 md:col-start-3 md:col-span-1"}>
                <h2 className={"text-md p-4 text-justify"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam harum ipsum officia pariatur
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id incidunt minima modi rerum
                    voluptate? Aliquam aliquid autem, beatae culpa ducimus illo laboriosam laborum molestias, obcaecati
                    odio omnis possimus, quam repellendus tempora veritatis! Atque aut consequatur cum ea eligendi eos
                    esse est eveniet exercitationem explicabo illum iusto, nam neque, nobis obcaecati porro quia,
                    sapiente voluptatibus! Adipisci alias aliquam, aperiam atque dolores earum exercitationem facere
                    facilis fugiat fugit in incidunt ipsa ipsam ipsum minima nisi nobis obcaecati pariatur porro
                    possimus quae quasi quis quisquam ratione repellat reprehenderit repudiandae rerum sed similique
                    soluta tempore temporibus unde vero. Accusantium alias aspernatur est facere!</h2>
            </div>
        </div>
    );
};

export default Home;
