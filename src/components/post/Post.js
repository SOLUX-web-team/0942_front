import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./post.css";

function Post({ id, writer, imgs, date, title, cost, place, invite_num, content, writer_score, scrap_num, category }) {
  const percost = Math.round(cost / (invite_num + 1));
  return (
    <Link
      to={{
        pathname: `/post/${id}`,
        state: { id, writer, imgs, date, title, cost, place, invite_num, content, writer_score, scrap_num, category, percost },
      }}
    >
      <div className="post">
        <aside>
          {imgs.length !== 0 ? (
            <img src={imgs[0]} alt={title} className="post_img" />
          ) : null}
        </aside>
        <main>
          <div className="post_userInfo">
            <img
              src="/images/main/user.png"
              alt="user"
              className="post_userImg"
            />
            <span className="post_id">{writer}</span>
            <span className="post_date">{date}</span>
          </div>
          <div className="post_content">
            <p className="post_title">{title}</p>
            {/* <span className="post_cost">배송비 : {cost}원</span> */}
            <span className="post_cost">인당 배송비 : {percost}원</span>
            <span className="post_place">배분 장소 : {place}</span>
            <p className="post_num">{invite_num}명 모집 중</p>
          </div>
        </main>
        <section>
          <span role="img" aria-label="heart">
            ❤️ {scrap_num}
          </span>
        </section>
      </div>
    </Link>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  writer: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  place: PropTypes.string.isRequired,
  invite_num: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  scrap_num: PropTypes.number,
};

export default Post;
