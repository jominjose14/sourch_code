import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import "./homepage.css";

const HomePage = (props) => {
    return (
        <div className={"homepage"}>
            <Navbar variant={"dark"} className={"nav-bar"}>
                <Navbar.Brand href={"#"} className={"nav-bar-brand"}>Sourch</Navbar.Brand>
                <Nav className={"mr-auto nav-link-list"}>
                    <Nav.Link href={"#"}>Home</Nav.Link>
                    <Nav.Link href={"#"}>Sign Up</Nav.Link>
                    <Nav.Link href={"#"}>Pricing</Nav.Link>
                    <Nav.Link href={"#"}>Work</Nav.Link>
                </Nav>
            </Navbar>

            <div className={"body-container"}>
                <div className={"main-area"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium animi architecto
                        asperiores aut cumque debitis dignissimos dolorem eius error eum excepturi exercitationem itaque
                        laudantium magni mollitia, odit officia quis quos, saepe similique, sit veniam voluptates?
                        Delectus, deleniti dolorem ea error illum minima qui quidem temporibus voluptatem voluptates! At
                        deleniti deserunt doloribus earum fuga natus nulla provident qui, reiciendis repellendus, saepe
                        similique sit suscipit ullam unde veniam, voluptas? Consequatur perferendis, quisquam? Ad
                        consectetur cupiditate debitis dignissimos, earum enim eos excepturi in, ipsa iste labore
                        laboriosam magni minima, quasi quidem reprehenderit sunt voluptatum. Aspernatur atque,
                        cupiditate delectus doloribus ducimus esse exercitationem ipsa itaque iusto neque nesciunt odit
                        possimus recusandae repellat sapiente sequi tempora veritatis! Cupiditate dolor dolorum ea
                        labore neque porro quis ratione reiciendis. Ab aperiam dolores id iste nobis optio quod
                        repellendus. A animi architecto aspernatur, cum dicta dolor est facere inventore ipsam labore
                        libero maiores minima mollitia nemo neque nostrum officiis provident quae quasi quisquam
                        repellendus reprehenderit sapiente ullam voluptas voluptatem. At atque blanditiis consequatur
                        culpa doloremque eius laudantium magnam maiores nulla obcaecati odio placeat praesentium rerum,
                        sint tempora tempore temporibus voluptate! Accusamus accusantium adipisci aperiam asperiores
                        assumenda atque consequuntur debitis deleniti ducimus est excepturi explicabo facere fuga
                        inventore iste itaque laboriosam laborum libero magnam necessitatibus neque nisi, numquam
                        officia pariatur perspiciatis porro quam quos, reiciendis rem sequi soluta sunt suscipit,
                        tempore! Aliquid assumenda autem consectetur culpa cumque dicta, dolore ea eligendi enim, error
                        eveniet, fugiat id itaque labore magnam molestias nesciunt nulla perspiciatis possimus quaerat
                        quasi quisquam reiciendis repellat sed tempora totam ut voluptas. Architecto asperiores autem
                        consequuntur cumque delectus, deserunt eligendi eveniet excepturi exercitationem inventore
                        labore laboriosam laborum magni maxime molestiae necessitatibus neque non officia perspiciatis
                        possimus quae quaerat quam quia quis repellendus sed sequi sit vero vitae voluptas. Consectetur,
                        dolor dolore doloremque iusto libero magni voluptas.</p>
                </div>

                <div className={"side-area"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci blanditiis commodi
                        consectetur
                        dolor esse in magnam magni, minus nemo nobis obcaecati omnis repellendus sit suscipit unde
                        voluptates. Animi at aut cumque cupiditate, dicta dolorem dolorum inventore itaque, magni minus
                        molestiae necessitatibus, nesciunt nostrum nulla quasi sunt voluptas! Dolor, fugiat.</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;