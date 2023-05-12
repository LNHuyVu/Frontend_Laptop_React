import React, { useState, useEffect } from "react";
import "./posttechnology.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import postService from "../../../services/post.service";
import { Link } from "react-router-dom";
const PostTechnology = (imagePost) => {
  console.log("IMGPOST", imagePost);
  const [posts, setPosts] = useState([]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    postService
      .getTopId(3)
      .then((reponse) => {
        console.log("POST", reponse.data);
        setPosts(reponse.data.post);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="posttechnology mt-2 p-1">
      <div className="row m-0">
        <div className="col-md-3 ps-0 pe-1">
          <div
            className="p-2 posttechnology-child h-100"
            style={{
              backgroundImage: `url(${imagePost.image[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <img
              className="w-100"
              src="https://res.cloudinary.com/duhwcwwyo/image/upload/v1679412600/cld-sample-2.jpg"
              alt=""
            /> */}
          </div>
        </div>
        <div className="col-md-9 ps-1 pe-0">
          <div className="p-2 posttechnology-child">
            <div class="d-flex justify-content-between">
              <div className="px-3 fw-bolder">
                <h3>24H Công nghệ</h3>
              </div>
              <Link to="post/danh-gia">
                <div className="px-3 align-self-center link">Xem thêm</div>
              </Link>
            </div>
            <Carousel responsive={responsive}>
              {posts.map((item) => {
                return (
                  <Link to={`post/danh-gia/${item.slug}`}>
                    <div class="card mx-1">
                      <img src={item.image} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p class="card-text card-text-title">{item.title}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTechnology;
