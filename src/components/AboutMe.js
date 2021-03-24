import React from "react"
import author from "../MyPhoto.jpg"

const AboutMe = () => {
    return (
    <div className="aboutmewrapper">
        <div className="container py-5 ">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photowrap">
                        <img className="myphoto"  src={author} alt="Author" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1  className="about_heading"  >About Me</h1>
                    <p className="about_paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis vitae officia explicabo est? Ab dolore et voluptatibus sit, voluptas cum consequuntur molestias a dolorum amet maxime corporis alias voluptates? Fuga velit a dolorem dolore voluptas animi ducimus aliquam sequi quasi qui optio quisquam expedita porro, iste ipsam laborum officiis. Distinctio, dolorem illo, eum corporis placeat, delectus sed nostrum officiis aspernatur quibusdam itaque facere dolores dolor tenetur rem. Quos quisquam accusamus necessitatibus nihil commodi animi saepe, magnam debitis provident enim similique non nesciunt consequatur dolore, quia culpa? Ex voluptates enim adipisci labore explicabo aut laborum excepturi exercitationem qui in repellat ea unde mollitia expedita, magnam, harum distinctio! Quia consequatur quae odio beatae officiis corporis officia, alias illo expedita autem debitis eligendi consequuntur corrupti eum, labore veniam totam mollitia et! Aperiam vel neque cupiditate dicta iure sapiente, ducimus eveniet ipsa quaerat rem quo molestias quibusdam officia commodi nulla dolores sed et quis?
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutMe
