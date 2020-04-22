import React from "react";
import {Carousel} from "react-bootstrap";
import "./homepage.css";

const HomePage = () => {
    return (
        <div className={"homepage"}>
            <div className="home-content">
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dignissimos dolores dolorum
                    eaque ex harum iste iusto magni nisi nobis odit officia optio perspiciatis, porro quod quos,
                    repellendus similique, sunt tempora totam! A accusamus aperiam asperiores assumenda cupiditate
                    deleniti dicta dolores eligendi et eum ex exercitationem expedita fugit hic id illum iusto magnam
                    mollitia necessitatibus non nulla omnis optio perspiciatis, possimus quae quaerat qui quibusdam
                    quidem quis repudiandae rerum sequi sit sunt tempore temporibus tenetur voluptas. Accusantium
                    aperiam aspernatur, assumenda consequuntur delectus, ducimus ea facere facilis omnis quas recusandae
                    voluptate? A, ab animi cum, doloremque doloribus eius eos et excepturi illum inventore iste magnam
                    maiores, maxime odio placeat repudiandae sequi totam. Accusamus animi architecto beatae earum eum,
                    excepturi facere facilis fuga libero nam nihil nobis non obcaecati quis quisquam repudiandae unde?
                    Aliquid eius maxime non placeat voluptas? Aliquam amet cum debitis facilis, id, incidunt magnam
                    nobis officiis provident ratione saepe velit! Animi atque consequatur cum dicta dignissimos dolore
                    dolorem enim esse minus natus non nulla, perspiciatis quam quod repellat tempora totam? A ad aliquam
                    aperiam architecto aspernatur atque autem commodi, debitis dolor dolores earum eius fugiat ipsa iste
                    laudantium minus modi molestiae omnis possimus quae quis ratione rem rerum, soluta sunt, suscipit
                    tempore tenetur veniam veritatis voluptate. Consequuntur dignissimos doloribus eaque expedita
                    incidunt labore molestiae molestias nemo, nostrum obcaecati quia, quisquam repudiandae rerum sunt
                    tempora tempore veniam voluptatum. Accusamus accusantium aspernatur at atque aut, doloremque ducimus
                    ea eligendi, eos itaque maiores nemo non quibusdam quis recusandae sapiente veniam vero, vitae!</h3>
            </div>
            <div className={"carousel"}>
                <Carousel>
                    <Carousel.Item>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dolorem dolorum ducimus
                            facilis itaque natus, non nulla obcaecati placeat praesentium, quae quam quisquam totam.
                            Blanditiis earum est qui quibusdam. Quos.</h3>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, illum incidunt non
                            quidem rerum sequi. Animi, eaque eius itaque nemo quia quidem sapiente sequi sit? Enim
                            libero nesciunt sint tenetur.</h3>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid culpa dolorum
                            ducimus ea explicabo fugiat harum ipsam iusto molestias mollitia nemo nesciunt non,
                            repudiandae sequi, temporibus ut vel voluptate?</h3>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="side-bar">
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatur dolor dolorum eos
                    ipsam optio quo sint voluptatum. Esse, explicabo facere fuga in ipsam magni maiores minima molestiae
                    neque nesciunt obcaecati placeat quaerat quas reiciendis sed tempora tempore vel veritatis vero,
                    voluptatibus. Consequuntur, illum iste molestias obcaecati repudiandae sit tenetur?</h4>
            </div>
        </div>
    );
}

export default HomePage;